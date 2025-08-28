import { ApiOperation } from 'powerful-api-vue3/npmdist/apis'

export default {
	getWord: {
		type: 'get',
		url: 'https://port-0-powerful-spring-boot-5o1j2llh1wq9rp.sel4.cloudtype.app/plm/word',
		param: [{ name: 's' }],
	} as ApiOperation<
		Array<{
			word: string
			type: string
		}>
	>,
	postWord: {
		type: 'post',
		url: 'https://port-0-powerful-spring-boot-5o1j2llh1wq9rp.sel4.cloudtype.app/plm/word',
		param: [{ name: 'word' }, { name: 'type' }, { name: 'memo' }],
	} as ApiOperation<void>,
	getCompound: {
		type: 'get',
		url: 'https://port-0-powerful-spring-boot-5o1j2llh1wq9rp.sel4.cloudtype.app/plm/compound/{s}',
		param: [{ name: 's', path: true }],
	} as ApiOperation<
		Array<{
			cw: string
			lw: string
			rw: string
		}>
	>,
	postCompound: {
		type: 'post',
		url: 'https://port-0-powerful-spring-boot-5o1j2llh1wq9rp.sel4.cloudtype.app/plm/compound',
		param: [{ name: 'word' }, { name: 'leftword' }, { name: 'rightword' }],
	} as ApiOperation<
		Array<{
			cw: string
			lw: string
			rw: string
		}>
	>,
	getLeftRight: {
		type: 'get',
		url: 'https://port-0-powerful-spring-boot-5o1j2llh1wq9rp.sel4.cloudtype.app/plm/leftright/{n}',
		param: [{ name: 'n', path: true }],
	} as ApiOperation<
		Array<{
			word: string
			type: string
		}>
	>,
}
