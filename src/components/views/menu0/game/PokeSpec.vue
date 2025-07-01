<script setup lang="ts">
import { Poke } from '@/util/poke'
import { Card, Chip, Tag } from 'primevue'
import { computed } from 'vue'

const props = defineProps<{
	item: Poke
}>()

const typeTooltip = computed(() => `상성: ${getTypeTooltip('double_damage_to')} < ${props.item.types.ko} < ${getTypeTooltip('double_damage_from')}`)

function getTypeTooltip(k: string) {
	return props.item.types[k].map(dt => dt.ko).join()
}
</script>

<template>
	<Card>
		<template #title>Spec</template>
		<template #subtitle>{{ item.species.flavor_text }}</template>
		<template #content>
			<Tag value="Type" icon="pi pi-box" />
			<Chip :label="item.types.ko" v-tooltip="typeTooltip" />
		</template>
	</Card>
</template>

<style scoped lang="scss">
.p-tag {
	margin-right: 4px;
}
</style>
