<script setup lang="ts">
import { Card, InputText, Select } from 'primevue'
import { ref } from 'vue'

const model = ref({
	word: '',
	type: '',
	memo: '',
})
const options = ['무엇', '결합', '어미', '0', '조사', '기호', '접속', '부사', '대명사']
</script>

<template>
	<main>
		<Card>
			<template #title>단어 등록</template>
			<template #content>
				<InputText v-model="model.word" placeholder="Word" />
				<Select v-model="model.type" :options="options" />
				<InputText v-model="model.memo" placeholder="Memo" />
			</template>
		</Card>
		{{ model }}
	</main>
</template>
