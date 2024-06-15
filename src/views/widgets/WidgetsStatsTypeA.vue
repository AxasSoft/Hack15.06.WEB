<script setup>
	import { onMounted, ref } from "vue";
	import { CChart } from "@coreui/vue-chartjs";
	import { getStyle } from "@coreui/utils";

	const widgetChartRef1 = ref();
	const widgetChartRef2 = ref();

	onMounted(() => {
		document.documentElement.addEventListener("ColorSchemeChange", () => {
			if (widgetChartRef1.value) {
				widgetChartRef1.value.chart.data.datasets[0].pointBackgroundColor =
					getStyle("--cui-primary");
				widgetChartRef1.value.chart.update();
			}

			if (widgetChartRef2.value) {
				widgetChartRef2.value.chart.data.datasets[0].pointBackgroundColor =
					getStyle("--cui-info");
				widgetChartRef2.value.chart.update();
			}
		});
	});
</script>

<template>
	<CRow :xs="{ gutter: 4 }">
		<CCol :sm="6" :xl="4" :xxl="3">
			<CWidgetStatsA color="primary">
				<template #value
					>260
					<span class="fs-6 fw-normal">
						(-12.4% <CIcon icon="cil-arrow-bottom" />)
					</span>
				</template>
				<template #title>Рабочие на участке</template>
				<template #action>
					<CDropdown placement="bottom-end">
						<CDropdownToggle
							color="transparent"
							class="p-0 text-white"
							:caret="false"
						>
							<CIcon icon="cil-options" class="text-white" />
						</CDropdownToggle>
					</CDropdown>
				</template>
				<template #chart>
					<CChart
						type="line"
						class="mt-3 mx-3"
						style="height: 70px"
						ref="widgetChartRef1"
						:data="{
							labels: [
								'Январь',
								'Февраль',
								'Март',
								'Апрель',
								'Май',
								'Июнь',
								'Июль',
							],
							datasets: [
								{
									borderColor: 'rgba(255,255,255,.55)',
									pointBackgroundColor: getStyle('--cui-primary'),
									data: [51, 55, 40, 59, 68, 84, 84],
								},
							],
						}"
						:options="{
							plugins: {
								legend: {
									display: false,
								},
							},
							maintainAspectRatio: false,
							scales: {
								x: {
									border: {
										display: false,
									},
									grid: {
										display: false,
									},
									ticks: {
										display: false,
									},
								},
								y: {
									min: 30,
									max: 89,
									display: false,
									grid: {
										display: false,
									},
									ticks: {
										display: false,
									},
								},
							},
							elements: {
								line: {
									borderWidth: 1,
									tension: 0.4,
								},
								point: {
									radius: 4,
									hitRadius: 10,
									hoverRadius: 4,
								},
							},
						}"
					/>
				</template>
			</CWidgetStatsA>
		</CCol>
		<CCol :sm="6" :xl="4" :xxl="3">
			<CWidgetStatsA color="success">
				<template #value
					>260
					<span class="fs-6 fw-normal">
						(-12.4% <CIcon icon="cil-arrow-bottom" />)
					</span>
				</template>
				<template #title>Рабочие на участке</template>
				<template #action>
					<CDropdown placement="bottom-end">
						<CDropdownToggle
							color="transparent"
							class="p-0 text-white"
							:caret="false"
						>
							<CIcon icon="cil-options" class="text-white" />
						</CDropdownToggle>
					</CDropdown>
				</template>
				<template #chart>
					<CChart
						type="line"
						class="mt-3 mx-3"
						style="height: 70px"
						ref="widgetChartRef1"
						:data="{
							labels: [
								'Январь',
								'Февраль',
								'Март',
								'Апрель',
								'Май',
								'Июнь',
								'Июль',
							],
							datasets: [
								{
									borderColor: 'rgba(255,255,255,.55)',
									pointBackgroundColor: getStyle('--cui-success'),
									data: [68, 59, 84, 84, 51, 55, 88],
								},
							],
						}"
						:options="{
							plugins: {
								legend: {
									display: false,
								},
							},
							maintainAspectRatio: false,
							scales: {
								x: {
									border: {
										display: false,
									},
									grid: {
										display: false,
									},
									ticks: {
										display: false,
									},
								},
								y: {
									min: 30,
									max: 89,
									display: false,
									grid: {
										display: false,
									},
									ticks: {
										display: false,
									},
								},
							},
							elements: {
								line: {
									borderWidth: 1,
									tension: 0.4,
								},
								point: {
									radius: 4,
									hitRadius: 10,
									hoverRadius: 4,
								},
							},
						}"
					/>
				</template>
			</CWidgetStatsA>
		</CCol>
		<CCol :sm="6" :xl="4" :xxl="3">
			<CWidgetStatsA color="info">
				<template #value> 14% <CIcon icon="cil-arrow-top" /> </template>
				<template #title>Общий KPI</template>
				<template #action>
					<CDropdown placement="bottom-end">
						<CDropdownToggle
							color="transparent"
							class="p-0 text-white"
							:caret="false"
						>
							<CIcon icon="cil-options" class="text-white" />
						</CDropdownToggle>
					</CDropdown>
				</template>
				<template #chart>
					<CChart
						type="line"
						class="mt-3 mx-3"
						style="height: 70px"
						ref="widgetChartRef2"
						:data="{
							labels: [
								'Январь',
								'Февраль',
								'Март',
								'Апрель',
								'Май',
								'Июнь',
								'Июль',
							],
							datasets: [
								{
									borderColor: 'rgba(255,255,255,.55)',
									pointBackgroundColor: getStyle('--cui-info'),
									data: [1, 18, 9, 17, 34, 22, 11],
								},
							],
						}"
						:options="{
							plugins: {
								legend: {
									display: false,
								},
							},
							maintainAspectRatio: false,
							scales: {
								x: {
									border: {
										display: false,
									},
									grid: {
										display: false,
									},
									ticks: {
										display: false,
									},
								},
								y: {
									min: -9,
									max: 39,
									display: false,
									grid: {
										display: false,
									},
									ticks: {
										display: false,
									},
								},
							},
							elements: {
								line: {
									borderWidth: 1,
								},
								point: {
									radius: 4,
									hitRadius: 10,
									hoverRadius: 4,
								},
							},
						}"
					/>
				</template>
			</CWidgetStatsA>
		</CCol>
		<CCol :sm="6" :xl="4" :xxl="3">
			<CWidgetStatsA color="warning">
				<template #value
					>2.49%
					<span class="fs-6 fw-normal">
						(84.7% <CIcon icon="cil-arrow-top" />)
					</span>
				</template>
				<template #title>Техника на участке</template>
				<template #action>
					<CDropdown placement="bottom-end">
						<CDropdownToggle
							color="transparent"
							class="p-0 text-white"
							:caret="false"
						>
							<CIcon icon="cil-options" class="text-white" />
						</CDropdownToggle>
					</CDropdown>
				</template>
				<template #chart>
					<CChart
						type="line"
						class="mt-3"
						style="height: 70px"
						:data="{
							labels: [
								'Январь',
								'Февраль',
								'Март',
								'Апрель',
								'Май',
								'Июнь',
								'Июль',
							],
							datasets: [
								{
									backgroundColor: 'rgba(255,255,255,.2)',
									borderColor: 'rgba(255,255,255,.55)',
									data: [78, 81, 40, 80, 45, 34, 12],
									fill: true,
								},
							],
						}"
						:options="{
							plugins: {
								legend: {
									display: false,
								},
							},
							maintainAspectRatio: false,
							scales: {
								x: {
									border: {
										display: false,
									},
									display: false,
								},
								y: {
									display: false,
								},
							},
							elements: {
								line: {
									borderWidth: 2,
									tension: 0.4,
								},
								point: {
									radius: 0,
									hitRadius: 10,
									hoverRadius: 4,
								},
							},
						}"
					/>
				</template>
			</CWidgetStatsA>
		</CCol>
	</CRow>
</template>
