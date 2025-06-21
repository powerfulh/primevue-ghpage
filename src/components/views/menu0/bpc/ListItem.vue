<script setup lang="ts">
import { Divider } from 'primevue'

defineProps<{
	item: {
		t: string
		b: string
	}
}>()
</script>

<template>
	<h1 style="margin-top: 0">{{ item.t }}</h1>
	<article>{{ item.b }}</article>
	<div style="margin-top: auto">
		<Divider />
		<footer style="display: flex">
			<div style="margin-right: 4px">Company</div>
			·
			<div style="margin-right: 4px; margin-left: 4px">Nick</div>
			·
			<div style="margin-left: 4px">Channel</div>
			<div style="margin-left: auto">Date</div>
		</footer>
	</div>
</template>
