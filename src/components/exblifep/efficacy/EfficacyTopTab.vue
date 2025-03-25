<template>
	<div
		ref="topTab"
		class="grid grid-cols-1 grid-rows-1 min-h-screen relative z-10"
	>
		<div class="flex flex-col gap-y-6 absolute top-1/2 -translate-y-1/2 left-[22px]">
			<img
				src="/active-dot.png"
				alt="Active Dot"
				class="w-2.5 h-2.5 cursor-pointer"
			/>
			<img
				src="/inactive-dot.png"
				alt="Active Dot"
				class="w-2.5 h-2.5 cursor-pointer"
				@click="emit('goToBottomTab')"
				@touchstart.prevent="emit('goToBottomTab')"
			/>
		</div>
		<div class="page-content flex flex-col justify-end mb-2 font-effra">
			<div class="relative flex justify-between mr-12">
				<div>
					<the-h1 class="text-electric-blue max-h-[60px]">
						EXBLIFEP<span class="font-extrabold">®</span> achieved superiority in overall treatment<br />
						success* in patients with cUTIs vs piperacillin/tazobactam<sup class="text-[50%] font-extrabold -top-[0.8em]">1</sup>
					</the-h1>
					<img
						src="/lime-green-border.png"
						alt="Lime Green Border"
						class="h-1.5 w-auto my-2.5"
					/>
				</div>
				<div class="select-tab absolute top-0 flex gap-x-3.5 items-center text-cool-grey text-2xl font-medium">
					<img
						src="/touch.png"
						alt="Touch to select tab"
						class="w-[50px] h-[50px]"
					/>
					<the-h2>Select a tab</the-h2>
				</div>
			</div>

			<the-body-lg class="text-cool-grey">
				In ALLIUM, EXBLIFEP® demonstrated both non-inferiority and statistical superiority in overall treatment success (a composite endpoint of<br />
				clinical cure and microbiological eradication) at Day 14 vs piperacillin/tazobactam in patients in the PAS with cUTIs caused by<br />
				gram-negative pathogens<sup class="text-[60%] -top-[0.6em]">1</sup>
			</the-body-lg>

			<section class="flex pt-3 gap-x-[22px] z-10 relative">
				<div class="flex flex-col w-[860px]">
					<div class="grid grid-cols-[1fr_1.68fr] gap-x-2">
						<button
							class="flex items-center justify-center py-3 rounded-t-[20px] text-2xl transition-colors duration-500"
							:class="[activeTab === Tabs.OVERALL_SUCCESS ? 'bg-electric-blue text-white' : 'bg-[#E4E4E4] text-dark-blue']"
							@click="activateOverallSuccess"
							@touchstart.prevent="activateOverallSuccess"
						>
							<the-body-lg class="font-medium max-h-[20px]">Overall success*: Day 14 in PAS </the-body-lg>
						</button>
						<button
							class="flex items-center justify-center py-3 rounded-t-[20px] text-2xl transition-colors duration-500"
							:class="[activeTab === Tabs.CLINICAL_CURE ? 'bg-electric-blue text-white' : 'bg-[#E4E4E4] text-dark-blue']"
							@click="activateClinicalCure"
							@touchstart.prevent="activateClinicalCure"
						>
							<the-body-lg class="font-medium max-h-[20px]">Clinical cure & Microbiological eradication: Day 14 in PAS </the-body-lg>
						</button>
					</div>
					<div class="relative w-[860px] h-[430px]">
						<div class="chart-a absolute top-0 left-0">
							<VLazyImage
								:src="ChartA"
								alt="Chart A"
								class="w-full h-full"
							/>
						</div>
						<div class="chart-b opacity-0 absolute top-0 left-0">
							<VLazyImage
								:src="ChartB"
								alt="Chart B"
								class="w-full h-full"
							/>
							<div
								class="info absolute bottom-4 left-1/2 -translate-x-1/2 min-w-[758px] bg-[#00EAFF] py-2.5 flex items-center z-10 border-[3px] border-white"
							>
								<div class="pl-9 pr-4 py-[7px] border-r-[3px] border-[#002470]">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="40"
										height="41"
										viewBox="0 0 40 41"
										fill="none"
									>
										<g clip-path="url(#clip0_360_20554)">
											<path
												d="M0.875 0.731201L16.85 20.7062L0.875 40.6812H9.75L25.725 20.7062L21.2875 15.1624L9.75 0.731201H0.875Z"
												fill="#002470"
											/>
											<path
												d="M14.5562 0.5L30.5312 20.475L14.5562 40.4437H23.4312L39.4062 20.475L34.9687 14.925L23.4312 0.5H14.5562Z"
												fill="#002470"
											/>
										</g>
										<defs>
											<clipPath id="clip0_360_20554">
												<rect
													width="38.5312"
													height="40.1813"
													fill="white"
													transform="translate(0.875 0.5)"
												/>
											</clipPath>
										</defs>
									</svg>
								</div>
								<h2 class="pl-6 text-base leading-tight font-bold text-[#002470] max-w-[640px]">
									EXBLIFEP® demonstrated statistical superiority in microbiological eradication,<br />
									and no significant difference in the other secondary outcome of clinical cure<sup>1</sup>
								</h2>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>

		<footer class="relative pb-6">
			<the-footnotes class="footer mb-4 font-effra text-cool-grey">
				CFU, colony-forming unit; CI, confidence interval; cUTI, complicated urinary tract infection; MIC, minimum inhibitory concentration; PAS,
				primary analysis set.<br />
				*Primary outcome was the proportion of patients in the primary analysis set (PAS) who achieved a composite outcome of complete resolution of the
				baseline signs and symptoms present at screening<br />
				(clinical cure) and reduction of qualifying baseline pathogen to less than 10<sup>3</sup> CFU/mL in urine (microbiological eradication) at Day
				14. The PAS included all patients who received at least 1 dose of study<br />
				drug and had a gram-negative baseline pathogen in urine at 10<sup>5</sup> CFU/mL or more or the same pathogen present in both blood and urine
				cultures that was not resistant to either cefepime/<br />enmetazobactam (MIC ≤8 μg/mL) or piperacillin/tazobactam (MIC ≤64
				μg/mL).<sup>1†</sup>Treatment difference is the difference in the overall success rate between the two treatment arms (95% CIs, 2-sided,<br />
				stratified Newcombe method).<sup>1</sup></the-footnotes
			>
			<explore-another />
			<button
				class="absolute left-1/2 bottom-0"
				@click="emit('goToBottomTab')"
				@touchstart.prevent="emit('goToBottomTab')"
			>
				<img
					src="/down-button-blue.png"
					alt="Down Button"
					class="w-[84px] h-[30px] cursor-pointer"
				/>
			</button>
		</footer>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, computed, toRef, inject, watch, onMounted } from 'vue';

