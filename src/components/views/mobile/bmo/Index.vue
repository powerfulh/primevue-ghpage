<script setup lang="ts">
import { useHeaderStore } from '@/stores/header'
import { Message } from 'primevue'
import ListItem from '../ListItem.vue'
import { injectApi } from 'powerful-api-vue3'
import { ref } from 'vue'

const headerStore = useHeaderStore()
const api = injectApi()

const list = ref([])

headerStore.placeholder = '회사로 검색'
headerStore.textList = ['새회사', '헌회사']
api.load('getCurtain')
	.setWhenSuccess(res => (list.value = res))
	.fire()
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
