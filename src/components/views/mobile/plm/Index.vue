<script setup lang="ts">
import { injectApi } from 'powerful-api-vue3'
import { Button, Card, Column, DataTable, DataTableRowSelectEvent, InputText, Menu } from 'primevue'
import { ref } from 'vue'

const api = injectApi()

const p = ref({ s: '' })
const w = ref([])
const rowMenu = [{ label: '결합 사용처 조회', command: onClickGetCompound }]
let currentWord
const compoundParam = ref({ s: '' })
const compoundList = ref([])

function onClickGet() {
	api.load('getWord')
		.setParameter(p)
		.setWhenSuccess(res => (w.value = res))
		.fire()
}
function onRowSelect(e: DataTableRowSelectEvent) {
	currentWord = e.data.n
	po.value.toggle(e.originalEvent)
}
function onEnterGetCompound() {
	api.load('getCompound')
		.setParameter(compoundParam)
		.setWhenSuccess(res => (compoundList.value = res))
		.fire()
}
function onClickGetCompound() {
	compoundParam.value.s = currentWord
	onEnterGetCompound()
}

// am
const po = ref()
</script>

<template>
	<main>
		<Card>
			<template #title>단어 조회</template>
			<template #content>
				<form>
					<InputText v-model="p.s" maxlength="10" style="width: 14rem" @keypress.enter="onClickGet" />
					<Button icon="pi pi-check" @click="onClickGet"></Button>
				</form>
				<DataTable :value="w" selection-mode="single" @row-select="onRowSelect">
					<Column field="n" header="🆔" />
					<Column field="word" header="🆎" />
					<Column field="type" header="🏷" />
					<Column field="memo" header="📝" />
				</DataTable>
			</template>
		</Card>
		<Card>
			<template #title>결합 사용처 조회</template>
			<template #content>
				<input v-model="compoundParam.s" type="number" @keypress.enter="onEnterGetCompound" />
				<DataTable :value="compoundList">
					<Column field="cw" header="🆎" />
					<Column field="lw" header="⬅" />
					<Column field="rw" header="➡" />
				</DataTable>
			</template>
		</Card>

		<Menu :model="rowMenu" popup ref="po" />
	</main>
</template>
