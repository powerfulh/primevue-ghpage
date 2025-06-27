<script setup lang="ts">
import { getApiStore } from 'powerful-api-vue3'
import { ProgressSpinner, ScrollPanel } from 'primevue'

const apiStore = getApiStore()
</script>

<template>
	<ScrollPanel style="height: calc(100vh - 60px)">
		<ProgressSpinner v-if="apiStore.loadingStack" style="width: 100%; position: absolute; z-index: 1" />
		<RouterView />
	</ScrollPanel>
</template>
