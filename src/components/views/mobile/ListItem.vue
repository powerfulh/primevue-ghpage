<script setup lang="ts">
import { Card } from 'primevue'

defineProps<{
	item: {
		t: string
		b: string
	}
}>()
</script>

<template>
	<Card style="margin-top: 4px">
		<template #subtitle>Company · Nick · Channel · Date</template>
		<template #title>{{ item.t }}</template>
		<template #content>{{ item.b }}</template>
	</Card>
</template>
