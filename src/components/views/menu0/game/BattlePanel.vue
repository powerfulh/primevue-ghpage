<script setup lang="ts">
import { ProgressBar, SplitterPanel } from 'primevue'
import { computed } from 'vue'

const props = defineProps<{
	sprite: string
	name: string
	hp: number
	maxHp: number
	enemy?: boolean
}>()

const hpProgress = computed(() => (props.hp / props.maxHp) * 100)
</script>

<template>
	<SplitterPanel :style="enemy ? 'text-align: right' : ''">
		<img :src="sprite" :alt="name" :style="enemy ? '' : 'transform: scaleX(-1)'" />
		<ProgressBar :value="hpProgress">HP: {{ hp }} ({{ hpProgress }}%)</ProgressBar>
	</SplitterPanel>
</template>

<script lang="ts">
export default {
	name: 'SplitterPanel',
}
</script>
