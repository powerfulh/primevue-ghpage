<script setup lang="ts">
import { Menubar } from 'primevue'
import { ref } from 'vue'

const items = ref([
	{
		label: 'pc커텐',
		icon: 'pi pi-list',
		// command: () =>
	},
	{
		label: 'pc커텐 통계',
		icon: 'pi pi-chart-bar',
	},
])
</script>

<template>
	<Menubar :model="items" />
</template>
