import { ApiOperation } from 'powerful-api-vue3/npmdist/apis'

export default {
	getPapi: {
		type: 'get',
		url: 'https://port-0-powerful-spring-boot-5o1j2llh1wq9rp.sel4.cloudtype.app/powerful/api',
	} as ApiOperation<
		Array<{
			name: string
			data: string
		}>
	>,
}
