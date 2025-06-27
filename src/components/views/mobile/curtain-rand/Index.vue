<script setup lang="ts">
import { Message } from 'primevue'
import ListItem from '../ListItem.vue'
import { injectApi } from 'powerful-api-vue3'
import { ref } from 'vue'
import { useHeaderStore } from '@/stores/header'

const headerStore = useHeaderStore()
const api = injectApi()

const list = ref([])

function get() {
	api.load('getCurtainRand')
		.setWhenSuccess(res => (list.value = res))
		.fire()
}

get()
headerStore.onClickGreen = get
</script>

<template>
	<main>
		<ListItem v-for="(item, i) in list" :key="i" :item="item" />
		<Message severity="contrast" icon="pi pi-check" style="margin-top: 4px">게시물은 최대 100개까지 조회됩니다</Message>
	</main>
</template>

<style lang="scss" scoped>
p {
	margin: 0;
	padding: 8px;
}
</style>
