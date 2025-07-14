<script setup lang="ts">
import { usePokeStore } from '@/stores/poke'
import { Button, Card, Divider, Message, Splitter, useToast } from 'primevue'
import { reactive, ref } from 'vue'
import BattlePanel from './BattlePanel.vue'
import { BattleSpec, myPoke, newPoke } from '@/util/poke'
import { injectApi } from 'powerful-api-vue3'
import { BattleMove, Poke } from '@/util/poke/t'

const pokeStore = usePokeStore()
const api = injectApi()
const toast = useToast()

const hp = ref(0)
const enemyPoke = ref({} as Poke)
const enemyHp = ref(0)
const enemyReady = ref(false)
const moves = reactive([] as Array<BattleMove>)
const myTurn = ref(true)
let enemy: BattleSpec
const waitAliment = ref(false)
const waitMove = ref(false)
const enemyMoves = reactive([] as Array<BattleMove>)

function fillMyHp() {
	hp.value = pokeStore.hp
}
function fillEnemyHp() {
	enemyHp.value = enemyPoke.value.stats.hp
}
async function applyAilment(acb: Function) {
	waitAliment.value = true
	const p = new Promise(reso => {
		setTimeout(() => {
			acb()
			waitAliment.value = false
			reso(1)
		}, 1000)
	})
	return p
}
function enemyMove() {
	waitMove.value = true
	const current = enemyMoves[0]
	setTimeout(async () => {
		if (enemy.ailment.skip > 0) {
			await applyAilment(() => {
				enemy.ailment.skip--
				toast.add({ detail: '턴 생략 적용⏰', life: 2000 })
			})
		} else {
			enemyMoves.push(...enemyMoves.splice(0, 1))
			current.select(hp)
		}
		myTurn.value = true
		if (myPoke.ailment.dot.length) {
			await applyAilment(() => {
				myPoke.ailment.dot[0]()
				toast.add({ detail: '지속 피해 적용🔥', life: 2000 })
				myPoke.ailment.dot.shift()
			})
		}
		if (myPoke.ailment.skip > 0) {
			await applyAilment(() => {
				myPoke.ailment.skip--
				toast.add({ detail: '턴 생략 적용⏰', life: 2000 })
			})
			myTurn.value = false
			if (enemy.ailment.dot.length) {
				await applyAilment(() => {
					enemy.ailment.dot[0]()
					toast.add({ detail: '지속 피해 적용🔥', life: 2000 })
					enemy.ailment.dot.shift()
				})
			}
			enemyMove()
		}
	}, 1000)
}
async function onClickMove(m: BattleMove) {
	m.select(enemyHp)
	m.used = true
	myTurn.value = false
	if (enemy.ailment.dot.length) {
		await applyAilment(() => {
			enemy.ailment.dot[0]()
			toast.add({ detail: '지속 피해 적용🔥', life: 2000 })
			enemy.ailment.dot.shift()
		})
	}
	enemyMove()
}

api.load('getPokelist')
	.setWhenSuccess(async res => {
		await newPoke(res.results[Math.floor(Math.random() * res.results.length)].url, enemyPoke.value, 'https://pokeapi.co/api/v2/move/9')
		enemy = new BattleSpec(enemyPoke.value, () => pokeStore.level, toast)
		moves.push(...myPoke.getMoveList(enemy))
		enemyMoves.push(...enemy.getMoveList(myPoke))
		enemyReady.value = true
	})
	.fire()
</script>

<template>
	<main>
		<Card>
			<template #title>
				{{ pokeStore.name }}
				<Message style="display: inline-block">VS</Message>
				{{ enemyPoke.ko + ' Lv ' + pokeStore.level }}</template
			>
			<template #content>
				<Splitter v-if="enemyReady">
					<BattlePanel :sprite="pokeStore.sprite" :name="pokeStore.name" :hp="hp" :max-hp="pokeStore.hp" @sprite="fillMyHp" />
					<BattlePanel :sprite="enemyPoke.sprites" :name="enemyPoke.ko" :hp="enemyHp" :max-hp="enemyPoke.stats.hp" enemy @sprite="fillEnemyHp" />
				</Splitter>
			</template>
		</Card>
		<Divider />
		<Card>
			<template #content>
				<span v-if="waitAliment">지속 피해 계산중..</span>
				<div v-else-if="myTurn" style="display: flex; justify-content: space-around">
					<Button v-for="(item, i) in moves" :key="i" variant="outlined" :disabled="item.used" @click="onClickMove(item)">
						<div>
							{{ item.ko }}
							<Divider />
							{{ item.category }}
							<template v-if="item.category.includes('damage')">
								<Divider />
								예상 데미지: {{ item.expectDamage }}
							</template>
							<template v-if="item.expectEffect">
								<Divider />
								효과: {{ item.expectEffect }}
							</template>
						</div>
					</Button>
				</div>
				<span v-else-if="waitMove">Action 선택중..</span>
			</template>
		</Card>
	</main>
</template>
