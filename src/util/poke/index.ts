import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { getApiStore } from 'powerful-api-vue3'
import { ToastServiceMethods } from 'primevue'
import { Ref } from 'vue'
import { AilmentSpec, apply, toDefined } from './ailment'
import { BattleMove, Poke } from './t'
import { definedMoveCategory, statMultiply } from './const'

export let myPoke: BattleSpec

function startAxios(r: InternalAxiosRequestConfig) {
	const apiStore = getApiStore()
	apiStore.loadingStack++
	return r
}
function endAxios(r: AxiosResponse) {
	const apiStore = getApiStore()
	if (apiStore.loadingStack > 0) apiStore.loadingStack--
	return r
}
function getRandomItem(target: Array<{ url: string }>, count: number) {
	if (target.length < count) return target
	const shuffled = [...target].sort(() => Math.random() - 0.5)
	return shuffled.slice(0, count)
}
function koFinder(item: { language: { name: string } }) {
	return item.language.name == 'ko'
}
async function replaceChain(target: Array<{ url: string }>, testUrl?: string) {
	if (testUrl) target[0].url = testUrl
	return Promise.all(target.map(({ url }) => axios.get(url))).then(l => l.map(({ data }) => ({ ...data, ko: data.names.find(koFinder)?.name })))
}
export async function newPoke(url: string, target: Poke, testUrl?: string) {
	const p = (await axios.get(url)).data
	const spec = (await axios.get(p.species.url)).data
	target.name = spec.name
	target.ko = spec.names.find(koFinder)?.name
	target.flavor_text = spec.flavor_text_entries.find(koFinder)?.flavor_text
	target.sprites = p.sprites.front_default
	const t = (await axios.get(p.types[0].type.url)).data
	target.types = {
		name: t.name,
		ko: t.names.find(koFinder).name,
		double_damage_from: await replaceChain(t.damage_relations.double_damage_from),
		double_damage_to: await replaceChain(t.damage_relations.double_damage_to),
	}
	target.stats = {
		hp: p.stats.find(({ stat }) => stat.name == 'hp').base_stat,
		attack: p.stats.find(({ stat }) => stat.name == 'attack').base_stat,
		defense: p.stats.find(({ stat }) => stat.name == 'defense').base_stat,
	}
	target.move = (
		await replaceChain(
			getRandomItem(
				p.moves.map(item => item.move),
				5,
			),
			testUrl,
		)
	)
		.filter(({ meta }) => meta) // 메타가 널인 경우가 발견됨 250702 https://pokeapi.co/api/v2/move/885
		.filter(({ meta }) => definedMoveCategory.includes(meta.category.name))
		.map(item => ({
			name: item.name,
			ko: item.ko,
			ailment: {
				name: item.meta.ailment.name,
				ailment_chance: item.meta.ailment_chance,
			},
			category: item.meta.category.name,
			max_turns: item.meta.max_turns,
			min_turns: item.meta.min_turns,
			change: item.stat_changes[0]?.change,
			stat: item.stat_changes[0]?.stat.name,
			accuracy: item.accuracy,
		}))
}
export function setMyPoke(target: Poke, lGetter: () => number, t: ToastServiceMethods) {
	myPoke = new BattleSpec(target, lGetter, t)
}
function safeDamage(hp: Ref<number>, d: number) {
	hp.value -= d > hp.value ? hp.value : d
}
function sleep() {
	return new Promise(resolve => setTimeout(resolve, 1000))
}

export class BattleSpec {
	p: Poke
	l: () => number
	toast: ToastServiceMethods
	ailment: AilmentSpec
	stat: {
		attack: number
		defense: number
		evasion: number // 회피
	}

	constructor(p: Poke, l: { (): number; (): number }, t: ToastServiceMethods) {
		this.p = p
		this.l = l
		this.toast = t
		this.ailment = { dot: [], skip: 0, defenseless: 0, infatuation: 0 }
		this.stat = { evasion: 0, attack: 100, defense: 100 }
	}

