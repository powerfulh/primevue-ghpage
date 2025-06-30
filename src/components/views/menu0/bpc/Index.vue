<script setup lang="ts">
import { Splitter, SplitterPanel } from 'primevue'
import ListItem from './ListItem.vue'
import { computed, ref } from 'vue'
import { injectApi } from 'powerful-api-vue3'

const api = injectApi()

const fetchData = ref([])

const list = computed(() =>
	fetchData.value.reduce(
		(r, item) => {
			r.at(-1).push(item)
			if (r.at(-1).length == 2) r.push([])
			return r
		},
		[[]],
	),
)

api.load('getCurtainRand')
	.setWhenSuccess(res => (fetchData.value = res))
	.fire()
</script>

<template>
	<main>
		<div class="card">
			<Splitter v-for="(couple, i) in list" :key="i" style="margin-bottom: 4px">
				<SplitterPanel
					v-for="(item, ii) in couple"
					:key="ii"
					class="items-center justify-center"
					style="padding: 8px; display: flex; flex-direction: column"
				>
					<ListItem :item="item" />
				</SplitterPanel>
			</Splitter>
		</div>
	</main>
</template>
