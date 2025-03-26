<template>
	<div>
		<router-view v-slot="{ Component }">
			<transition
				name="fade"
				mode="out-in"
			>
				<component :is="Component" />
			</transition>
		</router-view>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted, onUnmounted, provide } from 'vue';

import { exportData } from '@/utils/analytics.js';
import { usePageTimeTracker } from '@/composables/usePageTimeTracker.js';

const router = useRouter();

usePageTimeTracker();

let inactivityTimer;

const resetInactivityTimer = () => {
	clearTimeout(inactivityTimer);
	inactivityTimer = setTimeout(() => {
		router.push('/screensaver');
	}, 600000);
};

onMounted(() => {
	resetInactivityTimer();
	router.push('/zevtera');

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
</script>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
