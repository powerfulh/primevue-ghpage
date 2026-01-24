<script setup lang="ts">
import { injectApi } from 'powerful-api-vue3'
import { Button, Card, InputGroup, InputNumber, Message } from 'primevue'
import { ref } from 'vue'
import JsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

const api = injectApi()

const understand = ref([])
const sentenceTarget = ref(null as number)

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
				<br />
				<Button icon="pi pi-check" @click="deactivate(item.n)" />
			</template>
		</Card>
		<template v-if="understand.length == 0">
			<Message severity="contrast" icon="pi pi-check" style="margin-top: 4px">이해 대상 없음 > 문장 현황</Message>
			<Card>
				<template #title>Sentence content</template>
				<template #subtitle>N, ymd</template>
				<template #content>
					<InputGroup>
						<InputNumber v-model="sentenceTarget" placeholder="Target n" />
						<Button icon="pi pi-check" />
					</InputGroup>
				</template>
			</Card>
		</template>
	</main>
</template>