	getAttack() {
		return this.p.stats.attack * (1 + this.l() / 10)
	}
	getDefense() {
		return this.p.stats.defense * (1 + this.l() / 10)
	}
	getDamage(enemy: BattleSpec, defenseless = 0) {
		let d = this.getAttack() * (this.stat.attack / 100)
		if (this.p.types.double_damage_to.map(ddt => ddt.name).some(ddt => ddt == enemy.p.types.name)) d *= 2
		if (this.p.types.double_damage_from.map(ddt => ddt.name).some(ddt => ddt == enemy.p.types.name)) d *= 2
		if (defenseless == 0) d -= enemy.getDefense() * (enemy.stat.defense / 100)
		d = d > 0 ? d : 0
		return d
	}
	getChance(a: Poke['move'][number]) {
		// 누군진 못 봤는데 ailment 인 무브가 찬스가 0이길래 ailment는 확정인가보다 라고 생각 250710
		return a.category == 'damage+ailment' ? a.ailment.ailment_chance : a.category == 'ailment' ? 100 : 0
	}
	getPeriod(m: Poke['move'][number]) {
		return Math.floor(((m.max_turns || 2) + (m.min_turns || 0)) / 2)
	}
	getAilmentText(m: Poke['move'][number]) {
		const period = this.getPeriod(m)
		switch (toDefined(m.ailment.name)) {
			case 'skip':
				return `${this.getChance(m)}% 확률로 ${period}턴 생략`
			case 'neutralize':
				return `${this.getChance(m)}% 확률로 ${period}턴 생략 및 방어 무효`
			case 'dot':
				return `${this.getChance(m)}% 확률로 ${period}턴간 지속 피해`
			case 'no-defense':
				return `${this.getChance(m)}% 확률로 ${period}턴간 방어 무효`
			case 'infatuation':
				return `${this.getChance(m)}% 확률로 ${period}턴간 매혹`
			case 'nightmare':
				return `${this.getChance(m)}% 확률로 ${period}턴 생략 및 지속 피해`
		}
	}
	getMultiply(m: Poke['move'][number]) {
		let multiply = statMultiply
		// 이 겜은 특공방 없다 ㅋ 대신 증감 두배
		if (m.stat == 'special-attack') {
			m.stat = 'attack'
			multiply *= 2
		}
		if (m.stat == 'special-defense') {
			m.stat = 'defense'
			multiply *= 2
		}
		return multiply
	}
	getStatText(m: Poke['move'][number]) {
		const buff = m.change > 0 // 원래는 대상이 누구인지 필드가 있지만 그냥 양수면 내 버프 아니면 상대 디버프로 퉁치기
		let multiply = this.getMultiply(m)
		return `${buff ? '' : '적의 '} ${m.stat} 능력치를 ${m.change * multiply}% 증감시킨다`
	}
	getText(m: Poke['move'][number]) {
		switch (m.category) {
			case 'ailment':
			case 'damage+ailment':
				return this.getAilmentText(m)
			case 'net-good-stats':
				return this.getStatText(m)
		}
		return ''
	}
	getMoveList(enemy: BattleSpec): Array<BattleMove> {
		return this.p.move.map(item => ({
			ko: item.ko,
			category: item.category,
			expectDamage: this.getDamage(enemy),
			used: false,
			expectEffect: this.getText(item),
			expectRate: item.accuracy ?? 100,
			select: async (targetHp: Ref<number>) => {
				let pk: (value: unknown) => void
				const p = new Promise(reso => (pk = reso))
				let moveTarget = enemy
				if (this.ailment.infatuation) {
					this.toast.add({ detail: `매혹을 당해 스스로를 공격 목표로 삼습니다🤩`, life: 2000 })
					moveTarget = this
					await sleep()
				}
				const r = Math.random() * 100
				if (r > item.accuracy) {
					this.toast.add({ detail: `공격이 빗나가 무효화😥`, life: 2000 })
					pk('')
					return
				}
				switch (item.category) {
					case 'damage':
						safeDamage(targetHp, this.getDamage(moveTarget, moveTarget.ailment.defenseless))
						pk('')
						break
					case 'damage+ailment':
						safeDamage(targetHp, this.getDamage(moveTarget, moveTarget.ailment.defenseless))
						if (r < item.ailment.ailment_chance) {
							apply(item, this.getPeriod(item), moveTarget.ailment, () => safeDamage(targetHp, this.getDamage(moveTarget)))
							this.toast.add({ detail: `${this.getChance(item)}% 확률로 상태 이상 공격 성공✔`, life: 2000 })
						}
						pk('')
						break
					case 'net-good-stats':
						if (item.change > 0) moveTarget = this
						moveTarget.stat[item.stat] += item.change * this.getMultiply(item)
						this.toast.add({ detail: `증감된 ${item.stat} 능력치: ${moveTarget.stat[item.stat]}✔`, life: 2000 })
						pk('')
						break
					case 'ailment':
						if (r < item.ailment.ailment_chance) {
							apply(item, this.getPeriod(item), moveTarget.ailment, () => safeDamage(targetHp, this.getDamage(moveTarget)))
							this.toast.add({ detail: `${this.getChance(item)}% 확률로 상태 이상 공격 성공✔`, life: 2000 })
						}
						pk('')
						break
				}
				return p
			},
		}))
	}
}

axios.interceptors.request.use(startAxios)
axios.interceptors.response.use(endAxios)
