<template>
	<div class="grid grid-cols-1 grid-rows-1 pb-6 relative z-10 h-full">
		<div class="page-content flex flex-col justify-center font-effra">
			<div>
				<the-h1 class="text-electric-blue">
					EXBLIFEP<span class="font-extrabold">®</span> is where microbiological eradication* meets efficacy<sup
						class="text-[50%] font-extrabold -top-[0.8em]"
						>1</sup
					>
				</the-h1>
				<img
					src="/lime-green-border.png"
					alt="Lime Green Border"
					class="h-1.5 w-[240px] my-5"
				/>
			</div>
			<section class="grid grid-cols-2 bg-white py-6 px-8 text-sm text-cool-grey gap-y-10 gap-x-12 max-w-[1380px]">
				<div class="flex gap-x-3.5 items-center col-span-2">
					<img
						src="/summary-icon-1.png"
						alt="Summary Icon 1"
						class="w-[85px] h-[85px]"
					/>
					<div class="min-w-[3px] h-[44px] bg-dark-blue"></div>
					<p>
						EXBLIFEP® is indicated for the
						<span class="text-dark-blue font-bold"
							>treatment of adult patients with cUTI including pyelonephritis, HAP/VAP and bacteraemia associated with these infections,</span
						>
						caused by gram-negative bacteria<sup class="text-[65%] -top-[0.6em] font-medium">5</sup>
					</p>
				</div>
				<div class="flex gap-x-3.5 items-center">
					<img
						src="/summary-icon-2.png"
						alt="Summary Icon 2"
						class="w-[85px] h-[85px]"
					/>
					<div class="min-w-[3px] h-[44px] bg-dark-blue"></div>
					<p>
						EXBLIFEP® demonstrated
						<span class="text-dark-blue font-bold">non-inferiority and superiority vs piperacillin/tazobactam</span> in the composite endpoint of
						clinical cure and microbiological eradication in adults with cUTIs<br />
						at Day 14 in the Primary Analysis Set?<sup class="text-[65%] -top-[0.6em] font-medium">†1</sup>
					</p>
				</div>
				<div class="flex gap-x-3.5 items-center">
					<img
						src="/summary-icon-3.png"
						alt="Summary Icon 3"
						class="w-[85px] h-[85px]"
					/>
					<div class="min-w-[3px] h-[44px] bg-dark-blue"></div>
					<p>
						EXBLIFEP® is indicated to treat HAP/VAP, and<br />
						<span class="text-dark-blue font-bold"
							>could be a useful carbapenem-sparing option<br />
							for ESBL Class A-producing pathogens<sup class="text-[65%] -top-[0.6em] font-extrabold">5,10</sup></span
						>
					</p>
				</div>
				<div class="flex gap-x-3.5 items-center">
					<img
						src="/summary-icon-4.png"
						alt="Summary Icon 4"
						class="w-[85px] h-[85px]"
					/>
					<div class="min-w-[3px] h-[44px] bg-dark-blue"></div>
					<p>
						EXBLIFEP® demonstrated <span class="text-dark-blue font-bold">high intrapulmonary penetration</span> and similar distribution kinetics
						of both compounds into the ELF, supporting its use in the treatment of HAP/VAP<sup class="text-[65%] -top-[0.6em] font-medium">6,9</sup>
					</p>
				</div>
				<div class="flex gap-x-3.5 items-center">
					<img
						src="/summary-icon-5.png"
						alt="Summary Icon 5"
						class="w-[85px] h-[85px]"
					/>
					<div class="min-w-[3px] h-[44px] bg-dark-blue"></div>
					<p>
						EXBLIFEP® demonstrated a
						<span class="text-dark-blue font-bold"
							>favourable overall<br />
							safety profile, comparable to</span
						>
						piperacillin tazobactam<sup class="text-[65%] -top-[0.6em] font-medium">1,9</sup>
					</p>
				</div>
			</section>

			<section class="max-w-[1380px] bg-[#00EAFF] shadow-dark py-4 flex items-center mt-9 relative z-10 border-[6px] border-white">
				<div class="pl-9 pr-7 py-3 border-r-[3px] border-[#002470]">
					<img
						src="/chevron-right-bleu.png"
						alt="Chevron Right Bleu"
						class="w-[64px] h-[64px]"
					/>
				</div>
				<h2 class="pl-10 text-2xl font-bold text-[#002470] max-w-[1200px]">
					At ADVANZ PHARMA, we are committed to taking your treatment options further to improve patient lives, by providing novel therapeutic options
					in the fight against gram-negative and gram-positive infections
				</h2>
			</section>
		</div>
		<footer class="flex flex-col">
			<the-footnotes class="footer max-w-[1380px] font-effra">
				AMR, antimicrobial resistance; AP, acute pyelonephritis; CFU, colony-forming unit; cUTI, complicated urinary tract infection; ELF, epithelial
				lining fluid; HAP/VAP, hospital-acquired pneumonia/ventilator associated pneumonia; MIC, minimum inhibitory concentration.<br />
				*In the ALLIUM study, microbiological eradication is defined as &lt; 103 CFU/mL of qualifying baseline pathogen in urine.<sup>1</sup><br />
				†Primary outcome was the proportion of patients in the primary analysis set (PAS) who achieved a composite outcome of complete resolution of the
				baseline signs and symptoms present at screening (clinical cure) and reduction of qualifying baseline pathogen to less than 103 CFU/mL in urine
				(microbiological eradication) at Day 14. The PAS included all patients who received at least 1 dose of study drug and had a gram-negative
				baseline pathogen in urine at 105 CFU/mL or more or the same pathogen present in both blood and urine cultures that was not resistant to either
				cefepime/enmetazobactam (MIC ≤ 8 μg/mL) or piperacillin/tazobactam (MIC ≤ 64 μg/mL).<sup>1</sup>
			</the-footnotes>
			<div class="flex justify-end items-center mt-4 mr-12">
				<explore-another-short />
			</div>
		</footer>
	</div>
</template>

<script setup>
import { toRef } from 'vue';

import { usePageAnimation } from '@/composables/usePageAnimation.js';

import ExploreAnotherShort from '@/components/ExploreAnotherShort.vue';

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

const sidebarOpenRef = toRef(props, 'sidebarOpen');
usePageAnimation(sidebarOpenRef);
</script>
