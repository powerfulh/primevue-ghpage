<script setup lang="ts">
import { Button, Card, Chip, InputText, useToast } from 'primevue'
import LoginDialog from '../../LoginDialog.vue'
import { injectApi } from 'powerful-api-vue3'
import { computed, ref } from 'vue'
import { useHeaderStore } from '@/stores/header'

const headerStore = useHeaderStore()
const api = injectApi()
const toast = useToast()

const model = ref({})
const dataKey = 'primevue'
const newItemKey = 'Define me'

const addable = computed(() => model.value[newItemKey] ?? true)
const param = computed(() => ({
	name: dataKey,
	data: JSON.stringify(model.value),
}))

function init() {
	api.load('getPapi')
		.setWhenSuccess(res => {
			const primevueData = res.find(item => item.name == dataKey)
			if (primevueData) model.value = primevueData.data == '[]' ? {} : JSON.parse(primevueData.data)
			else {
				api.load('postPapi')
					.setParameter(ref({ name: dataKey }))
					.setWhenSuccess(init)
					.fire({ credentials: true })
			}
		})
		.fire({ credentials: true })
}
function onClickChip(k: string) {
	const nk = prompt('What is new keyword:')
	if (nk == null || nk.trim() == '') return
	if (model.value[nk]) {
		toast.add({ detail: `${nk} is already defined`, life: 2000, severity: 'error' })
		return
	}
	model.value[nk] = model.value[k]
	delete model.value[k]
}

headerStore.onClickGreen = () => {
	api.load('putPapi')
		.setParameter(param)
		.setWhenSuccess(() => {
			toast.add({ detail: `Save ✔`, life: 2000 })
		})
		.fire({ credentials: true })
}
</script>

<template>
	<main>
		<Card>
			<template #content>
				<div v-for="(item, i) in Object.keys(model)" :key="i" style="text-align: center">
					<Chip :label="item" class="k" @click="onClickChip(item)" /> : <InputText v-model="model[item]" class="v" />
				</div>
				<br />
				<Button icon="pi pi-plus" :disabled="addable != true" @click="model[newItemKey] = ''" />
			</template>
		</Card>
		{{ model }}

		<LoginDialog @login="init" />
	</main>
</template>

<style lang="scss" scoped>
.k,
.v {
	width: 45%;
}
</style>
