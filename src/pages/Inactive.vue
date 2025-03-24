<template>
	<div
		class="relative z-[9999] w-screen h-screen flex justify-center items-center bg-black/40"
		@click="router.go(-1)"
		@touchstart.prevent="router.go(-1)"
	>
		<div
			class="bg-white min-w-[800px] min-h-[386px] py-[52px] font-futura relative"
			@click.stop
			@touchstart.stop
		>
			<div class="flex flex-col justify-between items-center">
				<h2 class="text-[40px] font-semibold text-[#195C68] leading-tight">Still using this touchscreen?</h2>
				<button
					class="flex items-center justify-end gap-x-5 py-2.5 px-[22px] min-w-[442px] bg-primary-green text-white text-2xl font-gothic mt-[60px]"
					@click="router.go(-1)"
				>
					<span>Return to previous screen</span>
					<img
						src="/chevron-right-white.png"
						alt="Chevron Right"
						class="w-[50px]"
					/>
				</button>
				<p class="text-2xl leading-tight mt-[84px]">Automatically restarting in {{ Math.ceil(countdownSeconds) }} seconds</p>
			</div>

			<!-- Loading bar container - positioned at the bottom -->
			<div class="absolute bottom-0 left-0 w-full h-2 bg-gray-200">
				<!-- GSAP animated loading bar -->
				<div
					ref="loadingBarRef"
					class="h-full bg-[#94C11F]"
					style="width: 0%"
				></div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

import gsap from 'gsap';

const router = useRouter();
const countdownSeconds = ref(10);
const loadingBarRef = ref(null);

let tl = null;
let countdownTween = null;

onMounted(() => {
	// Create GSAP timeline
	tl = gsap.timeline({
		onComplete: () => {
			router.push({ name: 'screensaver' });
		},
	});

	// Animate countdown number
	countdownTween = gsap.to(countdownSeconds, {
		duration: 10,
		value: 0,
		ease: 'linear',
	});

	// Animate loading bar
	tl.to(loadingBarRef.value, {
		width: '100%',
		duration: 10,
		ease: 'linear',
	});
});

onUnmounted(() => {
	// Clean up GSAP animations
	if (countdownTween) {
		countdownTween.kill();
	}
	if (tl) {
		tl.kill();
	}
	gsap.killTweensOf(loadingBarRef.value);
});
</script>

<style scoped></style>
