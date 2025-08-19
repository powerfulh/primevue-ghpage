<script setup lang="ts">
import { getElementNameList, Tile } from '@/util/heat'

const temper = defineModel('temper')
const g = defineModel('g')
const dir = defineModel('dir')
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
	<div class="direction">
		<div style="position: absolute; font-size: large; left: var(--p-popover-content-padding)">Direction</div>
		<div></div>
		<div :class="{ active: dir == 'u' }" @click="dir = 'u'">⬆</div>
		<div></div>
		<div :class="{ active: dir == 'l' }" @click="dir = 'l'">⬅</div>
		<div :class="{ active: !dir }" @click="dir = ''"></div>
		<div :class="{ active: dir == 'r' }" @click="dir = 'r'">➡</div>
		<div></div>
		<div :class="{ active: dir == 'd' }" @click="dir = 'd'">⬇</div>
		<div></div>
	</div>
</template>

<style lang="scss" scoped>
.direction {
	width: 3em;
	display: flex;
	flex-wrap: wrap;
	margin: auto;
	font-size: xx-large;
	> div {
		width: 1em;
	}
	> .active {
		background-color: blue;
	}
}
</style>
