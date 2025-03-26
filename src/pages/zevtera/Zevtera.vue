<template>
	<div class="grid grid-cols-1 grid-rows-1 pb-6 h-full pr-14">
		<div class="flex flex-col justify-start">
			<section class="relative">
				<VLazyImage
					:src="MabelioBullet"
					alt="Mabelio Bullet"
					class="w-[662px]"
				/>
				<VLazyImage
					:src="StrikeFast"
					alt="Strike Fast"
					class="absolute bottom-14 -right-5 w-[278px] h-auto object-cover"
				/>
			</section>
			<section class="pl-14 pt-8">
				<the-h1 class="relative !text-[30px] text-charcoal">
					Allows the reduction of the number of agents<sup class="text-[60%] -top-[0.45em]">2</sup>,<br />
					thanks to its expanded spectrum of antimicrobial activity<sup class="text-[60%] -top-[0.45em]">3</sup>
				</the-h1>
				<div class="flex mt-7">
					<the-body-lg class="text-charcoal">
						ZEVTERA®/MABELIO® is indicated for the treatment of<br />
						the following infections in term neonates, infants, children,<br />
						adolescents and adults:<sup class="text-[60%] -top-[0.8em]">4</sup>
					</the-body-lg>
					<ul class="ml-11">
						<li class="flex gap-x-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="12"
								viewBox="0 0 16 12"
								fill="none"
								class="translate-y-0.5"
							>
								<path
									d="M15.712 5.88465L0.928005 11.575L0.928005 0.194269L15.712 5.88465Z"
									fill="#009656"
								/>
							</svg>
							<the-body-lg class="text-charcoal">
								Hospital-acquired pneumonia (HAP), excluding ventilator-<br />associated pneumonia (VAP)
							</the-body-lg>
						</li>
						<li class="flex gap-x-3 mt-2 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="12"
								viewBox="0 0 16 12"
								fill="none"
							>
								<path
									d="M15.712 5.88465L0.928005 11.575L0.928005 0.194269L15.712 5.88465Z"
									fill="#009656"
								/>
							</svg>
							<the-body-lg class="text-charcoal">Community-acquired pneumonia (CAP)</the-body-lg>
						</li>
					</ul>
				</div>
			</section>
			<section class="pl-14 pt-7">
				<the-h1 class="text-charcoal max-h-[30px]">I'm interested in:</the-h1>
				<div class="flex gap-x-2.5 mt-10">
					<div class="relative flex flex-col items-center bg-white shadow-exblifep-card w-[276px] rounded-lg min-h-[145px] pb-[18px] px-5">
						<div class="flex justify-center pt-1.5 bg-white absolute w-[76px] h-[76px] left-1/2 -translate-x-1/2 -top-[38px] rounded-full">
							<chart-icon
								width="40"
								height="40"
							/>
						</div>
						<the-body-lg class="relative !text-base font-bold z-20 max-h-[18px] mt-[18px]">Efficacy</the-body-lg>
						<div class="flex flex-col flex-1 justify-between items-center mt-1">
							<the-body-lg class="text-center"
								>Demonstrated efficacy with clinical efficacy from Days 3-4, with more pathogens covered<sup class="text-[61%]"
									>5-8</sup
								></the-body-lg
							>
							<button
								class="bg-primary-green w-[125px] py-[9px]"
								@click="router.push({ name: 'exblifep-efficacy' })"
								@touchstart.prevent="router.push({ name: 'exblifep-efficacy' })"
							>
								<the-body class="text-white">Discover more</the-body>
							</button>
						</div>
					</div>
					<div class="relative flex flex-col items-center bg-white shadow-exblifep-card w-[276px] rounded-lg min-h-[145px] pb-[18px] px-5">
						<div class="flex justify-center pt-1.5 bg-white absolute w-[76px] h-[76px] left-1/2 -translate-x-1/2 -top-[38px] rounded-full">
							<shield-icon
								width="40"
								height="40"
								color="#EF7B00"
							/>
						</div>
						<the-body-lg class="relative !text-base font-bold z-20 max-h-[18px] mt-[18px]">Safety</the-body-lg>
						<div class="flex flex-col flex-1 justify-between items-center mt-1">
							<the-body-lg class="text-center">ZEVTERA®/MABELIO® is generally well tolerated<sup class="text-[61%]">9</sup></the-body-lg>
							<button
								class="bg-primary-green w-[125px] py-[9px]"
								@click="router.push({ name: 'exblifep-efficacy' })"
								@touchstart.prevent="router.push({ name: 'exblifep-efficacy' })"
							>
								<the-body class="text-white">Discover more</the-body>
							</button>
						</div>
					</div>
					<div class="relative flex flex-col items-center bg-white shadow-exblifep-card w-[276px] rounded-lg min-h-[145px] pb-[18px] px-5">
						<div class="flex justify-center pt-1.5 bg-white absolute w-[76px] h-[76px] left-1/2 -translate-x-1/2 -top-[38px] rounded-full">
							<chart-icon class="w-10 h-10" />
						</div>
						<the-body-lg class="relative !text-base font-bold z-20 max-h-[18px] mt-[18px]">Efficacy</the-body-lg>
						<div class="flex flex-col flex-1 justify-between items-center mt-1">
							<the-body-lg class="text-center"
								>Demonstrated efficacy with clinical efficacy from Days 3-4, with more pathogens covered<sup class="text-[61%]"
									>5-8</sup
								></the-body-lg
							>
							<button
								class="bg-primary-green w-[125px] py-[9px]"
								@click="router.push({ name: 'exblifep-efficacy' })"
								@touchstart.prevent="router.push({ name: 'exblifep-efficacy' })"
							>
								<the-body class="text-white">Discover more</the-body>
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
		<footer>
			<the-footnotes class="transition-all duration-300 ml-14 font-uni-grotesk"
				>Zevtera® is the trademark in UK, Germany, Spain, Denmark, Norway, Sweden and Finland; Mabelio® is the trademark in France and Italy.
				Commercialised by ADVANZ PHARMA® in Germany, Spain, Italy,<br />
				France, and UK. Zevtera® / Mabelio ® is licensed to ADVANZ PHARMA by Basilea Pharmaceutica International AG.<br />©2025 ADVANZ
				PHARMA®</the-footnotes
			>
			<div class="flex justify-between items-center mt-4 mr-12">
				<ExploreAnother />
			</div>
		</footer>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

import StrikeFast from '/strike-fast.png';
import MabelioBullet from '/mabelio-bullet.png';

import VLazyImage from 'v-lazy-image';

import ChartIcon from '@/icons/ChartIcon.vue';
import ShieldIcon from '@/icons/ShieldIcon.vue';
import BottleIcon from '@/icons/BottleIcon.vue';

import TheH1 from '@/components/zevtera/TheH1.vue';
import TheH2 from '@/components/zevtera/TheH2.vue';
import TheBody from '@/components/zevtera/TheBody.vue';
import TheBodyLg from '@/components/zevtera/TheBodyLg.vue';
import ExploreAnother from '@/components/ExploreAnother.vue';
import TheFootnotes from '@/components/zevtera/TheFootnotes.vue';

defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
});

const router = useRouter();
</script>
