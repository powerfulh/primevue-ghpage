<script setup lang="ts">
import { Card } from 'primevue'
import JsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

const t = { list: [{ n: 0, word: 'word' }, { n: 0 }], point: 0 }
</script>

<template>
	<main>
		<Card>
			<template #title>Src</template>
			<template #content>
				<JsonPretty :data="t" />
			</template>
		</Card>
	</main>
</template>
