<script setup lang="ts">
import { Card } from 'primevue'
</script>

<template>
	<main>
		<Card>
			<template #title>Src</template>
			<template #content>{{ { list: [], point: 0 } }}</template>
		</Card>
	</main>
</template>
