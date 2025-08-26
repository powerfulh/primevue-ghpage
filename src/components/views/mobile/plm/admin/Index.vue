<script setup lang="ts">
import LoginDialog from '@/components/views/LoginDialog.vue'
import { injectApi } from 'powerful-api-vue3'
import { Button, Card, InputText, Select, useToast } from 'primevue'
import { ref } from 'vue'

const api = injectApi()
const toast = useToast()

const model = ref({
	word: '',
	type: '무엇',
	memo: '',
})
const options = ['무엇', '결합', '어미', '0', '조사', '기호', '접속', '부사', '대명사']
const justPost = ref('')

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
</script>

<template>
	<main>
		<Card>
			<template #title>단어 등록</template>
			<template #content>
				<InputText v-model="model.word" placeholder="Word" />
				<Select v-model="model.type" :options="options" />
				<InputText v-model="model.memo" placeholder="Memo" @keypress.enter="onClickPost" />
				<hr />
				<footer style="text-align: center"><Button icon="pi pi-check" @click="onClickPost" /></footer>
			</template>
		</Card>
		<Card v-if="justPost">
			<template #title>방금 등록됨✔</template>
			<template #content>
				{{ justPost }}
			</template>
		</Card>

		<LoginDialog />
	</main>
</template>
