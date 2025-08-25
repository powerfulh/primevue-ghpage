<script setup lang="ts">
import { Card } from 'primevue'
import LoginDialog from '../../LoginDialog.vue'
import { injectApi } from 'powerful-api-vue3'
import { ref } from 'vue'

const api = injectApi()

const model = ref({})

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
</script>

<template>
	<main>
		<Card>
			<template #content>a</template>
		</Card>

		<LoginDialog @login="init" />
	</main>
</template>
