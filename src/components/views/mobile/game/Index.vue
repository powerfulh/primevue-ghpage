<script setup lang="ts">
import { getElement, step, Tile } from '@/util/heat'
import { Card } from 'primevue'
import { computed, ref } from 'vue'

const tileList = ref([] as Array<Tile>)
const playing = ref(false)
const currentStep = ref(0)
let currentInterval

const coloredList = computed(() =>
	tileList.value.map(item => ({
		...item,
		rgb: [(item.temper - 50) * 3, 255 - Math.abs(25 - item.temper) * 3, (25 - item.temper) * 3].map(rgbVal),
	})),
)

function rgbVal(target: number) {
	return target > 255 ? 255 : target < 0 ? 0 : target
}
function onClickPlay() {
	playing.value = true
	currentInterval = setInterval(() => {
		step(tileList.value)
		currentStep.value++
	}, 500)
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
	init()
}
function onClickStep() {
	step(tileList.value)
	currentStep.value++
}

init()
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
					>
						{{ item.el.name }}
						<br />
						{{ item.temper.toFixed(1) }} 🌡
						<br />
						{{ item.g }}g
					</div>
				</div>
			</template>
		</Card>
		<Card>
			<template #title>Step: {{ currentStep }}</template>
			<template #content>
				<button @click="onClickPlay">▶</button>
				<button v-if="playing == false" @click="onClickStep">👞</button>
				<button @click="onClickReset">🔄</button>
			</template>
		</Card>
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
