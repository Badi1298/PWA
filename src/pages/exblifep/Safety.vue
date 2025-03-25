<template>
	<div class="grid grid-cols-1 grid-rows-1 pb-6 h-full">
		<img
			src="/back-button-white.png"
			alt="Back Button"
			class="absolute top-1/2 -translate-y-1/2 h-[84px] cursor-pointer"
			@click="router.push({ name: 'exblifep-efficacy', query: { navigatedAwayBy: 'back-button' } })"
			@touchstart.prevent="router.push({ name: 'exblifep-efficacy', query: { navigatedAwayBy: 'back-button' } })"
		/>
		<div class="page-content flex flex-col justify-end font-effra pr-14">
			<div>
				<the-h1 class="text-electric-blue">
					EXBLIFEP<span class="font-extrabold">®</span> demonstrated a favourable overall safety profile,<br />
					comparable to piperacillin/tazobactam<sup class="text-[65%] -top-[0.4em]">1,9</sup>
				</the-h1>
				<img
					src="/lime-green-border.png"
					alt="Lime Green Border"
					class="h-1.5 w-[300px] my-2.5"
				/>
			</div>
			<div class="pt-5 grid grid-cols-[1fr_0.5fr] items-center">
				<div class="flex flex-col gap-y-5">
					<h2 class="text-xl font-bold text-dark-blue leading-tight max-h-[72px]">
						Drug-related treatment-emergent adverse events in<br />
						patients treated with EXBLIFEP<span class="font-extrabold">®</span> were comparable to piperacillin/tazobactam in the ALLIUM study<sup
							>1</sup
						>
					</h2>
					<div class="flex flex-col gap-y-4">
						<the-h2 class="font-semibold text-cool-grey">
							The most common adverse reactions with EXBLIFEP® that occurred in<br />
							the Phase III clinical trial were:<sup class="text-[60%] font-extrabold -top-[0.50em]">5</sup>
						</the-h2>
						<ul class="list-disc pl-5 ml-3 my-3.5">
							<li class="text-cool-grey">ALT and AST increase (4.8% and 3.5%, respectively)</li>
							<li class="text-cool-grey">Diarrhoea (2.9%)</li>
							<li class="text-cool-grey">Infusion site phlebitis (1.9%)</li>
						</ul>
					</div>
					<the-body-lg class="text-cool-grey"
						>Serious drug reaction of Clostridioides difficile colititis (0.2%)<sup class="text-[60%] -top-[0.6em]">5</sup></the-body-lg
					>
					<the-body-lg class="text-cool-grey">
						Drug-related treatment-emergent SAEs reported in EXBLIFEP®<br />
						treated patients were <span class="font-bold text-dark-blue">0.2% vs 0.6%</span> with piperacillin/tazobactam<sup
							class="text-[60%] -top-[0.6em]"
							>1</sup
						>
					</the-body-lg>
					<the-body-lg class="text-cool-grey">
						Treatment-emergent adverse events occurred in 50.0% of EXBLIFEP®-treated<br />
						patients vs 44.0% with piperacillin/tazobactam; most were mild-to-moderate in<br />
						severity<sup class="text-[60%] -top-[0.6em]">1</sup>
					</the-body-lg>
				</div>
				<img
					src="/shield.png"
					alt="Shield"
					class="min-w-[298px] min-h-[298px] max-w-[298px] max-h-[298px]"
				/>
			</div>
		</div>
		<footer>
			<the-footnotes class="footer text-cool-grey mt-[70px]"
				>For full list of adverse reactions and frequency please consult the Summary of Product Characteristics.<br />
				ALT, alanine transaminase; AST, aspartate aminotransferase; SAE, serious adverse event.</the-footnotes
			>
			<div class="flex justify-between items-center mt-[50px] mr-12">
				<ExploreAnother />
				<RouterLink :to="{ name: 'exblifep-dosing', query: { navigatedAwayBy: 'next-section-button' } }">
					<next-section class="bg-electric-blue" />
				</RouterLink>
			</div>
		</footer>
	</div>
</template>

<script setup>
import { toRef } from 'vue';
import { useRouter } from 'vue-router';

import { usePageAnimation } from '@/composables/usePageAnimation.js';

import TheH1 from '@/components/exblifep/TheH1.vue';
import TheH2 from '@/components/exblifep/TheH2.vue';
import NextSection from '@/components/NextSection.vue';
import TheBodyLg from '@/components/exblifep/TheBodyLg.vue';
import ExploreAnother from '@/components/ExploreAnother.vue';
import TheFootnotes from '@/components/exblifep/TheFootnotes.vue';

const props = defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
});

const router = useRouter();

const sidebarOpenRef = toRef(props, 'sidebarOpen');
usePageAnimation(sidebarOpenRef);
</script>
