<script setup>
	import { onMounted, ref } from "vue";
	import { CChart } from "@coreui/vue-chartjs";
	import { getStyle } from "@coreui/utils";
	import axios from "axios";

	const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

	const mainChartRef = ref();

	import { nextTick } from "vue";

	const options = {
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false,
			},
		},
		scales: {
			x: {
				grid: {
					color: getStyle("--cui-border-color-translucent"),
					drawOnChartArea: false,
				},
				ticks: {
					color: getStyle("--cui-body-color"),
				},
			},
			y: {
				beginAtZero: true,
				border: {
					color: getStyle("--cui-border-color-translucent"),
				},
				grid: {
					color: getStyle("--cui-border-color-translucent"),
				},
				max: 5,
				ticks: {
					color: getStyle("--cui-body-color"),
					maxTicksLimit: 5,
					stepSize: Math.ceil(250 / 5),
				},
			},
		},
		elements: {
			line: {
				tension: 0.4,
			},
			point: {
				radius: 0,
				hitRadius: 10,
				hoverRadius: 4,
				hoverBorderWidth: 3,
			},
		},
	};

	onMounted(() => {
		document.documentElement.addEventListener("ColorSchemeChange", () => {
			if (mainChartRef.value) {
				mainChartRef.value.chart.options.scales.x.grid.borderColor = getStyle(
					"--cui-border-color-translucent"
				);
				mainChartRef.value.chart.options.scales.x.grid.color = getStyle(
					"--cui-border-color-translucent"
				);
				mainChartRef.value.chart.options.scales.x.ticks.color =
					getStyle("--cui-body-color");
				mainChartRef.value.chart.options.scales.y.grid.borderColor = getStyle(
					"--cui-border-color-translucent"
				);
				mainChartRef.value.chart.options.scales.y.grid.color = getStyle(
					"--cui-border-color-translucent"
				);
				mainChartRef.value.chart.options.scales.y.ticks.color =
					getStyle("--cui-body-color");
				mainChartRef.value.chart.update();
			}
		});
	});
</script>

<template>
	<CChart
		type="line"
		v-if="renderComponent"
		:key="data.labels.length"
		:data="data"
		:options="options"
		ref="mainChartRef"
	/>
</template>
<script>
	export default {
		data() {
			return {
				renderComponent: true,
				random: (min, max) => Math.floor(Math.random() * (max - min + 1) + min),
				data: {
					labels: [],
					datasets: [
						{
							label: "Рабочие с средствами защиты",
							backgroundColor: `rgba(${getStyle("--cui-info-rgb")}, .1)`,
							borderColor: getStyle("--cui-info"),
							pointHoverBackgroundColor: getStyle("--cui-info"),
							borderWidth: 2,
							data: [
								// random(0, 4),
								// random(0, 4),
								// random(0, 4),
								// random(0, 4),
								// random(0, 4),
								// random(0, 4),
								// random(0, 4),
							],
							fill: true,
						},
						{
							label: "Рабочие без средств защиты",
							backgroundColor: "transparent",
							borderColor: getStyle("--cui-success"),
							pointHoverBackgroundColor: getStyle("--cui-success"),
							borderWidth: 2,
							data: [
								// random(0, 4),
								// random(0, 4),
								// random(0, 4),
								// random(0, 4),
								// random(0, 4),
								// random(0, 4),
								// random(0, 4),
								// random(0, 4),
								// random(0, 4),
								// random(0, 4),
								// random(0, 4),
							],
						},
						{
							label: "Норма рабочих на объекте",
							backgroundColor: "transparent",
							borderColor: getStyle("--cui-danger"),
							pointHoverBackgroundColor: getStyle("--cui-danger"),
							borderWidth: 1,
							borderDash: [8, 5],
							data: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
						},
					],
				},
			};
		},
		mounted: function () {
			this.todo();
		},

		methods: {
			todo: function () {
				this.intervalid1 = setInterval(
					function () {
						this.getData();
					}.bind(this),
					3000
				);
			},
			getData() {
				axios
					.get("http://10.2.0.168:8000/data/?q=1")
					.then((response) => {
						console.log(response);
						if (this.data.labels.length % 10 === 0) {
							this.data.labels.push(new Date().toLocaleTimeString());
						} else {
							this.data.labels.push("");
						}
						this.data.datasets[0].data.push(response.data[0].person_count);
						this.data.datasets[2].data.push(3);

						console.log(data.labels);
						console.log("data.labels");
					})
					.catch((error) => {});
				this.forceRerender();
			},
			forceRerender() {
				// Remove my-component from the DOM
				this.renderComponent = false;

				this.$nextTick(() => {
					// Add the component back in
					this.renderComponent = true;
				});
			},
		},
	};
</script>