<script setup lang="ts">
import { numberFormat } from '@/util';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'primevue'
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
					<p>총계: {{ numberFormat(1234) }}</p>
					<p>최근 수집일: 2025-06-26</p>
				</TabPanel>
				<TabPanel value="1"> t </TabPanel>
			</TabPanels>
		</Tabs>
	</main>
</template>
