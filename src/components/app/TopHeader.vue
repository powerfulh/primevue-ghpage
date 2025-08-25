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
const items = computed(() => {
	return mobile.value
		? [
				{
					label: '모바일 커텐',
					icon: 'pi pi-list',
					command: () => router.push({ name: 'Blindmobile' }),
				},
				{
					label: '강력한 언어 모델',
					icon: 'pi pi-language',
					command: () => router.push({ name: 'Plm' }),
				},
				{
					label: '강력한 언어 모델 관리',
					icon: 'pi pi-language',
					command: () => router.push({ name: 'PlmAdmin' }),
				},
				{
					label: '강력한 데이타',
					icon: 'pi pi-database',
					command: () => router.push({ name: 'PowerfulApi' }),
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
				{
					label: '게임',
					icon: 'pi pi-microchip',
					command: () => router.push({ name: 'TestGame' }),
				},
			]
		: [
				{
					label: 'pc커텐',
					icon: 'pi pi-list',
					command: () => router.push({ name: 'Blindpc' }),
				},
				{
					label: '가챠겜',
					icon: 'pi pi-crown',
					command: () => router.push({ name: 'Pokegame' }),
				},
			]
})

function onClickRed() {
	headerStore.text = ''
	suggestions.value = []
}
function onGreen() {
	headerStore.onClickGreen && headerStore.onClickGreen()
	router.replace({
		query: {
			headerText: headerStore.text,
		},
	})
}

if (route.query.headerText) headerStore.text = route.query.headerText.toString()
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
				@option-select="onGreen"
			/>
			<Button :icon="'pi ' + (route.meta.btnIcon || 'pi-check')" @click="onGreen" />
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
