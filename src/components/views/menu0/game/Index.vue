<script setup lang="ts">
import { useHeaderStore } from '@/stores/header'
import { newPoke, Poke } from '@/util/poke'
import { injectApi } from 'powerful-api-vue3'
import { Badge, Card, Divider, ProgressBar } from 'primevue'
import { computed, ref } from 'vue'
import PokeSpec from './PokeSpec.vue'

const headerStore = useHeaderStore()
const api = injectApi()

const myPoke = ref({} as Poke)
const level = ref(0)
const exp = ref(0)

const expGoal = computed(() => 100 * (1 + level.value))
const expVal = computed(() => (exp.value / expGoal.value) * 100)

function startGame() {
	const p = new Promise(reso => {
		api.load('getPokelist')
			.setWhenSuccess(res => {
				newPoke(res.results[Math.floor(Math.random() * res.results.length)].url, myPoke.value, level, exp)
				reso(1)
			})
			.fire()
	})
	return p
}

headerStore.onClickGreen = async () => {
	await startGame()
	headerStore.onClickGreen = null
}
</script>

<template>
	<main>
		<Card>
			<template v-if="myPoke.sprites" #header>
				<img :src="myPoke.sprites" alt="sprite" />
			</template>
			<template #title>{{ myPoke.ko || '상단 오른쪽의 ✔ 버튼을 눌러 내 포켓몬을 받고 게임 시작하기 🔼' }}</template>
			<template v-if="myPoke.name" #content>
				<p>Level: <Badge :value="level" /></p>
				<p>
					<ProgressBar :value="expVal">{{ expVal }} / 100%</ProgressBar>
				</p>
			</template>
		</Card>
		<template v-if="myPoke.name">
			<Divider />
			<PokeSpec v-if="myPoke.move" :item="myPoke" />
		</template>
	</main>
</template>
