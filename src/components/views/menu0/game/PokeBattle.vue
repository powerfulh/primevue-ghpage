<script setup lang="ts">
import { usePokeStore } from '@/stores/poke'
import { Card, Splitter } from 'primevue'
import { ref } from 'vue'
import BattlePanel from './BattlePanel.vue'

const pokeStore = usePokeStore()

const hp = ref(pokeStore.hp)
</script>

<template>
	<main>
		<Card>
			<template #title>{{ pokeStore.name }} VS</template>
			<template #content>
				<Splitter>
					<BattlePanel :sprite="pokeStore.sprite" :name="pokeStore.name" :hp="hp" :max-hp="pokeStore.hp" />
					<BattlePanel :sprite="pokeStore.sprite" :name="pokeStore.name" :hp="hp" :max-hp="pokeStore.hp" enemy />
				</Splitter>
			</template>
		</Card>
	</main>
</template>
