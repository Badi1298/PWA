<template>
	<video
		src="/screensaver.mp4"
		autoplay
		muted
		loop
		style="width: 100vw; height: 100vh"
		@click="hideScreensaver"
		@touchstart.prevent="hideScreensaver"
	></video>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const hideScreensaver = () => {
	router.push('/');
};
</script>
