<script setup lang="ts">
import { useHeaderStore } from '@/stores/header'
import { Card, Menu } from 'primevue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const headerStore = useHeaderStore()

const items = ref([
	{
		label: '전투',
		icon: 'pi pi-circle',
		command() {
			action('Pokebattle')
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

function action(routeName: string) {
	headerStore.onClickGreen()
	router.push({ name: routeName })
}
</script>

<template>
	<Card>
		<template #title>Action</template>
		<template #content>
			<Menu :model="items" />
		</template>
	</Card>
</template>
