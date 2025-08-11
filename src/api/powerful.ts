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
	postPapi: {
		type: 'post',
		url: 'https://port-0-powerful-spring-boot-5o1j2llh1wq9rp.sel4.cloudtype.app/powerful/api/{name}',
		param: [{ name: 'name', path: true }],
	} as ApiOperation<number>,
	putPapi: {
		type: 'put',
		url: 'https://port-0-powerful-spring-boot-5o1j2llh1wq9rp.sel4.cloudtype.app/powerful/api',
		param: [{ name: 'name' }, { name: 'data' }],
	} as ApiOperation<number>,
}
