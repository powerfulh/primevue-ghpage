<script setup lang="ts">
import { Menubar } from 'primevue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const items = ref([
	{
		label: 'pc커텐',
		icon: 'pi pi-list',
		command: () => router.push({name: 'Blindpc'})
	},
	{
		label: 'pc커텐 통계',
		icon: 'pi pi-chart-bar',
		command: () => router.push({name: 'BlindpcChart'})
	},
])
</script>

<template>
	<Menubar :model="items" />
</template>
