import { ApiOperation } from 'powerful-api-vue3/npmdist/apis'
import poke from './poke'

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
	...poke,
}
