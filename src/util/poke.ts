import axios from 'axios'
import { getApiStore } from 'powerful-api-vue3'
import { Ref } from 'vue'

interface PokeType {
	name: string
	ko: string
	double_damage_from?: Array<PokeType>
	double_damage_to?: Array<PokeType>
}
export interface Poke {
	name: string
	ko: string
	sprites: string
	flavor_text: string
	// 원래 배열인데 일단 첫번째만 취급해봄
	types: PokeType
	stats: {
		hp: number
		attack: number
		defense: number
	}
	move: Array<{
		name: string
		ko: string
		ailment: {
			name: string
			ailment_chance: number
		}
		category: string
	}>
}

export let myPoke: MyPoke

function startAxios(r: any) {
	const apiStore = getApiStore()
	apiStore.loadingStack++
	return r
}
function endAxios(r: any) {
	const apiStore = getApiStore()
	if (apiStore.loadingStack > 0) apiStore.loadingStack--
	return r
}
function getRandomItem(target: Array<any>, count: number) {
	if (target.length < count) return target
	const shuffled = [...target].sort(() => Math.random() - 0.5)
	return shuffled.slice(0, count)
}
function koFinder(item: { language: { name: string } }) {
	return item.language.name == 'ko'
}
async function replaceChain(target: Array<{ url: string }>) {
	return Promise.all(target.map(({ url }) => axios.get(url))).then(l => l.map(({ data }) => ({ ...data, ko: data.names.find(koFinder)?.name })))
}
export async function newPoke(url: string, target: Poke, level: Ref<number>, exp: Ref<number>) {
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
		.map(item => ({
			...item,
			ailment: {
				name: item.meta.ailment.name,
				ailment_chance: item.meta.ailment_chance,
			},
			category: item.meta.category.name,
		}))
	myPoke = new MyPoke(
		target,
		() => level.value,
		() => exp.value,
	)
}

export class MyPoke {
	p: Poke
	l: () => number
	e: () => number

	constructor(p: Poke, l: { (): number; (): number }, e: { (): number; (): number }) {
		this.p = p
		this.l = l
		this.e = e
	}

	getAttack() {
		return this.p.stats.attack * (1 + this.l() / 10)
	}
	getDefense() {
		return this.p.stats.defense * (1 + this.l() / 10)
	}
}

axios.interceptors.request.use(startAxios)
axios.interceptors.response.use(endAxios)
