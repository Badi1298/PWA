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
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

const route = useRoute();
const router = useRouter();

const sessionId = ref(crypto.randomUUID());
let startTime = performance.now();

const startNewSession = () => {
	sessionId.value = crypto.randomUUID(); // Invalidate the current session
	startTime = performance.now();
};

const handleRouteChange = (_, from) => {};

router.beforeEach((to, from, next) => {
	handleRouteChange(to, from);
	next();
});

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
