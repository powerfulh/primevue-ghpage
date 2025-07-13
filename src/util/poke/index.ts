import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { getApiStore } from 'powerful-api-vue3'
import { ToastServiceMethods } from 'primevue'
import { Ref } from 'vue'
import { apply, toDefined } from './ailment'
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
async function replaceChain(target: Array<{ url: string }>) {
	// const turl = 'https://pokeapi.co/api/v2/move/7' // test todo
	return Promise.all(target.map(({ url }) => axios.get(url))).then(l => l.map(({ data }) => ({ ...data, ko: data.names.find(koFinder)?.name })))
}
export async function newPoke(url: string, target: Poke) {
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
			change: item.stat_changes[0]?.change,
			stat: item.stat_changes[0]?.stat.name,
		}))
}
export function setMyPoke(target: Poke, lGetter: () => number, t: ToastServiceMethods) {
	myPoke = new BattleSpec(target, lGetter, t)
}
function safeDamage(hp: Ref<number>, d: number) {
	// hp.value -= d > hp.value ? hp.value : d
	hp.value -= 1
}

export class BattleSpec {
	p: Poke
	l: () => number
	toast: ToastServiceMethods
	skip: number
	ailment: {
		dot: Array<() => void>
	}
	evasion: number // 회피

	constructor(p: Poke, l: { (): number; (): number }, t: ToastServiceMethods) {
		this.p = p
		this.l = l
		this.toast = t
		this.skip = 0
		this.ailment = { dot: [] }
		this.evasion = 0
	}

	getAttack() {
		return this.p.stats.attack * (1 + this.l() / 10)
	}
	getDefense() {
		return this.p.stats.defense * (1 + this.l() / 10)
	}
	getDamage(enemy: BattleSpec) {
		let d = this.getAttack()
		if (this.p.types.double_damage_to.map(ddt => ddt.name).some(ddt => ddt == enemy.p.types.name)) d *= 2
		if (this.p.types.double_damage_from.map(ddt => ddt.name).some(ddt => ddt == enemy.p.types.name)) d *= 2
		d -= enemy.getDefense()
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
				break
			case 'dot':
				return `${this.getChance(m)}% 확률로 ${period}턴간 지속 피해`
			case 'no-defense':
				break
			case 'infatuation':
				break
			case 'nightmare':
				break
		}
	}
	getStatText(m: Poke['move'][number]) {
		const buff = m.change > 0 // 원래는 대상이 누구인지 필드가 있지만 그냥 양수면 내 버프 아니면 상대 디버프로 퉁치기
		return `${buff ? '' : '적의 '} ${m.stat} 능력치를 ${m.change * statMultiply}% 증감시킨다`
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
			select: (enemyHp: Ref<number>) => {
				const r = Math.random() * 100
				switch (item.category) {
					case 'damage':
						safeDamage(enemyHp, this.getDamage(enemy))
						return
					case 'damage+ailment':
						safeDamage(enemyHp, this.getDamage(enemy))
						if (r < item.ailment.ailment_chance || true) {
							apply(item, this.getPeriod(item), enemy.ailment, () => safeDamage(enemyHp, this.getDamage(enemy)))
							this.toast.add({ detail: `${this.getChance(item)}% 확률로 상태 이상 공격 성공✔`, life: 2000 })
						}
						return
					// todo net-good-stats 아무 캐이스 하나만 고정시켜서 해보고 ailment 도 곧 하자
				}
			},
		}))
	}
}

axios.interceptors.request.use(startAxios)
axios.interceptors.response.use(endAxios)
