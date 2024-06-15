<script setup>
	import MainChart from "./MainChart.vue";
	import WidgetsStatsA from "./../widgets/WidgetsStatsTypeA.vue";

	const progressGroupExample1 = [
		{ title: "Понедельник", value1: 34, value2: 78 },
		{ title: "Вторник", value1: 56, value2: 94 },
		{ title: "Среда", value1: 12, value2: 67 },
		{ title: "Четверг", value1: 43, value2: 91 },
		{ title: "Пятница", value1: 22, value2: 73 },
		{ title: "Суббота", value1: 53, value2: 82 },
		{ title: "Воскресенье", value1: 9, value2: 69 },
	];
	const progressGroupExample2 = [
		{ title: "Рабочие", icon: "", value: 53 },
		{ title: "Техника", icon: "", value: 43 },
	];
</script>

<template>
	<div>
		<CRow>
			<CCol :md="12">
				<CCard class="mb-4">
					<CCardBody>
						<CRow>
							<CCol :sm="5">
								<h4 id="traffic" class="card-title mb-0">Статистика</h4>
								<div class="small text-body-secondary">Май - Июнь 2024</div>
							</CCol>
							<CCol :sm="7" class="d-none d-md-block">
								<CButton color="primary" class="float-end">
									<CIcon icon="cil-cloud-download" />
								</CButton>
								<CButtonGroup
									class="float-end me-3"
									role="group"
									aria-label="Basic outlined example"
								>
									<CButton color="secondary" variant="outline">День</CButton>
									<CButton color="secondary" variant="outline" active
										>Месяц</CButton
									>
									<CButton color="secondary" variant="outline">Год</CButton>
								</CButtonGroup>
							</CCol>
						</CRow>
						<CRow>
							<MainChart
								style="height: 300px; max-height: 300px; margin-top: 40px"
							/>
						</CRow>
					</CCardBody>
					<CCardFooter>
						<CRow
							:xs="{ cols: 1, gutter: 4 }"
							:sm="{ cols: 2 }"
							:lg="{ cols: 4 }"
							:xl="{ cols: 5 }"
							class="mb-2 text-center"
						>
							<CCol>
								<div class="text-body-secondary">Visits</div>
								<div class="fw-semibold text-truncate">29.703 Users (40%)</div>
								<CProgress
									class="mt-2"
									color="success"
									thin
									:precision="1"
									:value="40"
								/>
							</CCol>
							<CCol>
								<div class="text-body-secondary">Unique</div>
								<div class="fw-semibold text-truncate">24.093 Users (20%)</div>
								<CProgress
									class="mt-2"
									color="info"
									thin
									:precision="1"
									:value="20"
								/>
							</CCol>
							<CCol>
								<div class="text-body-secondary">Pageviews</div>
								<div class="fw-semibold text-truncate">78.706 Views (60%)</div>
								<CProgress
									class="mt-2"
									color="warning"
									thin
									:precision="1"
									:value="60"
								/>
							</CCol>
							<CCol>
								<div class="text-body-secondary">New Users</div>
								<div class="fw-semibold text-truncate">22.123 Users (80%)</div>
								<CProgress
									class="mt-2"
									color="danger"
									thin
									:precision="1"
									:value="80"
								/>
							</CCol>
							<CCol class="d-none d-xl-block">
								<div class="text-body-secondary">Bounce Rate</div>
								<div class="fw-semibold text-truncate">
									Average Rate (40.15%)
								</div>
								<CProgress class="mt-2" :value="40" thin :precision="1" />
							</CCol>
						</CRow>
					</CCardFooter>
				</CCard>
			</CCol>
		</CRow>
		<WidgetsStatsA class="mb-4" />
		<CRow>
			<CCol :md="12">
				<CCard class="mb-4">
					<CCardHeader> Traffic &amp; Sales </CCardHeader>
					<CCardBody>
						<CRow>
							<CCol :sm="12" :lg="6">
								<CRow>
									<CCol :xs="6">
										<div
											class="border-start border-start-4 border-start-info py-1 px-3 mb-3"
										>
											<div class="text-body-secondary small">Рабочих всего</div>
											<div class="fs-5 fw-semibold">644</div>
										</div>
									</CCol>
									<CCol :xs="6">
										<div
											class="border-start border-start-4 border-start-danger py-1 px-3 mb-3"
										>
											<div class="text-body-secondary small">
												Без средств защиты
											</div>
											<div class="fs-5 fw-semibold">181</div>
										</div>
									</CCol>
								</CRow>
								<hr class="mt-0" />
								<div
									v-for="item in progressGroupExample1"
									:key="item.title"
									class="progress-group mb-4"
								>
									<div class="progress-group-prepend">
										<span class="text-body-secondary small">{{
											item.title
										}}</span>
									</div>
									<div class="progress-group-bars">
										<CProgress thin color="info" :value="item.value1" />
										<CProgress thin color="danger" :value="item.value2" />
									</div>
								</div>
							</CCol>
							<CCol :sm="12" :lg="6">
								<CRow>
									<CCol :xs="6">
										<div
											class="border-start border-start-4 border-start-success py-1 px-3 mb-3"
										>
											<div class="text-body-secondary small">
												Техники (всего)
											</div>
											<div class="fs-5 fw-semibold">48</div>
										</div>
									</CCol>
									<CCol :xs="6">
										<div
											class="border-start border-start-4 border-start-warning py-1 px-3 mb-3"
										>
											<div class="text-body-secondary small">
												Техника (простой)
											</div>
											<div class="fs-5 fw-semibold">8</div>
										</div>
									</CCol>
								</CRow>
								<hr class="mt-0" />
								<div
									v-for="item in progressGroupExample2"
									:key="item.title"
									class="progress-group"
								>
									<div class="progress-group-header">
										<CIcon :icon="item.icon" class="me-2" size="lg" />
										<span class="title">{{ item.title }}</span>
										<span class="ms-auto fw-semibold">{{ item.value }}%</span>
									</div>
									<div class="progress-group-bars">
										<CProgress thin :value="item.value" color="success" />
									</div>
								</div>

								<div class="mb-5"></div>

								<div
									v-for="item in progressGroupExample3"
									:key="item.title"
									class="progress-group"
								>
									<div class="progress-group-header">
										<CIcon :icon="item.icon" class="me-2" size="lg" />
										<span class="title">{{ item.title }}</span>
										<span class="ms-auto fw-semibold">
											{{ item.value }}
											<span class="text-body-secondary small"
												>({{ item.percent }}%)</span
											>
										</span>
									</div>
									<div class="progress-group-bars">
										<CProgress thin :value="item.percent" color="warning" />
									</div>
								</div>
							</CCol>
						</CRow>
					</CCardBody>
				</CCard>
			</CCol>
		</CRow>
	</div>
</template>
