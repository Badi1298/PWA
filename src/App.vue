<template>
	<div id="app">
		<router-view v-slot="{ Component }">
			<transition
				name="fade"
				mode="out-in"
			>
				<component :is="Component" />
			</transition>
		</router-view>
	</div>
	<button
		class="p-2.5 bg-electric-blue font-effra text-white text-sm rounded-md fixed top-1 right-1"
		@click="exportData"
	>
		Export data
	</button>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted, onUnmounted } from 'vue';

import { exportData } from '@/utils/analytics.js';
import { usePageTimeTracker } from '@/composables/usePageTimeTracker.js';

const router = useRouter();

usePageTimeTracker();

let inactivityTimer;

const resetInactivityTimer = () => {
	clearTimeout(inactivityTimer);
	inactivityTimer = setTimeout(() => {
		router.push('/screensaver');
	}, 30000);
};

// onMounted(() => {
// 	resetInactivityTimer();

// 	window.addEventListener('mousemove', resetInactivityTimer);
// 	window.addEventListener('keydown', resetInactivityTimer);
// 	window.addEventListener('click', resetInactivityTimer);
// });

// onUnmounted(() => {
// 	clearTimeout(inactivityTimer);

// 	window.removeEventListener('mousemove', resetInactivityTimer);
// 	window.removeEventListener('keydown', resetInactivityTimer);
// 	window.removeEventListener('click', resetInactivityTimer);
// });
</script>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.4s;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
