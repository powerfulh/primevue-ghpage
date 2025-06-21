const r: routeMenu = {
	path: '/menu0',
	sub: [
		{
			name: 'Blindpc',
			path: '/blindpc',
			component: () => import('@/components/views/menu0/bpc/Index.vue'),
		},
		// {
		// 	name: 'Blindmobile',
		// 	path: '/blindmobile',
		// 	component: () => import('@/components/views/menu0/alert-confirm/Index.vue'),
		// },
	],
	name: 'Menu0',
}

export default r
