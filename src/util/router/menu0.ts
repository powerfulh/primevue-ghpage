const r: routeMenu = {
	path: '/menu0',
	sub: [
		{
			name: 'Blindpc',
			path: '/blindpc',
			component: () => import('@/components/views/menu0/bpc/Index.vue'),
		},
		{
			name: 'Pokegame',
			path: '/pokegame',
			component: () => import('@/components/views/menu0/game/Index.vue'),
		},
		{
			name: 'Pokebattle',
			path: '/pokebattle',
			component: () => import('@/components/views/menu0/game/PokeBattle.vue'),
		},
	],
	name: 'Menu0',
}

export default r
