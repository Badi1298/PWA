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
			<section class="pl-14 pt-7">
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
		</div>
		<footer>
			<the-footer class="transition-all duration-300 ml-14 font-uni-grotesk"
				>Zevtera® is the trademark in UK, Germany, Spain, Denmark, Norway, Sweden and Finland; Mabelio® is the trademark in France and Italy.
				Commercialised by ADVANZ PHARMA® in Germany, Spain, Italy,<br />
				France, and UK. Zevtera® / Mabelio ® is licensed to ADVANZ PHARMA by Basilea Pharmaceutica International AG.<br />©2025 ADVANZ
				PHARMA®</the-footer
			>
			<div class="flex justify-between items-center mt-4 mr-12">
				<ExploreAnother />
			</div>
		</footer>
	</div>
</template>

<script setup>
import StrikeFast from '/strike-fast.png';
import MabelioBullet from '/mabelio-bullet.png';

import VLazyImage from 'v-lazy-image';

import TheH1 from '@/components/zevtera/TheH1.vue';
import TheH2 from '@/components/zevtera/TheH2.vue';
import TheBody from '@/components/zevtera/TheBody.vue';
import TheBodyLg from '@/components/zevtera/TheBodyLg.vue';
import TheFootnotes from '@/components/zevtera/TheFootnotes.vue';

import Card from '@/components/Card.vue';
import TheFooter from '@/components/TheFooter.vue';
import ExploreAnother from '@/components/ExploreAnother.vue';

defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
});
</script>
