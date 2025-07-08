<script setup lang="ts">
import { getApiStore } from 'powerful-api-vue3'
import { Dialog, ProgressSpinner, ScrollPanel } from 'primevue'

const apiStore = getApiStore()
</script>

<template>
	<ScrollPanel style="height: calc(100vh - 60px)">
		<Dialog :visible="apiStore.loadingStack > 0" modal>
			<template #container><ProgressSpinner /></template>
		</Dialog>
		<RouterView />
	</ScrollPanel>
</template>
