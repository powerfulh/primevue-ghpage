const r: routeMenu = {
	path: '/mobile',
	sub: [
		{
			name: 'Blindmobile',
			path: '/blind',
			component: () => import('@/components/views/menu0/bmo/Index.vue'),
		},
	],
	name: 'Mobile',
}

export default r
