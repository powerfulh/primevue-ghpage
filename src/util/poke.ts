import axios from 'axios'
import { getApiStore } from 'powerful-api-vue3'

export interface Poke {
	name: string
	sprites: string
	types: Array<string>
	stats: {
		hp: number
		attack: number
		defense: number
	}
	move: Array<string>
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
export function newPoke(url: string, target: Poke) {
	axios.get(url).then(({ data }) => {
		axios.get(data.species.url).then(({ data: spec }) => {
			target.name = spec.names.find(item => item.language.name == 'ko').name
		})
		target.sprites = data.sprites.front_default
	})
}

axios.interceptors.request.use(startAxios)
axios.interceptors.response.use(endAxios)
