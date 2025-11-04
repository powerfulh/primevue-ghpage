<script setup lang="ts">
import { useHeaderStore } from '@/stores/header'
import { injectApi } from 'powerful-api-vue3'
import { Button, Dialog, InputText, Message, Password, useToast } from 'primevue'
import { computed, ref } from 'vue'

const emit = defineEmits(['login'])

const headerStore = useHeaderStore()
const api = injectApi()
const toast = useToast()

const visible = ref(headerStore.login == false)
const param = ref({
	id: '',
	pw: '',
})

const invalid = computed(() => param.value.id.length == 0 || param.value.pw.length == 0 || param.value.pw.length > 11)

function authencicate() {
	if (invalid.value) return
	api.load('authenticate')
		.setParameter(param)
		.setWhenSuccess(res => {
			headerStore.login = res
			if (res) {
				visible.value = false
				emit('login')
			} else toast.add({ detail: 'Login fail', life: 2000, severity: 'error' })
		})
		.fire({ credentials: true })
}

if (headerStore.login) emit('login')
</script>

<template>
	<Dialog v-model:visible="visible" modal header="Login">
		<form>
			<InputText v-model.trim="param.id" placeholder="ID" maxlength="9" minlength="3" @keypress.enter="authencicate" />
			<Password v-model="param.pw" placeholder="Password" maxlength="11" minlength="4" :feedback="false" @keypress.enter="authencicate" />
			<Message v-if="param.id.length == 0" severity="error">Input ID</Message>
			<Message v-else-if="param.pw.length == 0" severity="error">Input Password</Message>
			<Message v-else-if="param.pw.length > 11" severity="error">Too long Password</Message>
			<Button v-else icon="pi pi-check" @click="authencicate"></Button>
		</form>
	</Dialog>
</template>
