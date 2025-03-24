<template>
	<div class="grid grid-cols-1 grid-rows-1 pb-6 h-full">
		<div class="relative flex flex-col pr-8 max-w-[969px]">
			<VLazyImage
				:src="ResistanceAndRecurrence"
				alt="Resistance and Recurrence"
				class="absolute right-[18px] top-0 w-[587px]"
			/>
			<section class="flex flex-col gap-y-6 pl-14 pt-[76px]">
				<div class="flex flex-col max-w-[312px] gap-y-6">
					<VLazyImage
						:src="Logo"
						alt="EXBLIFEP®"
						class="w-[154px]"
					/>
					<div class="relative flex items-center gap-x-9 py-4 font-effra">
						<img
							src="/exblifep-blue-line.png"
							alt="Top Blue Line"
							class="absolute top-0 left-0 w-full h-1"
						/>
						<img
							src="/exblifep-blue-line.png"
							alt="Top Blue Line"
							class="absolute bottom-0 left-0 w-full h-1"
						/>
						<div class="flex flex-col max-w-[312px]">
							<the-h2 class="text-electric-blue">
								EXBLIFEP® is where microbiological<br />
								eradication* meets efficacy<sup class="text-[60%] font-extrabold -top-[0.5em]">1</sup>
							</the-h2>
							<div class="flex flex-col leading-tight mt-4">
								<the-body class="text-cool-grey">
									EXBLIFEP® is indicated for the treatment of the following<br />
									infections in adults:
								</the-body>
								<ul class="list-disc pl-2 ml-3 text-cool-grey">
									<li>
										<the-body
											>Complicated urinary tract infections (cUTI), including<br />
											pyelonephritis</the-body
										>
									</li>
									<li><the-body>Hospital-acquired pneumonia (HAP), including ventilator associated pneumonia (VAP)</the-body></li>
								</ul>
								<the-body class="text-cool-grey">
									Treatment of patients with bacteraemia that occurs in association with, or is suspected to be associated with, any of the
									infections listed above. Consideration should be<br />
									given to official guidance on the appropriate use of antibacterial agents.<sup>5</sup>
								</the-body>
							</div>
						</div>
					</div>
				</div>
				<div>
					<the-h1 class="text-electric-blue">I'm interested in:</the-h1>
					<div class="flex gap-x-2.5 mt-10">
						<div class="relative flex flex-col items-center bg-white shadow-exblifep-card w-[276px] rounded-lg">
							<div class="flex justify-center pt-1.5 bg-white absolute w-[76px] h-[76px] left-1/2 -translate-x-1/2 -top-[38px] rounded-full">
								<chart-icon class="w-10 h-10" />
							</div>
							<div class="flex flex-col items-center gap-y-1 p-6">
								<the-h2 class="relative z-20 max-h-[18px]">Efficacy</the-h2>
								<the-body class="text-center max-h-[28px]"
									>EXBLIFEP® superiority in primary endpoint vs. piperacillin/tazobactam<sup class="text-[70%]">1</sup></the-body
								>
							</div>
							<button
								class="bg-[#97D700] mb-[18px] w-[125px] py-[9px]"
								@click="router.push({ name: 'exblifep-efficacy' })"
								@touchstart.prevent="router.push({ name: 'exblifep-efficacy' })"
							>
								<the-body class="max-h-[12px]">Discover more</the-body>
							</button>
						</div>
						<div class="relative flex flex-col items-center bg-white shadow-exblifep-card w-[276px] rounded-lg">
							<div class="flex justify-center pt-1.5 bg-white absolute w-[76px] h-[76px] left-1/2 -translate-x-1/2 -top-[38px] rounded-full">
								<shield-icon class="w-10 h-10" />
							</div>
							<div class="flex flex-col items-center gap-y-1 p-6">
								<the-h2 class="relative z-20 max-h-[18px]">Safety</the-h2>
								<the-body class="text-center max-h-[28px]"
									>Comparable safety profile to<br />
									piperacillin/tazobactam<sup class="text-[70%]">1</sup></the-body
								>
							</div>
							<button
								class="bg-cool-grey mb-[18px] w-[125px] py-[9px]"
								@click="router.push({ name: 'exblifep-safety' })"
								@touchstart.prevent="router.push({ name: 'exblifep-safety' })"
							>
								<the-body class="max-h-[12px] text-white">Discover more</the-body>
							</button>
						</div>
						<div class="relative flex flex-col items-center bg-white shadow-exblifep-card w-[276px] rounded-lg">
							<div class="flex justify-center pt-1.5 bg-white absolute w-[76px] h-[76px] left-1/2 -translate-x-1/2 -top-[38px] rounded-full">
								<bottle-icon class="w-10 h-10" />
							</div>
							<div class="flex flex-col items-center gap-y-1 p-6">
								<the-h2 class="relative z-20 max-h-[18px]">Dosing</the-h2>
								<the-body class="text-center max-h-[28px]"
									>Recommended dosing and<br />
									administration details<sup class="text-[70%]">5</sup></the-body
								>
							</div>
							<button
								class="bg-electric-blue mb-[18px] w-[125px] py-[9px]"
								@click="router.push({ name: 'exblifep-dosing' })"
								@touchstart.prevent="router.push({ name: 'exblifep-dosing' })"
							>
								<the-body class="max-h-[12px] text-white">Discover more</the-body>
							</button>
						</div>
					</div>
				</div>
			</section>
			<section class="flex justify-between mt-9">
				<explore-another />
				<div class="flex items-center text-[10px] text-cool-grey h-[50px] px-4 border border-black max-w-[468px]">
					▼ This medicinal product is subject to additional monitoring. This will allow quick identification of new safety information. Healthcare
					professionals are asked to report any suspected adverse reactions.
				</div>
			</section>
		</div>
		<footer class="pt-2 font-effra">
			<div class="flex items-end ml-[54px] max-w-[1446px] gap-x-9">
				<the-footnotes class="font-effra text-cool-grey"
					>*In the ALLIUM study, microbiological eradication is defined as reduction of the qualifying baseline pathogen to less than 103 CFU/mL in
					urine.<sup>1</sup><br />
					For healthcare professionals only.<br />
					This medicine has been authorised by the EMA. Product is not yet commercialised in all European markets, because it is in the reimbursement
					phase. MAH for Europe: Advanz Pharma Limited, Unit 17 Northwood House, Northwood Crescent, Dublin 9, D09 V504, Ireland. MAH for UK: Mercury
					Pharmaceuticals Ltd, Dashwood House, 69 Old Broad Street, London, EC2M 1QS, UK.<br />
					©2025 ADVANZ PHARMA® | GL/CEFE/PM/0051 - Date of preparation: March 2025
				</the-footnotes>
			</div>
			<div class="flex justify-between items-center mt-2 mr-12"></div>
		</footer>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

import Logo from '/exblifep-logo.svg';
import HallwayBed from '/hallway-bed.png';
import ResistanceAndRecurrence from '/resistance-and-recurrence.png';

import VLazyImage from 'v-lazy-image';

import ChartIcon from '@/icons/ChartIcon.vue';
import ShieldIcon from '@/icons/ShieldIcon.vue';
import BottleIcon from '@/icons/BottleIcon.vue';

import Card from '@/components/Card.vue';
import TheH1 from '@/components/exblifep/TheH1.vue';
import TheH2 from '@/components/exblifep/TheH2.vue';
import TheBody from '@/components/exblifep/TheBody.vue';
import ExploreAnother from '@/components/ExploreAnother.vue';
import TheFootnotes from '@/components/exblifep/TheFootnotes.vue';

defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
});

const router = useRouter();
</script>
