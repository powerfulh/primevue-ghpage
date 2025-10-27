<script setup lang="ts">
import { injectApi } from 'powerful-api-vue3'
import { Button, Card, Column, DataTable, DataTableRowSelectEvent, InputText, Menu, useToast } from 'primevue'
import { computed, inject, ref } from 'vue'
import LearnItem from './LearnItem.vue'

const api = injectApi()
const initScroll: Function = inject('initScroll')
const toast = useToast()

const p = ref({ s: '' })
const w = ref([])
const rowMenu = [
	{ label: '결합 사용처 조회 📋', command: onClickGetCompound },
	{ label: '문맥 조회 📋', command: onClickGetContext },
]
let currentWord: number
const compoundParam = ref({ s: null })
const compoundList = ref([])
const currentType = ref('')
const learnList = ref([])
let scrollInitReady = false
const contextParam = ref({ n: null })
const contextList = ref([])

const finalMenu = computed(() => {
	const l = [...rowMenu]
	if (currentType.value == '결합') l.push({ label: '결합 재료 조회', command: onClickGetLeftRight })
	if (['학습', '학습 결합'].includes(currentType.value)) {
		l.push({
			label: '학습처 보기',
			command: () => {
				const e = document.querySelector('#learn' + currentWord)
				if (e) {
					e.scrollIntoView()
					scrollInitReady = true
				} else {
					toast.add({ detail: `오래된 학습`, life: 2000, severity: 'warn' })
					api.load('getOneLearn')
						.setParameter(ref({ n: currentWord }))
						.setWhenSuccess(res => learnList.value.unshift(res))
						.fire()
				}
			},
		})
	}
	return l
})

function onClickGet() {
	api.load('getWord')
		.setParameter(p)
		.setWhenSuccess(res => (w.value = res))
		.fire()
}
function onRowSelect(e: DataTableRowSelectEvent) {
	currentWord = e.data.n
	currentType.value = e.data.type
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
	navigator.clipboard.writeText(currentWord.toString())
	onEnterGetCompound()
}
function onClickGetLeftRight() {
	api.load('getLeftRight')
		.setParameter(ref({ n: currentWord }))
		.setWhenSuccess(res => (w.value = res))
		.fire()
}
function getLearn() {
	api.load('getLearn')
		.setWhenSuccess(res => (learnList.value = res))
		.fire()
}
function getContext() {
	api.load('getContext')
		.setParameter(contextParam)
		.setWhenSuccess(res => (contextList.value = res))
		.fire()
}
function onClickGetContext() {
	contextParam.value.n = currentWord
	navigator.clipboard.writeText(currentWord.toString())
	getContext()
}

getLearn()

// am
const po = ref()

function onClickLearn() {
	if (scrollInitReady) {
		scrollInitReady = false
		initScroll()
	}
}
</script>

<template>
	<main>
		<Card>
			<template #title>단어 조회</template>
			<template #content>
				<form onsubmit="return false">
					<InputText v-model="p.s" maxlength="10" autofocus style="width: 14rem" @keypress.enter="onClickGet" />
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
		<Card>
			<template #title>문맥 조회</template>
			<template #content>
				<input v-model="contextParam.n" type="number" @keypress.enter="getContext" />
				<DataTable :value="contextList">
					<Column field="lw" header="⬅" />
					<Column field="rw" header="➡" />
					<Column field="cnt" header="▶" />
					<Column field="space" header="⏩" />
				</DataTable>
			</template>
		</Card>
		<LearnItem v-for="(item, i) in learnList" :key="i" :item="item" @click="onClickLearn" />

		<Menu :model="finalMenu" popup ref="po" />
	</main>
</template>
