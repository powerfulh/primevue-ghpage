import { ApiOperation } from 'powerful-api-vue3/npmdist/apis'
import poke from './poke'
import powerful from './powerful'

export interface Curtain {
	nn: string
	cn: string
	t: string
	b: string
	cp: string
	d: string
}

export default {
	getCurtain: {
		type: 'get',
		url: 'https://port-0-powerful-spring-boot-5o1j2llh1wq9rp.sel4.cloudtype.app/api/curtain',
	} as ApiOperation<Array<Curtain>>,
	getCurtainChart: {
		type: 'get',
		url: 'https://port-0-powerful-spring-boot-5o1j2llh1wq9rp.sel4.cloudtype.app/api/curtain/chart',
	} as ApiOperation<{
		total: {
			tc: number
			tmd: string
		}
		comp: Array<{
			cpn: string
			cpc: number
			cpd: string
		}>
		topic: Array<{
			cnn: string
			cnc: number
			cnd: string
		}>
	}>,
	getCurtainRand: {
		type: 'get',
		url: 'https://port-0-powerful-spring-boot-5o1j2llh1wq9rp.sel4.cloudtype.app/api/curtain/rand',
	} as ApiOperation<Array<Curtain>>,
	getCurtainComp: {
		type: 'get',
		url: 'https://port-0-powerful-spring-boot-5o1j2llh1wq9rp.sel4.cloudtype.app/api/curtain/{company}',
		param: [
			{
				name: 'company',
				path: true,
			},
		],
	} as ApiOperation<Array<Curtain>>,
	authenticate: {
		type: 'post',
		url: 'https://port-0-powerful-spring-boot-5o1j2llh1wq9rp.sel4.cloudtype.app/powerful/authenticate',
		// 임시 2군 서버 (파워풀 JPA)
		// url: 'https://port-0-jpa-5o1j2llh1wq9rp.sel4.cloudtype.app/authentication',
		// url: 'http://localhost:8080/authentication',
		param: [
			{
				name: 'id',
			},
			{
				name: 'pw',
			},
		],
	} as ApiOperation<boolean>,
	...poke,
	...powerful,
}
