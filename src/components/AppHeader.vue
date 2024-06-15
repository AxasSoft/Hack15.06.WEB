<script setup>
	import { onMounted, ref } from 'vue'
	import avatar from '@/assets/images/avatars/8.jpg'
	import { useSidebarStore } from '@/stores/sidebar.js'

	const headerClassNames = ref('mb-4 p-0')
	const sidebar = useSidebarStore()

	onMounted(() => {
		document.addEventListener('scroll', () => {
			if (document.documentElement.scrollTop > 0) {
				headerClassNames.value = 'mb-4 p-0 shadow-sm'
			} else {
				headerClassNames.value = 'mb-4 p-0'
			}
		})
	})
</script>

<template>
	<CHeader position="sticky" :class="headerClassNames">
		<CContainer class="border-bottom px-4" fluid>
			<CHeaderToggler @click="sidebar.toggleVisible()" style="margin-inline-start: -14px">
				<CIcon icon="cil-menu" size="lg" />
			</CHeaderToggler>
			<CHeaderNav>
				<CAvatar :src="avatar" size="md" />
			</CHeaderNav>
		</CContainer>
	</CHeader>
</template>
