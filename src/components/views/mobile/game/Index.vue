<script setup lang="ts">
import { getElement, step, Tile } from '@/util/heat'
import { Card, Popover } from 'primevue'
import { computed, ref } from 'vue'

const tileList = ref([] as Array<Tile>)
const playing = ref(false)
const currentStep = ref(0)
let currentInterval: number
let fastMode = false
let stepToggle = false
let currentCell: number

const coloredList = computed(() =>
	tileList.value.map(item => ({
		...item,
		rgb: [(item.temper - 50) * 3, 255 - Math.abs(25 - item.temper) * 3, (25 - item.temper) * 3].map(rgbVal),
	})),
)
const invalid = computed(() => tileList.value.some(item => typeof item.temper != 'number' || typeof item.g != 'number'))

function rgbVal(target: number) {
	return target > 255 ? 255 : target < 0 ? 0 : target
}
function onClickPlay(f = false) {
	fastMode = f
	clearInterval(currentInterval)
	playing.value = true
	currentInterval = setInterval(() => {
		stepToggle = !stepToggle
		if (fastMode == false && stepToggle) return
		step(tileList.value)
		currentStep.value++
	}, 250)
}
function init() {
	tileList.value.length = 0
	for (let i = 0; i < 16; i++) {
		tileList.value.push({
			n: i,
			el: getElement('oxygen'),
			g: 500 + i * 20,
			temper: -25 + i * 10,
		})
	}
}
function onClickReset() {
	clearInterval(currentInterval)
	currentStep.value = 0
	playing.value = false
	init()
}
function onClickStep() {
	step(tileList.value)
	currentStep.value++
}

init()

// am
const popover = ref()

function onClickCell(e, i) {
	if (playing.value) return
	currentCell = i
	popover.value.toggle(e)
}
</script>

<template>
	<main>
		<Card>
			<!-- <template #title>열</template> -->
			<!-- <template #subtitle></template> -->
			<template #content>
				<div style="display: flex; flex-wrap: wrap">
					<div
						v-for="(item, i) in coloredList"
						:key="i"
						class="tile"
						:style="`background-color: rgb(${item.rgb[0]}, ${item.rgb[1]}, ${item.rgb[2]}); color: rgb(${255 - item.rgb[0]}, ${255 - item.rgb[1]}, ${255 - item.rgb[2]})`"
						@click="e => onClickCell(e, i)"
					>
						{{ item.el.name }}
						<br />
						{{ Number(item.temper).toFixed(1) }} 🌡
						<br />
						{{ item.g }}g
					</div>
				</div>
			</template>
		</Card>
		<Card>
			<template #title>Step: {{ currentStep }}</template>
			<template #content>
				<button :disabled="invalid" @click="onClickPlay()">▶</button>
				<button :disabled="invalid" @click="onClickPlay(true)">⏩</button>
				<button v-if="playing == false" :disabled="invalid" @click="onClickStep">👞</button>
				<button @click="onClickReset">🔄</button>
			</template>
		</Card>

		<Popover ref="popover">
			🌡: <input v-model.number="tileList[currentCell].temper" />
			<br />
			g: <input v-model.number="tileList[currentCell].g" />
		</Popover>
	</main>
</template>

<style lang="scss" scoped>
.tile {
	border: 1px solid white;
	width: 24%;
	aspect-ratio: 1/1;
	font-size: small;
	padding: 4px;
}
button {
	margin-right: 4px;
}
</style>
