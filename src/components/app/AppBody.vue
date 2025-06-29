<script setup lang="ts">
import { getApiStore } from 'powerful-api-vue3'
import { ProgressSpinner, ScrollPanel } from 'primevue'

const apiStore = getApiStore()
</script>

<template>
	<ScrollPanel style="height: calc(100vh - 60px)">
		<!-- .p-datatable-scrollable-table > .p-datatable-thead {z-index: 1} -->
		<ProgressSpinner v-if="apiStore.loadingStack" style="position: fixed; z-index: 2; top: 40%; left: calc(50% - 50px)" />
		<RouterView />
	</ScrollPanel>
</template>
