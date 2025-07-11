<script setup lang="ts">
import { usePokeStore } from '@/stores/poke'
import { Button, Card, Divider, Message, Splitter, useToast } from 'primevue'
import { reactive, ref } from 'vue'
import BattlePanel from './BattlePanel.vue'
import { BattleMove, BattleSpec, myPoke, newPoke, Poke } from '@/util/poke'
import { injectApi } from 'powerful-api-vue3'

const pokeStore = usePokeStore()
const api = injectApi()
const toast = useToast()

const hp = ref(0)
const enemyPoke = ref({} as Poke)
const enemyHp = ref(0)
const enemyReady = ref(false)
const moves = reactive([] as Array<BattleMove>)

function fillMyHp() {
	hp.value = pokeStore.hp
}
function fillEnemyHp() {
	enemyHp.value = enemyPoke.value.stats.hp
}
function onClickMove(m: BattleMove) {
	m.select(enemyHp)
}

api.load('getPokelist')
	.setWhenSuccess(async res => {
		await newPoke(res.results[Math.floor(Math.random() * res.results.length)].url, enemyPoke.value, ref(pokeStore.level), ref(0))
		moves.push(...myPoke.getMoveList(new BattleSpec(enemyPoke.value, () => pokeStore.level, toast)))
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
				<div style="display: flex; justify-content: space-around">
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
			</template>
		</Card>
	</main>
</template>
