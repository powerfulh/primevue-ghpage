<script setup lang="ts">
import { injectApi } from 'powerful-api-vue3';
import { ref } from 'vue';

const api = injectApi()

const tv = ref()

function apitest() {
  api.load('apitest').setWhenSuccess(res => tv.value = res).fire()
}
</script>

<template>
	<main>
		<button @click="apitest">test</button>
		{{ tv }}
	</main>
</template>