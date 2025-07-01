<script setup lang="ts">
import { Poke } from '@/util/poke'
import { Card } from 'primevue'

defineProps<{
	item: Poke
}>()
</script>

<template>
	<Card>
		<template #title>Spec</template>
		<template #subtitle>{{ item.species.flavor_text }}</template>
	</Card>
</template>
