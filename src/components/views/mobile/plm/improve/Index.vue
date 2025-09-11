<script setup lang="ts">
import { injectApi } from 'powerful-api-vue3'
import { Card } from 'primevue'
import { ref } from 'vue'
import JsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

const api = injectApi()

const understand = ref([])

api.load('getUnderstandBox')
	.setWhenSuccess(res => (understand.value = res))
	.fire()
</script>

<template>
	<main>
		<Card v-for="(item, i) in understand" :key="i">
			<template #title>{{ item.src }}</template>
			<template #content>
				<JsonPretty :data="item.sentence" />
			</template>
		</Card>
	</main>
</template>
