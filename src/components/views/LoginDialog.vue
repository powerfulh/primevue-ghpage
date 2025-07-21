<script setup lang="ts">
import { useHeaderStore } from '@/stores/header'
import { injectApi } from 'powerful-api-vue3'
import { Button, Dialog, InputText, Message, Password, useToast } from 'primevue'
import { ref } from 'vue'

const headerStore = useHeaderStore()
const api = injectApi()
const toast = useToast()

const visible = ref(headerStore.login == false)
const param = ref({
	id: '',
	pw: '',
})

function authencicate() {
	api.load('authenticate')
		.setParameter(param)
		.setWhenSuccess(res => {
			headerStore.login = res
			if (res == false) toast.add({ detail: 'Login fail', life: 2000 })
		})
		.fire({ loading: true, noConfirm: true })
}
</script>

<template>
	<Dialog v-model:visible="visible" modal header="Login">
		<InputText v-model="param.id" placeholder="ID" maxlength="9" minlength="3" @keypress.enter="authencicate" />
		<Password v-model="param.pw" placeholder="Password" maxlength="11" minlength="4" :feedback="false" @keypress.enter="authencicate" />
		<Message v-if="param.pw.length > 11" severity="error">Too long Password</Message>
		<Button v-else icon="pi pi-check" @click="authencicate"></Button>
	</Dialog>
</template>
