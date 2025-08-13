<script setup lang="ts">
import { Curtain } from '@/api/operation'
import { Card } from 'primevue'

defineProps<{
	item: Curtain
}>()
</script>

<template>
	<Card>
		<template #subtitle>{{ item.cp }} · {{ item.nn }} · {{ item.cn }} · {{ item.d.substring(2) }}</template>
		<template #title>{{ item.t }}</template>
		<template #content>{{ item.b }}</template>
	</Card>
</template>
