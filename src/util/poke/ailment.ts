import { Poke } from './t'

export type FollowedAliment = 'paralysis' | 'sleep' | 'freeze' | 'burn' | 'poison' | 'confusion' | 'infatuation' | 'trap' | 'nightmare' | 'torment' | 'disable'
type CustomDefined = 'skip' | 'neutralize' | 'dot' | 'no-defense' | 'infatuation' | 'nightmare'

export interface AilmentSpec {
	dot: Array<() => void>
	skip: number
	defenseless: number
}

export function toDefined(a: FollowedAliment): CustomDefined {
	switch (a) {
		case 'paralysis': // 마비
		case 'disable':
		case 'freeze':
			return 'skip' // 턴 생략
		case 'sleep':
		case 'trap':
			return 'neutralize' // 턴 생략, 방어 무효
		case 'burn':
		case 'poison':
		case 'torment': // 고통
			return 'dot' // 지속 딜
		case 'confusion':
			return 'no-defense' // 방어 무효
		case 'infatuation': // 매혹
			return 'infatuation' // 자해
		case 'nightmare':
			return 'nightmare' // 턴 생략, 지속 딜
	}
}
export function apply(m: Poke['move'][number], p: number, a: AilmentSpec, cb: () => void) {
	for (let i = 0; i < p; i++) {
		switch (toDefined(m.ailment.name)) {
			case 'skip':
				a.skip++
				break
			case 'neutralize':
				a.skip++
				a.defenseless++
				if (a.defenseless == 1) a.defenseless++
				break
			case 'dot':
				a.dot.push(cb)
				break
			case 'no-defense':
				break
			case 'infatuation':
				break
			case 'nightmare':
				break
		}
	}
}
