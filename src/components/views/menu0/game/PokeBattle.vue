<script setup lang="ts">
import { usePokeStore } from '@/stores/poke'
import { Button, Card, Divider, Message, Splitter } from 'primevue'
import { reactive, ref } from 'vue'
import BattlePanel from './BattlePanel.vue'
import { BattleSpec, myPoke, newPoke, Poke } from '@/util/poke'
import { injectApi } from 'powerful-api-vue3'

const pokeStore = usePokeStore()
const api = injectApi()

const hp = ref(0)
const enemyPoke = ref({} as Poke)
const enemyHp = ref(0)
const enemyReady = ref(false)
const moves = reactive([])

function fillMyHp() {
	hp.value = pokeStore.hp
}
function fillEnemyHp() {
	enemyHp.value = enemyPoke.value.stats.hp
}

api.load('getPokelist')
	.setWhenSuccess(async res => {
		await newPoke(res.results[Math.floor(Math.random() * res.results.length)].url, enemyPoke.value, ref(pokeStore.level), ref(0))
		moves.push(...myPoke.getMoveList(new BattleSpec(enemyPoke.value, () => pokeStore.level)))
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
				<Button v-for="(item, i) in moves" :key="i" variant="outlined" :disabled="item.used">
					<div>
						{{ item.ko }}
						<Divider />
					</div>
				</Button>
			</template>
		</Card>
	</main>
</template>
