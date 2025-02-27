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
		class="p-2.5 bg-electric-blue font-effra text-white rounded-md"
		@click="exportData"
	>
		Export data
	</button>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

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

onMounted(() => {
	resetInactivityTimer();

	window.addEventListener('mousemove', resetInactivityTimer);
	window.addEventListener('keydown', resetInactivityTimer);
	window.addEventListener('click', resetInactivityTimer);
});

onUnmounted(() => {
	clearTimeout(inactivityTimer);

	window.removeEventListener('mousemove', resetInactivityTimer);
	window.removeEventListener('keydown', resetInactivityTimer);
	window.removeEventListener('click', resetInactivityTimer);
});

const exportData = () => {
	const data = localStorage.getItem('pageMetrics');
	const blob = new Blob([data], { type: 'application/json' });
	const url = URL.createObjectURL(blob);

	const a = document.createElement('a');
	a.href = url;
	a.download = 'pageMetrics.json';
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
};
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
