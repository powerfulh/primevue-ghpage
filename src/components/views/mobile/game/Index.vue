<script setup lang="ts">
import { Card } from 'primevue'
</script>

<template>
	<main>
		<Card>
			<template #title>자원</template>
			<template #subtitle>단위: Kg</template>
			<template #content>
				<ul>
					<li>철: 100</li>
				</ul>
			</template>
		</Card>
	</main>
</template>
