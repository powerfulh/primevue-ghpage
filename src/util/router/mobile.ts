const r: routeMenu = {
	path: '/mobile',
	sub: [
		{
			name: 'Blindmobile',
			path: '/blind',
			component: () => import('@/components/views/mobile/bmo/Index.vue'),
			meta: {
				autoComplete: true,
			},
		},
		{
			name: 'BlindChartmobile',
			path: '/blindchart',
			component: () => import('@/components/views/mobile/chart/Index.vue'),
		},
		{
			name: 'Blindmobilerand',
			path: '/blindrand',
			component: () => import('@/components/views/mobile/curtain-rand/Index.vue'),
			meta: {
				btnIcon: 'pi-refresh',
			},
		},
		{
			name: 'TestGame',
			path: '/testgame',
			component: () => import('@/components/views/mobile/game/Index.vue'),
			meta: {
				solo: true,
			},
		},
	],
	name: 'Mobile',
}

export default r
