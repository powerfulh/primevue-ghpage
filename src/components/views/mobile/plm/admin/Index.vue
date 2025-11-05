<script setup lang="ts">
import LoginDialog from '@/components/views/LoginDialog.vue'
import { injectApi } from 'powerful-api-vue3'
import { Button, Card, InputGroup, InputNumber, InputText, Select, ToggleButton, useToast } from 'primevue'
import { ref } from 'vue'
import LearnItem from '../LearnItem.vue'

const api = injectApi()
const toast = useToast()

const model = ref({
	word: '',
	type: '무엇',
	memo: '',
	n: null,
})
const options = ['무엇', '결합', '0', '어미', '1', 'cutter', '대명사', '기호', '감탄사', '접속', '의성어', '십진법']
const justPost = ref('')
const compoundModel = ref({
	word: null,
	leftword: null,
	rightword: null,
})
const cancelModel = ref({
	n: null,
})
const justDelete = ref(null)
const contextModel = ref({
	leftword: null,
	rightword: null,
})
const contextCnt = ref(true)
const newWord = ref(true)
const chainModel = ref(null)
const srcModel = ref({ src: '' })

function afterSubmitWord() {
	justPost.value = [model.value.word, model.value.type, model.value.memo].filter(item => item).join()
	justDelete.value = null
	model.value.word = model.value.memo = ''
	model.value.n = null
	newWord.value = true
}
function onSubmitWord() {
	if (newWord.value) {
		api.load('postWord')
			.setParameter(model)
			.setWhenSuccess(res => {
				toast.add({ detail: `Post ✔`, life: 2000 })
				afterSubmitWord()
				chainModel.value = res
			})
			.fire({ credentials: true })
	} else {
		model.value.word = `(유지: ${model.value.n})`
		api.load('putWord')
			.setParameter(model)
			.setWhenSuccess(() => {
				toast.add({ detail: `Put ✔`, life: 2000 })
				afterSubmitWord()
			})
			.fire({ credentials: true })
	}
}
function onClickPostCompound() {
	api.load('postCompound')
		.setParameter(compoundModel)
		.setWhenSuccess(res => {
			toast.add({ detail: `Post ✔`, life: 2000 })
			const w = res.at(-1)
			justPost.value = `${w.cw} = ${w.lw} + ${w.rw}`
			justDelete.value = null
			compoundModel.value.word = compoundModel.value.leftword = compoundModel.value.rightword = null
		})
		.fire({ credentials: true })
}
function onClickCancel() {
	api.load('deleteLearn')
		.setParameter(cancelModel)
		.setWhenSuccess(res => {
			toast.add({ detail: `Delete ✔`, life: 2000 })
			justPost.value = ''
			justDelete.value = res
			cancelModel.value.n = null
		})
		.fire({ credentials: true })
}
function onClickContext() {
	if (contextCnt.value) {
		api.load('postContext')
			.setParameter(contextModel)
			.setWhenSuccess(res => {
				toast.add({ detail: `Post ✔`, life: 2000 })
				justPost.value = `${res.lw} + ${res.rw} 🔼 ${res.cnt}`
				justDelete.value = null
				contextModel.value.leftword = contextModel.value.rightword = null
			})
			.fire({ credentials: true })
	} else {
		api.load('postContextSpace')
			.setParameter(contextModel)
			.setWhenSuccess(res => {
				toast.add({ detail: `Post ✔`, life: 2000 })
				justPost.value = `${res.lw} + ${res.rw} 🔼 ${res.space}`
				justDelete.value = null
				contextModel.value.leftword = contextModel.value.rightword = null
			})
			.fire({ credentials: true })
	}
}
function onClickChain() {
	api.load('post0Compound')
		.setParameter(chainModel)
		.setWhenSuccess(() => {
			toast.add({ detail: `Post ✔`, life: 2000 })
			chainModel.value = null
		})
		.fire({ credentials: true })
}
function onClickPostSrc() {
	api.load('postUnderstandBox')
		.setParameter(srcModel)
		.setWhenSuccess(() => {
			toast.add({ detail: `Post ✔`, life: 2000 })
			justPost.value = `${srcModel.value.src}`
			justDelete.value = null
			srcModel.value.src = ''
		})
		.fire({ credentials: true })
}
</script>

<template>
	<main>
		<Card>
			<template #title>단어 등록</template>
			<template #content>
				<form>
					<InputGroup>
						<InputText v-model="model.word" placeholder="Word" />
						<Select v-model="model.type" :options="options" />
					</InputGroup>
					<InputGroup>
						<InputText v-model="model.memo" placeholder="Memo" maxlength="29" @keypress.enter="onSubmitWord" />
					</InputGroup>
				</form>
				<hr />
				<footer style="text-align: center">
					<InputGroup>
						<InputNumber v-model="model.n" placeholder="🆎🆔" />
						<ToggleButton v-model="newWord" on-label="➕" off-label="🔧" />
						<Button icon="pi pi-check" @click="onSubmitWord" />
					</InputGroup>
				</footer>
			</template>
		</Card>
		<Card>
			<template #title>결합 등록</template>
			<template #content>
				<form>
					<InputGroup>
						<InputNumber v-model="compoundModel.word" placeholder="🆎🆔" />
						<InputNumber v-model="compoundModel.leftword" placeholder="⬅🆔" />
						<InputNumber v-model="compoundModel.rightword" placeholder="➡🆔" @keypress.enter="onClickPostCompound" />
					</InputGroup>
				</form>
				<hr />
				<footer style="text-align: center"><Button icon="pi pi-check" @click="onClickPostCompound" /></footer>
			</template>
		</Card>
		<Card>
			<template #title>문맥 조정 <button @click="contextModel.leftword = 2903">Opener</button></template>
			<template #content>
				<form>
					<InputGroup>
						<InputNumber v-model="contextModel.leftword" placeholder="⬅🆔" />
						<InputNumber v-model="contextModel.rightword" placeholder="➡🆔" @keypress.enter="onClickContext" />
						<ToggleButton v-model="contextCnt" on-label="cnt" off-label="space" style="width: 30%" />
						<Button icon="pi pi-check" @click="onClickContext" />
					</InputGroup>
				</form>
			</template>
		</Card>
		<Card v-if="justPost">
			<template #title>방금 등록됨✔</template>
			<template #content>
				{{ justPost }}
				<template v-if="chainModel">
					<hr />
					<Button :label="`추가 등록 가능: ${chainModel.expect}`" @click="onClickChain" />
				</template>
			</template>
		</Card>
		<Card>
			<template #title>학습 취소</template>
			<template #content>
				<form>
					<InputGroup>
						<InputNumber v-model="cancelModel.n" placeholder="🆎🆔" @keypress.enter="onClickCancel" />
						<Button icon="pi pi-check" @click="onClickCancel" />
					</InputGroup>
				</form>
			</template>
		</Card>
		<Card>
			<template #title>문장 등록</template>
			<template #content>
				<!-- 지피티 말로는 폼 안에 인풋 텍스트가 하나 있으면 제출한다고 한다 -->
				<form onsubmit="return false">
					<InputGroup>
						<InputText v-model="srcModel.src" placeholder="📋" @keypress.enter="onClickPostSrc" />
					</InputGroup>
				</form>
				<hr />
				<footer style="text-align: center">
					<Button icon="pi pi-check" :disabled="srcModel.src.trim() == ''" @click="onClickPostSrc" />
				</footer>
			</template>
		</Card>
		<LearnItem v-if="justDelete" :item="justDelete" />

		<LoginDialog />
	</main>
</template>
