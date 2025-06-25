const r: routeMenu = {
	path: '/mobile',
	sub: [
		{
			name: 'Blindmobile',
			path: '/blind',
			component: () => import('@/components/views/mobile/bmo/Index.vue'),
		},
    {
			name: 'BlindChartmobile',
			path: '/blindchart',
			component: () => import('@/components/views/mobile/chart/Index.vue'),
		},
	],
	name: 'Mobile',
}

export default r
