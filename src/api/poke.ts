import { ApiOperation } from 'powerful-api-vue3/npmdist/apis'

export default {
	getPokelist: {
		type: 'get',
		url: 'https://pokeapi.co/api/v2/pokemon',
	} as ApiOperation<{
		count: number
		next: string
		previous?: string
		results: Array<{
			name: string
			url: string
		}>
	}>,
}
