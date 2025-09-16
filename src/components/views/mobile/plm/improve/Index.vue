<script setup lang="ts">
import { injectApi } from 'powerful-api-vue3'
import { Button, Card } from 'primevue'
import { ref } from 'vue'
import JsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

const api = injectApi()

const understand = ref([])

function deactivate(n: number) {
	api.load('putUnderstandBoxActivation').setParameter(ref({ n })).setWhenSuccess(init).fire()
}
function init() {
	api.load('getUnderstandBox')
		.setWhenSuccess(res => (understand.value = res))
		.fire()
}

init()
</script>

<template>
	<main>
		<Card v-for="(item, i) in understand" :key="i">
			<template #title>{{ item.src }}</template>
			<template #subtitle>{{ item.n }}</template>
			<template #content>
				<JsonPretty :data="item.sentence" />
				<Button icon="pi pi-check" @click="deactivate(item.n)" />
			</template>
		</Card>
	</main>
</template>
