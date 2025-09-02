<script setup lang="ts">
import LoginDialog from '@/components/views/LoginDialog.vue'
import { injectApi } from 'powerful-api-vue3'
import { Button, Card, InputGroup, InputNumber, InputText, Select, useToast } from 'primevue'
import { ref } from 'vue'

const api = injectApi()
const toast = useToast()

const model = ref({
	word: '',
	type: '무엇',
	memo: '',
})
const options = ['무엇', '결합', '어미', '0', '조사', '1', '기호', '대명사', '접속']
const justPost = ref('')
const compoundModel = ref({
	word: null,
	leftword: null,
	rightword: null,
})
const cancelModel = ref({
	n: null,
})

function onClickPost() {
	api.load('postWord')
		.setParameter(model)
		.setWhenSuccess(() => {
			toast.add({ detail: `Post ✔`, life: 2000 })
			justPost.value = [model.value.word, model.value.type, model.value.memo].filter(item => item).join()
			model.value.word = model.value.memo = ''
		})
		.fire({ credentials: true })
}
function onClickPostCompound() {
	api.load('postCompound')
		.setParameter(compoundModel)
		.setWhenSuccess(res => {
			toast.add({ detail: `Post ✔`, life: 2000 })
			const w = res.at(-1)
			justPost.value = `${w.cw} = ${w.lw} + ${w.rw}`
			compoundModel.value.word = compoundModel.value.leftword = compoundModel.value.rightword = null
		})
		.fire({ credentials: true })
}
function onClickCancel() {
	api.load('deleteLearn')
		.setParameter(cancelModel)
		.setWhenSuccess(() => {
			toast.add({ detail: `Delete ✔`, life: 2000 })
			cancelModel.value.n = null
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
						<InputText v-model="model.memo" placeholder="Memo" maxlength="29" @keypress.enter="onClickPost" />
					</InputGroup>
				</form>
				<hr />
				<footer style="text-align: center"><Button icon="pi pi-check" @click="onClickPost" /></footer>
			</template>
		</Card>
		<Card>
			<template #title>결합 등록</template>
			<template #content>
				<InputGroup>
					<InputNumber v-model="compoundModel.word" placeholder="🆎🆔" />
					<InputNumber v-model="compoundModel.leftword" placeholder="⬅🆔" />
					<InputNumber v-model="compoundModel.rightword" placeholder="➡🆔" @keypress.enter="onClickPostCompound" />
				</InputGroup>
				<hr />
				<footer style="text-align: center"><Button icon="pi pi-check" @click="onClickPostCompound" /></footer>
			</template>
		</Card>
		<Card v-if="justPost">
			<template #title>방금 등록됨✔</template>
			<template #content>
				{{ justPost }}
			</template>
		</Card>
		<Card>
			<template #title>학습 취소</template>
			<template #content>
				<InputGroup>
					<InputNumber v-model="cancelModel.n" placeholder="🆎🆔" @keypress.enter="onClickCancel" />
					<Button icon="pi pi-check" @click="onClickCancel" />
				</InputGroup>
			</template>
		</Card>

		<LoginDialog />
	</main>
</template>
