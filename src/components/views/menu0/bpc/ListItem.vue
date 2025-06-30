<script setup lang="ts">
import { Curtain } from '@/api/operation'
import { Divider } from 'primevue'

defineProps<{
	item: Curtain
}>()
</script>

<template>
	<h1 style="margin-top: 0">{{ item.t }}</h1>
	<article>{{ item.b }}</article>
	<div style="margin-top: auto">
		<Divider />
		<footer style="display: flex">
			<div style="margin-right: 4px">{{ item.cp }}</div>
			·
			<div style="margin-right: 4px; margin-left: 4px">{{ item.nn }}</div>
			·
			<div style="margin-left: 4px">{{ item.cn }}</div>
			<div style="margin-left: auto">{{ item.d }}</div>
		</footer>
	</div>
</template>
