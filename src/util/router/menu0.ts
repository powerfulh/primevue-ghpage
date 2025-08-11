const r: routeMenu = {
	path: '/menu0',
	sub: [
		{
			name: 'Blindpc',
			path: '/blindpc',
			component: () => import('@/components/views/menu0/bpc/Index.vue'),
		},
	],
	name: 'Menu0',
}

export default r
