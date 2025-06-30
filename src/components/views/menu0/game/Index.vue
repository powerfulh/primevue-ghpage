<script setup lang="ts">
import { injectApi } from 'powerful-api-vue3'
import { ref } from 'vue'

const api = injectApi()

const d = ref([])

function test() {
	api.load('getPokelist')
		.setWhenSuccess(res => (d.value = res.results))
		.fire()
}
</script>

<template>
	<main>
		<button @click="test">init</button>
		{{ d }}
	</main>
</template>
