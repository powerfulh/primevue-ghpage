<script setup lang="ts">
import { Menubar } from 'primevue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const items = computed(() =>
	route.fullPath.includes('/common-root/mobile')
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
	<Menubar :model="items" />
</template>
