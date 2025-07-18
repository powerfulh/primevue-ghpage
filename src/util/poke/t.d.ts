import { Ref } from 'vue'
import { FollowedAliment } from './ailment'
import { definedMoveCategory } from './const'

type CustomDefinedMove = (typeof definedMoveCategory)[number]

interface PokeType {
	name: string
	ko: string
	double_damage_from?: Array<PokeType>
	double_damage_to?: Array<PokeType>
}
interface Poke {
	name: string
	ko: string
	sprites: string
	flavor_text: string
	// 원래 배열인데 일단 첫번째만 취급해봄
	types: PokeType
	stats: {
		hp: number
		attack: number
		defense: number
	}
	move: Array<{
		name: string
		ko: string
		ailment: {
			name: FollowedAliment
			ailment_chance: number
		}
		category: CustomDefinedMove
		healing: number
		max_turns?: number
		min_turns?: number
		change?: number
		stat?: 'attack' | 'defense' | 'special-attack' | 'special-defense'
		accuracy?: number
	}>
}
interface BattleMove {
	ko: string
	category: CustomDefinedMove
	expectEffect: string
	used: boolean
	expectRate: number
	select: (hp: Ref<number>, healTarget: Ref<number>) => Promise<unknown>
}
