<script setup lang="ts">
import { myPoke, Poke } from '@/util/poke'
import { Card, Splitter, SplitterPanel, Tag } from 'primevue'
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
		<template #subtitle>{{ item.flavor_text }}</template>
		<template #content>
			<Splitter>
				<SplitterPanel>
					<Tag value="Type" icon="pi pi-box" />
					<span v-tooltip="typeTooltip">{{ item.types.ko }}</span>
				</SplitterPanel>
				<SplitterPanel>
					<Tag value="HP" icon="pi pi-heart" />
					<span>{{ item.stats.hp }}</span>
				</SplitterPanel>
				<SplitterPanel>
					<Tag value="Attack" icon="pi pi-circle" />
					<span v-tooltip="myPoke.getAttack().toString()">{{ item.stats.attack }}</span>
				</SplitterPanel>
				<SplitterPanel>
					<Tag value="Defense" icon="pi pi-shield" />
					<span v-tooltip="myPoke.getDefense().toString()">{{ item.stats.defense }}</span>
				</SplitterPanel>
			</Splitter>
		</template>
	</Card>
</template>

<style scoped lang="scss">
.p-tag {
	margin-right: 4px;
}
</style>
