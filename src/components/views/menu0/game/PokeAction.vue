<script setup lang="ts">
import { Card, Menu } from 'primevue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const items = ref([
	{
		label: '전투',
		icon: 'pi pi-circle',
		command() {
			router.push({ name: 'Pokebattle' })
		},
	},
	// {
	// 	label: '상점',
	// 	icon: 'pi pi-shopping-cart',
	// },
	// {
	// 	label: '제작',
	// 	icon: 'pi pi-hammer',
	// },
])
</script>

<template>
	<Card>
		<template #title>Action</template>
		<template #content>
			<Menu :model="items" />
		</template>
	</Card>
</template>
