<script setup lang="ts">
import { numberFormat } from '@/util'
import { injectApi } from 'powerful-api-vue3'
import { Column, DataTable, Divider, Tab, TabList, TabPanel, TabPanels, Tabs } from 'primevue'
import Chart from 'primevue/chart'
import { computed, ref } from 'vue'

const api = injectApi()

const text = {
	count: '총계',
	date: '최근 수집일',
}
const total = ref({} as any)
const comp = ref([])
const topic = ref([])

const compChart = computed(() => ({
	labels: [comp.value[0]?.cpn, comp.value[1]?.cpn, comp.value[2]?.cpn],
	datasets: [{ data: [comp.value[0]?.cpc, comp.value[1]?.cpc, comp.value[2]?.cpc] }],
}))
const topicChart = computed(() => ({
	labels: [topic.value[0]?.cnn, topic.value[1]?.cnn, topic.value[2]?.cnn],
	datasets: [{ data: [topic.value[0]?.cnc, topic.value[1]?.cnc, topic.value[2]?.cnc] }],
}))

api.load('getCurtainChart')
	.setWhenSuccess(res => {
		total.value = res.total
		comp.value = res.comp.map(item => ({ ...item, cpd: item.cpd.substring(2) }))
		topic.value = res.topic.map(item => ({ ...item, cnd: item.cnd.substring(2) }))
	})
	.fire()
</script>

<template>
	<main>
		<Tabs value="0">
			<TabList>
				<Tab value="0">전체 글</Tab>
				<Tab value="1">회사별</Tab>
				<Tab value="2">토픽별</Tab>
			</TabList>
			<TabPanels>
				<TabPanel value="0">
					<p>{{ text.count }}: {{ numberFormat(total.tc) }}</p>
					<p>{{ text.date }}: {{ total.tmd }}</p>
				</TabPanel>
				<TabPanel value="1">
					<DataTable :value="comp" scrollable scroll-height="300px">
						<Column field="cpn" header="회사" />
						<Column :header="text.count">
							<template #body="{ data }">{{ numberFormat(data.cpc) }}</template>
						</Column>
						<Column field="cpd" :header="text.date" />
					</DataTable>
					<Divider />
					Top 3
					<Chart type="pie" :data="compChart" />
				</TabPanel>
				<TabPanel value="2">
					<DataTable :value="topic" scrollable scroll-height="300px">
						<Column field="cnn" header="토픽" />
						<Column :header="text.count">
							<template #body="{ data }">{{ numberFormat(data.cnc) }}</template>
						</Column>
						<Column field="cnd" :header="text.date" />
					</DataTable>
					<Divider />
					Top 3
					<Chart type="pie" :data="topicChart" />
				</TabPanel>
			</TabPanels>
		</Tabs>
	</main>
</template>
