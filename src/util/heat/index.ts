type pk = number
type elementState = 'solid' | 'liquid' | 'gas'

interface Element {
	name: string
	state: elementState
	heatCapacity: number
	conductivity: number
}
export interface Tile {
	n: pk
	el: Element
	g: number
	temper: number
	deactivate?: boolean
	direction?: 'u' | 'd' | 'l' | 'r'
}

const elementList: Array<Element> = (
	[
		{
			name: 'oxygen',
			state: 'gas',
			heatCapacity: 0.918,
			conductivity: 1,
		},
		{
			name: 'carbon dioxide',
			state: 'gas',
			heatCapacity: 0.844,
			conductivity: 1,
		},
		{
			name: 'hydrogen',
			state: 'gas',
			heatCapacity: 14.3,
			conductivity: 1,
		},
		{
			name: 'metal tile',
			state: 'solid',
			heatCapacity: 1,
			conductivity: 5,
		},
		{
			name: 'wood tile',
			state: 'solid',
			heatCapacity: 1,
			conductivity: 0.5,
		},
	] as const
).map(item => ({ ...item, heatCapacity: item.heatCapacity }))

export function getElement(name: Element['name']) {
	return elementList.find(item => item.name == name)
}
export function step(list: Array<Tile>) {
	// const len = list.length
	const widthMax = 4
	list.forEach((item, i) => {
		if (item.deactivate) return
		const exists = {
			up: i - widthMax < 0 ? undefined : list[i - widthMax],
			down: list[i + widthMax],
			left: i % widthMax == 0 ? undefined : list[i - 1],
			right: i % widthMax == widthMax - 1 ? undefined : list[i + 1],
		}
		Object.keys(exists)
			.map(k => exists[k])
			.filter((tradeTarget: Tile) => tradeTarget && tradeTarget.deactivate != true)
			.forEach((tradeTarget: Tile) => {
				if (item.el.name == tradeTarget.el.name && Math.abs(item.g - tradeTarget.g) > 2) {
					const [taker, takee] = [item, tradeTarget].sort((a, b) => (a.g > b.g ? 1 : -1))
					taker.g++
					takee.g--
				}
				// 지피티야 도와줘!
				const temperDiff = item.temper - tradeTarget.temper
				if (temperDiff < 1) return
				// 열전도율은 두 셀 평균으로 계산
				const kAvg = (item.el.conductivity + tradeTarget.el.conductivity) / 2
				// 열량 Q = k * ΔT (간단화)
				const Q = kAvg * temperDiff
				// 온도 변화 ΔT = Q / (m * c)
				const dTCell = -Q / (item.g * item.el.heatCapacity)
				const dTNeighbor = Q / (tradeTarget.g * tradeTarget.el.heatCapacity)

				item.temper += dTCell
				tradeTarget.temper += dTNeighbor
			})
	})
}
export function getElementNameList() {
	return elementList.map(item => item.name)
}
