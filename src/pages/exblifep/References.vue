<template>
	<div
		class="relative z-[9999] w-screen h-screen flex justify-center items-center bg-black"
		@click="router.go(-1)"
		@touchstart.prevent="router.go(-1)"
	>
		<div
			class="relative bg-white min-w-[1000px] min-h-[610px] px-16 py-12 font-effra"
			@click.stop
			@touchstart.stop
		>
			<div>
				<the-h1 class="text-electric-blue">References</the-h1>
				<img
					src="/lime-green-border.png"
					alt="Lime Green Border"
					class="h-1 w-[91px] my-3.5"
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
			<div class="mt-6 text-sm text-cool-grey -ml-2">
				<div class="flex items-center">
					<div class="flex items-end justify-end h-6 w-[3ch] text-right">1.</div>
					<div class="ml-2">Kaye KS <span class="italic">et al. JAMA </span>2022;328(13):1304-1314.</div>
				</div>
				<div class="flex">
					<div class="w-[3ch] text-right">2.</div>
					<div class="ml-2">Kiem S, Schentag JJ. Infect Chemother 2013;45(3):283-291.</div>
				</div>
				<div class="flex items-center">
					<div class="flex items-end justify-end h-6 w-[3ch] text-right">3.</div>
					<div class="ml-2">Kadry N <span class="italic">et al. Clin Infect Dis </span>2023;76(10):1768-1775.</div>
				</div>
				<div class="flex items-center">
					<div class="flex items-end justify-end h-6 w-[3ch] text-right">4.</div>
					<div class="ml-2">Albin OR <span class="italic">et al. Clin Infect Dis </span>2020;71(12):3033-3041.</div>
				</div>
				<div class="flex leading-tight">
					<div class="w-[3ch] text-right">5.</div>
					<div class="ml-2">
						EXBLIFEP® Summary of Product Characteristics (March 2024). Available at: https://www.ema.europa.eu/en/documents/product-information/<br />exblifep-epar-product-information_en.pdf.
					</div>
				</div>
				<div class="flex items-center">
					<div class="flex items-end justify-end h-6 w-[3ch] text-right">7.</div>
					<div class="ml-2">Rodvold KA <span class="italic">et al. Clin Pharmacokinet </span>2011;50(10):637-664.</div>
				</div>
				<div class="flex items-center">
					<div class="flex items-end justify-end h-6 w-[3ch] text-right">8.</div>
					<div class="ml-2">Torres A <span class="italic">et al. Eur Respir J </span>2017;50(3):1700582.</div>
				</div>
				<div class="flex leading-tight">
					<div class="w-[3ch] text-right">9.</div>
					<div class="ml-2">
						European Medicines Agency. EXBLIFEP® Assessment report. Available at:
						https://www.ema.europa.eu/en/documents/assessment-report/exblifep-<br />epar-public-assessment-report_en.pdf. Accessed January 2025.
					</div>
				</div>
				<div class="flex items-center">
					<div class="flex items-end justify-end h-6 w-[3ch] text-right">10.</div>
					<div class="ml-2">Belley A <span class="italic">et al. J Glob Antimicrob Resist </span>2021;25:93-101.</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

import TheH1 from '@/components/exblifep/TheH1.vue';

const router = useRouter();
</script>

<style scoped></style>
