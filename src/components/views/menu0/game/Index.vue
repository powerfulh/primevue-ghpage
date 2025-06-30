<script setup lang="ts">
import { useHeaderStore } from '@/stores/header'
import { newPoke, Poke } from '@/util/poke'
import { injectApi } from 'powerful-api-vue3'
import { Card } from 'primevue'
import { ref } from 'vue'

const headerStore = useHeaderStore()
const api = injectApi()

const d = ref([])
const myPoke = ref({} as Poke)
const level = ref(0)

function startGame() {
	api.load('getPokelist')
		.setWhenSuccess(res => {
			d.value = res.results
			newPoke(res.results[Math.floor(Math.random() * res.results.length)].url, myPoke.value)
		})
		.fire()
}

headerStore.onClickGreen = () => {
	startGame()
	headerStore.onClickGreen = null
}
</script>

<template>
	<main>
		<Card>
			<template v-if="myPoke.sprites" #header>
				<img :src="myPoke.sprites" alt="sprite" />
			</template>
			<template #title>{{ myPoke.name || '상단 오른쪽의 ✔ 버튼을 눌러 내 포켓몬을 받고 게임 시작하기 🔼' }}</template>
			<template v-if="myPoke.name" #content>
				<p>Level: {{ level }}</p>
			</template>
		</Card>
		{{ d }}
	</main>
</template>
