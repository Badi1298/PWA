<template>
	<div
		class="relative z-[9999] w-screen h-screen flex justify-center items-center bg-black"
		@click="router.go(-1)"
		@touchstart.prevent="router.go(-1)"
	>
		<div
			class="relative bg-white max-w-[1000px] h-[600px] pt-8"
			@click.stop
			@touchstart.stop
		>
			<div class="px-[38px]">
				<the-h1 class="text-electric-blue">EXBLIFEP<span class="font-extrabold">®</span> prescribing information</the-h1>
				<img
					src="/lime-green-border.png"
					alt="Lime Green Border"
					class="h-1.5 w-[91px] my-3.5"
				/>
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="40"
				height="40"
				viewBox="0 0 40 40"
				fill="none"
				@click="router.go(-1)"
				@touchstart.prevent="router.go(-1)"
				class="absolute right-7 top-7"
			>
				<circle
					cx="20"
					cy="20"
					r="20"
					fill="#1F17F6"
				/>
				<path
					d="M12.7474 28.5714L11.4287 27.2528L18.6815 20L11.4287 12.7473L12.7474 11.4286L20.0001 18.6813L27.2529 11.4286L28.5716 12.7473L21.3188 20L28.5716 27.2528L27.2529 28.5714L20.0001 21.3187L12.7474 28.5714Z"
					fill="white"
				/>
			</svg>

			<VLazyImage
				:src="PrescribingInformation"
				alt="Zevtera Prescribing Information"
				class="w-[1000px] h-[480px]"
			/>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

import VLazyImage from 'v-lazy-image';

import TheH1 from '@/components/exblifep/TheH1.vue';
import TheTitle from '@/components/exblifep/TheTitle.vue';
import PrescribingInformation from '/exblifep-prescribing-information.png';

const router = useRouter();
</script>

<style scoped></style>
