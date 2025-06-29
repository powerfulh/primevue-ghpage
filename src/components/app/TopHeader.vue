<script setup lang="ts">
import { useHeaderStore } from '@/stores/header'
import { AutoComplete, Button, Menubar } from 'primevue'
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const d = import.meta.env.DEV

const router = useRouter()
const route = useRoute()
const headerStore = useHeaderStore()

const suggestions = ref([])

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
				{
					label: '모바일 커텐 랜덤',
					icon: 'pi pi-list',
					command: () => router.push({ name: 'Blindmobilerand' }),
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

function onClickRed() {
	headerStore.text = ''
	suggestions.value = []
}
</script>

<template>
	<Menubar :model="items">
		<template #end>
			<AutoComplete
				v-if="route.meta.autoComplete"
				v-model="headerStore.text"
				:placeholder="headerStore.placeholder"
				:suggestions="suggestions"
				:input-style="{ width: '100%' }"
				style="width: 64%"
				@complete="({ query }) => (suggestions = headerStore.textList.filter(item => item.includes(query)))"
			/>
			<Button :icon="'pi ' + (route.meta.btnIcon || 'pi-check')" @click="headerStore.onClickGreen && headerStore.onClickGreen()" />
			<Button icon="pi pi-times" severity="danger" @click="onClickRed" />
			<Button v-if="d && mobile == false" icon="pi pi-mobile" severity="secondary" @click="router.push({ name: 'Blindmobile' })" />
		</template>
	</Menubar>
</template>

<style lang="scss">
.p-menubar-end {
	text-align: right;
	> * {
		margin-left: 2px;
	}
}
</style>
