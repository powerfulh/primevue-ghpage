import { createRouter, createWebHashHistory } from 'vue-router'
import routerUtil from '@/util/router'
import { useHeaderStore } from '@/stores/header'

const router = createRouter({
	// history: createWebHistory(import.meta.env.BASE_URL),
	history: createWebHashHistory(import.meta.env.BASE_URL), // 주소에 샾이 붙는데 지피티가 이러면 새로고침에 대응할 수 있다고 한다
	routes: [...routerUtil.routes],
})

router.beforeEach((to, from) => {
	const headerStore = useHeaderStore()
	if (to.name != from.name) headerStore.onClickGreen = null
})
router.afterEach((to, from) => {
	// 유효하지 않은 라우트는 이전 라우트로 이동 => 동 라우트 새로 고침으로도 활용
	if (to.name == undefined) router.replace(from.fullPath)
})

export default router
