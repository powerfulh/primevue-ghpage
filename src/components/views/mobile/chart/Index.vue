<script setup lang="ts">
import { numberFormat } from '@/util'
import { Column, DataTable, Divider, Tab, TabList, TabPanel, TabPanels, Tabs } from 'primevue'
import Chart from 'primevue/chart'

const text = {
	count: '총계',
	date: '최근 수집일',
}

const testData = [
	{
		cpn: '새회사',
		cpc: 1234,
		cpd: '2025-06-26',
	},
	{
		cpn: '새회사',
		cpc: 1234,
		cpd: '2025-06-26',
	},
	{
		cpn: '새회사',
		cpc: 1234,
		cpd: '2025-06-26',
	},
	{
		cpn: '새회사',
		cpc: 1234,
		cpd: '2025-06-26',
	},
	{
		cpn: '새회사',
		cpc: 1234,
		cpd: '2025-06-26',
	},
	{
		cpn: '새회사',
		cpc: 1234,
		cpd: '2025-06-26',
	},
	{
		cpn: '새회사',
		cpc: 1234,
		cpd: '2025-06-26',
	},
	{
		cpn: '새회사',
		cpc: 1234,
		cpd: '2025-06-26',
	},
	{
		cpn: '새회사',
		cpc: 1234,
		cpd: '2025-06-26',
	},
	{
		cpn: '새회사',
		cpc: 1234,
		cpd: '2025-06-26',
	},
]
</script>

<template>
	<main>
		<Tabs value="0">
			<TabList>
				<Tab value="0">전체 글</Tab>
				<Tab value="1">회사별</Tab>
			</TabList>
			<TabPanels>
				<TabPanel value="0">
					<p>{{ text.count }}: {{ numberFormat(1234) }}</p>
					<p>{{ text.date }}: 2025-06-26</p>
				</TabPanel>
				<TabPanel value="1">
					<DataTable :value="testData" scrollable scroll-height="300px">
						<Column field="cpn" header="회사" />
						<Column :header="text.count">
							<template #body="{ data }">{{ numberFormat(data.cpc) }}</template>
						</Column>
						<Column field="cpd" :header="text.date" />
					</DataTable>
					<Divider />
					Top 3
					<Chart type="pie" :data="{ labels: ['A', 'B', 'C'], datasets: [{ data: [50, 30, 20] }] }" />
				</TabPanel>
			</TabPanels>
		</Tabs>
	</main>
</template>
