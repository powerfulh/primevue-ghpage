<script setup lang="ts">
import { Button, Menubar } from 'primevue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const d = import.meta.env.DEV

const router = useRouter()
const route = useRoute()

const mobile = computed(() => route.fullPath.includes('/common-root/mobile'))
const items = computed(() =>
	mobile.value
		? [
				{
					label: '모바일 커텐',
					icon: 'pi pi-list',
					command: () => router.push({ name: 'Blindmobile' }),
				},
				{
					label: '모바일 커텐 통계',
					icon: 'pi pi-chart-bar',
					command: () => router.push({ name: 'BlindChartmobile' }),
				},
			]
		: [
				{
					label: 'pc커텐',
					icon: 'pi pi-list',
					command: () => router.push({ name: 'Blindpc' }),
				},
				{
					label: 'pc커텐 통계',
					icon: 'pi pi-chart-bar',
					command: () => router.push({ name: 'BlindpcChart' }),
				},
			],
)
</script>

<template>
	<Menubar :model="items">
		<template v-if="d && mobile == false" #end>
			<Button icon="pi pi-mobile" severity="secondary" @click="router.push({ name: 'Blindmobile' })" />
		</template>
	</Menubar>
</template>
