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
	sprites: string
	// 원래 배열인데 일단 첫번째만 취급해봄
	types: PokeType
	stats: {
		hp: number
		attack: number
		defense: number
	}
	move: Array<{
		name: string
		url: string
	}>
	species: {
		flavor_text: string
	}
}

export let myPoke: MyPoke

function startAxios(r) {
	const apiStore = getApiStore()
	apiStore.loadingStack++
	return r
}
function endAxios(r) {
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
export function newPoke(url: string, target: Poke, level: Ref<number>, exp: Ref<number>) {
	axios.get(url).then(({ data }) => {
		axios.get(data.species.url).then(({ data: spec }) => {
			target.name = spec.names.find(koFinder).name
			target.species = {
				flavor_text: spec.flavor_text_entries.find(koFinder)?.flavor_text,
			}
		})
		target.sprites = data.sprites.front_default
		axios.get(data.types[0].type.url).then(({ data: ty }) => {
			target.types = {
				name: ty.name,
				ko: ty.names.find(koFinder).name,
				double_damage_from: ty.damage_relations.double_damage_from.map(({ url }, i) =>
					axios.get(url).then(({ data: df }) => {
						target.types.double_damage_from[i] = {
							name: df.name,
							ko: df.names.find(koFinder).name,
						}
					}),
				),
				double_damage_to: ty.damage_relations.double_damage_to.map(({ url }, i) =>
					axios.get(url).then(({ data: df }) => {
						target.types.double_damage_to[i] = {
							name: df.name,
							ko: df.names.find(koFinder).name,
						}
					}),
				),
			}
		})
		target.stats = {
			hp: data.stats.find(({ stat }) => stat.name == 'hp').base_stat,
			attack: data.stats.find(({ stat }) => stat.name == 'attack').base_stat,
			defense: data.stats.find(({ stat }) => stat.name == 'defense').base_stat,
		}
		target.move = getRandomItem(
			data.moves.map(item => item.move),
			5,
		)
	})
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

	constructor(p, l, e) {
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
