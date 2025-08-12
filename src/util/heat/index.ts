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
}

const elementList: Array<Element> = (
	[
		{
			name: 'oxygen',
			state: 'gas',
			heatCapacity: 0.918,
			conductivity: 1,
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
		const exists = {
			up: i - widthMax < 0 ? undefined : list[i - widthMax],
			down: list[i + widthMax],
			left: i % widthMax == 0 ? undefined : list[i - 1],
			right: i % widthMax == widthMax - 1 ? undefined : list[i + 1],
		}
		Object.keys(exists)
			.map(k => exists[k])
			.forEach((tradeTarget: Tile) => {
				if (tradeTarget == undefined) return
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