import { gsap } from 'gsap';

import VLazyImage from 'v-lazy-image';

// import { trackAction } from '@/utils/analytics.js';
import { useAnimateSelectTab } from '@/composables/useAnimateSelectTab.js';

import ChartA from '/chart-a.png';
import ChartB from '/chart-b.png';

import TheH1 from '@/components/exblifep/TheH1.vue';
import TheH2 from '@/components/exblifep/TheH2.vue';
import TheBodyLg from '@/components/exblifep/TheBodyLg.vue';
import ExploreAnother from '@/components/ExploreAnother.vue';
import TheFootnotes from '@/components/exblifep/TheFootnotes.vue';

const Tabs = Object.freeze({
	OVERALL_SUCCESS: 1,
	CLINICAL_CURE: 2,
});

const props = defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
	scrollIntoView: {
		type: Boolean,
		required: true,
	},
});

const emit = defineEmits(['goToBottomTab']);

const route = useRoute();

const sidebarOpenRef = toRef(props, 'sidebarOpen');
useAnimateSelectTab(sidebarOpenRef);

const sessionId = inject('sessionId');

const topTab = ref(null);
const activeTab = ref(Tabs.OVERALL_SUCCESS);

const brand = computed(() => route.meta.brand);

watch(
	() => props.scrollIntoView,
	(value) => {
		if (value) {
			topTab.value.scrollIntoView({ behavior: 'smooth' });
		}
	}
);

onMounted(() => {
	gsap.set('.chart-b', { autoAlpha: 0 });
});

const activateOverallSuccess = () => {
	activeTab.value = Tabs.OVERALL_SUCCESS;
	gsap.to('.chart-a', { autoAlpha: 1, duration: 0.5 });
	gsap.to('.chart-b', { autoAlpha: 0, duration: 0.5 });
	// trackAction('Efficacy', 'overall-success', sessionId.value, brand.value);
};

const activateClinicalCure = () => {
	activeTab.value = Tabs.CLINICAL_CURE;
	gsap.to('.chart-a', { autoAlpha: 0, duration: 0.5 });
	gsap.to('.chart-b', { autoAlpha: 1, duration: 0.5 });
	// trackAction('Efficacy', 'clinical-cure', sessionId.value, brand.value);
};
</script>

<style scoped>
.info {
	box-shadow: 1.875px 2.5px 6.25px 1.25px rgba(0, 0, 0, 0.25);
}
</style>
