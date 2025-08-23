import { ApiOperation } from 'powerful-api-vue3/npmdist/apis'

export default {
	getWord: {
		type: 'get',
		url: 'https://port-0-powerful-spring-boot-5o1j2llh1wq9rp.sel4.cloudtype.app/plm/word',
		param:[{name: 's'}]
	} as ApiOperation<
		Array<{
			word: string
			type: string
		}>
	>,
}
