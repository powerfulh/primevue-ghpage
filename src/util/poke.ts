import axios from 'axios'
import { getApiStore } from 'powerful-api-vue3'

export interface Poke {
	name: string
	sprites: string
	// 원래 배열인데 일단 첫번째만 취급해봄
	types: {
		name: string
		url: string
	}
	stats: {
		hp: number
		attack: number
		defense: number
	}
	move: Array<{
		name: string
		url: string
	}>
}

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
export function newPoke(url: string, target: Poke) {
	axios.get(url).then(({ data }) => {
		axios.get(data.species.url).then(({ data: spec }) => {
			target.name = spec.names.find(item => item.language.name == 'ko').name
		})
		target.sprites = data.sprites.front_default
		target.types = data.types[0].type
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
}

axios.interceptors.request.use(startAxios)
axios.interceptors.response.use(endAxios)
