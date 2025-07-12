<script setup lang="ts">
import { useHeaderStore } from '@/stores/header'
import { newPoke, setMyPoke } from '@/util/poke'
import { injectApi } from 'powerful-api-vue3'
import { Badge, Button, Card, Divider, ProgressBar, useToast } from 'primevue'
import { computed, ref } from 'vue'
import PokeSpec from './PokeSpec.vue'
import PokeAction from './PokeAction.vue'
import { usePokeStore } from '@/stores/poke'
import { Poke } from '@/util/poke/t'

const headerStore = useHeaderStore()
const pokeStore = usePokeStore()
const api = injectApi()
const toast = useToast()

const currentPoke = ref({} as Poke)
const level = ref(0)
const exp = ref(0)

const expGoal = computed(() => 100 * (1 + level.value))
const expVal = computed(() => (exp.value / expGoal.value) * 100)

function startGame() {
	const p = new Promise(reso => {
		api.load('getPokelist')
			.setWhenSuccess(res => {
				newPoke(res.results[Math.floor(Math.random() * res.results.length)].url, currentPoke.value)
				pokeStore.save(level.value, exp.value, currentPoke.value)
				setMyPoke(currentPoke.value, () => level.value, toast)
				reso(1)
			})
			.fire()
	})
	headerStore.onClickGreen = () => {
		pokeStore.save(level.value, exp.value, currentPoke.value)
		toast.add({ detail: 'Saved', life: 2000 })
	}
	return p
}

headerStore.onClickGreen = null
if (pokeStore.loadable) {
	pokeStore.load(level, exp, currentPoke)
	headerStore.onClickGreen = () => {
		pokeStore.save(level.value, exp.value, currentPoke.value)
		toast.add({ detail: 'Saved', life: 2000 })
	}
}
</script>

<template>
	<main>
		<Card>
			<template v-if="currentPoke.sprites" #header>
				<img :src="currentPoke.sprites" alt="sprite" />
			</template>
			<template v-if="currentPoke.name" #title>{{ currentPoke.ko }}</template>
			<template v-else #title>
				<div style="text-align: center">
					<Button label="버튼을 눌러 내 포켓몬을 받고 게임 시작하기 ✔" @click="startGame" />
				</div>
			</template>
			<template v-if="currentPoke.name" #content>
				<p>Level: <Badge :value="level" /></p>
				<p>
					<ProgressBar :value="expVal">{{ expVal }} / 100%</ProgressBar>
				</p>
			</template>
		</Card>
		<template v-if="currentPoke.name">
			<Divider />
			<PokeSpec v-if="currentPoke.move" :item="currentPoke" />
			<Divider />
			<PokeAction />
		</template>
	</main>
</template>
