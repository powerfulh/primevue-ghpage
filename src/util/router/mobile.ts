const r: routeMenu = {
	path: '/mobile',
	sub: [
		{
			name: 'Blindmobile',
			path: '/blind',
			component: () => import('@/components/views/mobile/bmo/Index.vue'),
      meta: {
        autoComplete: true
      }
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
