import { RouteRecordRaw } from 'vue-router'
import menu0 from './menu0'
import mobile from './mobile'

const list: Array<routeItem | routeMenu> = [
	{
		path: '/common-root',
		name: 'CommonRoot',
		sub: [menu0, mobile],
	},
	{
		path: '/',
		name: 'Home',
		redirect: '/common-root/menu0/pokegame',
	},
]

const routes: Array<RouteRecordRaw> = []

function isItem(target: routeItem | routeMenu): target is routeItem {
	return (target as routeItem).component !== undefined || (target as routeItem).redirect !== undefined || (target as routeItem).children !== undefined
}
function makeRoutes(l: Array<routeItem | routeMenu>, p: string): void {
	l.forEach(item => {
		if (isItem(item)) {
			item.path = p + item.path
			if (item.children && item.children.length) {
				item.children.forEach(child => {
					if (child.path) {
						child.meta = Object.assign(
							{
								depth4: true,
							},
							child.meta,
						)
					}
				})
			}
			routes.push(item as RouteRecordRaw)
		} else makeRoutes(item.sub, p + item.path)
	})
}

makeRoutes(list, '')

export default {
	list,
	routes,
}
