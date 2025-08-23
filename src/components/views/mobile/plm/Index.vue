<script setup lang="ts">
import { injectApi } from 'powerful-api-vue3'
import { Button, Card, Column, DataTable, InputText } from 'primevue'
import { ref } from 'vue'

const api = injectApi()

const p = ref({ s: '' })
const w = ref([])

function onClickGet() {
	api.load('getWord')
		.setParameter(p)
		.setWhenSuccess(res => (w.value = res))
		.fire()
}
</script>

<template>
	<main>
		<Card>
			<template #title>단어 조회</template>
			<template #content>
				<InputText v-model="p.s" @keypress.enter="onClickGet" /><Button icon="pi pi-check" @click="onClickGet"></Button>
				<DataTable :value="w">
					<Column field="n" header="🆔" />
					<Column field="word" header="🆎" />
					<Column field="type" header="Type" />
					<Column field="memo" header="📝" />
				</DataTable>
			</template>
		</Card>
	</main>
</template>
