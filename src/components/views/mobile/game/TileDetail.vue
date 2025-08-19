<script setup lang="ts">
import { getElementNameList, Tile } from '@/util/heat'

const temper = defineModel('temper')
const g = defineModel('g')
defineProps<{
	tileList: Array<Tile>
	currentCell: number
	playing: boolean
}>()
const emit = defineEmits(['change-el', 'change-activate'])
</script>

<template>
	<select :value="tileList[currentCell].el.name" :disabled="playing" style="font-size: large" @change="e => emit('change-el', e)">
		<option v-for="(item, i) in getElementNameList()" :key="i">
			{{ item }}
		</option>
	</select>
	<input
		:checked="tileList[currentCell].deactivate != true"
		type="checkbox"
		style="transform: scale(2); float: right"
		@change="e => emit('change-activate', e)"
	/>
	<div style="font-size: small">
		CP: {{ tileList[currentCell].el.heatCapacity }}
		<br />
		TC: {{ tileList[currentCell].el.conductivity }}
	</div>
	Temper: <input v-model="temper" type="number" :disabled="playing" />
	<br />
	Mass: <input v-model="g" type="number" :disabled="playing" />
</template>
