<script setup lang="ts">
import { Button, Card, Chip, InputText, useToast } from 'primevue'
import LoginDialog from '../../LoginDialog.vue'
import { injectApi } from 'powerful-api-vue3'
import { computed, ref } from 'vue'

const api = injectApi()
const toast = useToast()

const model = ref({})
const newItemKey = 'Define me'

const addable = computed(() => model.value[newItemKey] ?? true)

function init() {
	api.load('getPapi')
		.setWhenSuccess(res => {
			const key = 'primevue'
			const primevueData = res.find(item => item.name == key)
			if (primevueData) model.value = primevueData.data == '[]' ? {} : JSON.parse(primevueData.data)
			else {
				api.load('postPapi')
					.setParameter(ref({ name: key }))
					.setWhenSuccess(init)
					.fire()
			}
		})
		.fire()
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
</script>

<template>
	<main>
		<Card>
			<template #content>
				<div v-for="(item, i) in Object.keys(model)" :key="i" style="text-align: center">
					<Chip :label="item" class="k" @click="onClickChip(item)" /> : <InputText class="v" />
				</div>
				<br />
				<Button icon="pi pi-plus" :disabled="addable != true" @click="model[newItemKey] = ''" />
			</template>
		</Card>

		<LoginDialog @login="init" />
	</main>
</template>

<style lang="scss" scoped>
.k,
.v {
	width: 45%;
}
</style>
