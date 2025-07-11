import { Ref } from 'vue'
import { FollowedAliment } from './ailment'

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
		category: 'damage' | 'damage+ailment' | 'ailment'
		max_turns?: number
		min_turns?: number
	}>
}
interface BattleMove {
	ko: string
	category: string
	expectDamage: number
	expectEffect: string
	used: boolean
	select: (hp: Ref<number>) => void
}
