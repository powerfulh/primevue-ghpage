<script setup lang="ts">
import { Card } from 'primevue'

defineProps<{
	item: {
		word: number
		value: string
		rightword: string
		src: string
	}
}>()
</script>

<template>
	<Card :id="'learn' + item.word">
		<template #title>{{ item.value }}</template>
		<template #subtitle
			>{{ item.word }}<span v-if="item.rightword"> (rw: {{ item.rightword }})</span></template
		>
		<template #content>{{ item.src }}</template>
	</Card>
</template>
