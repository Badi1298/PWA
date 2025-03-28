<template>
	<div class="grid grid-cols-1 grid-rows-1 min-h-screen relative z-10">
		<div class="page-content flex flex-col font-stag-sans">
			<div class="relative flex justify-end mr-12 min-h-[80px]">
				<img
					src="/bullet-long.png"
					alt="Bullet Long"
					class="absolute top-0 -left-12 w-[860px] h-[100px]"
				/>
				<div class="select-tab absolute top-6 flex gap-x-3.5 items-center text-charcoal text-base font-bold font-effra">
					<img
						src="/touch-purple.png"
						alt="Touch to select tab"
						class="w-[50px] h-[50px]"
					/>
					<span class="max-h-[18px]">Touch a step to continue</span>
				</div>
			</div>

			<section class="grid grid-cols-2 items-end pr-14">
				<h1 class="text-[40px] leading-[42px] font-stag-sans font-bold text-charcoal">
					Less burden to<br />
					treat your patients
				</h1>
				<div
					class="flex items-center gap-x-4 bg-primary-light-orange px-[18px] py-4 rounded-[15px] shadow-zevtera-efficacy-pathogens-card min-w-[440px] justify-self-end"
				>
					<img
						src="/tick-icon-black.png"
						alt="Tick"
						class="w-[61px] h-auto"
					/>
					<h4 class="text-2xl leading-[26px] font-bold text-charcoal">Less number of agents*<sup class="text-[60%]">2</sup></h4>
				</div>
			</section>
			<section class="relative grid grid-cols-3 flex-1 mt-8 pb-10 pr-14">
				<div
					ref="wellTolarated"
					class="relative flex flex-col w-[275px] h-[380px] justify-between bg-primary-light-orange rounded-[15px] cursor-pointer z-50 shadow-zevtera-efficacy-pathogens-card"
					@click="animateWellTolarated"
					@touchstart.prevent="animateWellTolarated"
				>
					<div>
						<img
							src="/touch-purple.png"
							alt="Touch to select tab"
							class="absolute w-[55px] h-[55px] top-3 right-4"
						/>
						<img
							src="/swap-purple.png"
							alt="Swap"
							class="absolute w-[55px] h-[55px] top-3 right-4 bacterial-swap-card"
						/>
						<img
							src="/tick-icon-black.png"
							alt="Arrow Down"
							class="w-[155px] mt-5 ml-6"
						/>
					</div>
					<div class="pb-16 text-charcoal px-[18px]">
						<h2 class="text-[30px] leading-[32px] text-charcoal font-bold mt-7">Well-tolerated</h2>
						<p class="text-[15.6px] leading-[19px] mt-4 font-uni-grotesk">
							Zevtera®/Mabelio® is generally well tolerated<sup class="text-[60%] -top-[0.7em]">9</sup>
						</p>
					</div>
				</div>
				<div
					ref="gutFlora"
					class="relative flex flex-col w-[275px] h-[380px] justify-between bg-primary-light-orange rounded-[15px] cursor-pointer z-50 shadow-zevtera-efficacy-pathogens-card"
					@click="animateGutFlora"
					@touchstart.prevent="animateGutFlora"
				>
					<img
						src="/touch-purple.png"
						alt="Touch to select tab"
						class="absolute w-[55px] h-[55px] top-3 right-4"
					/>
					<img
						src="/swap-purple.png"
						alt="Swap"
						class="absolute w-[55px] h-[55px] top-3 right-4 clinical-swap-card"
					/>
					<img
						src="/arrow-down-black.png"
						alt="Arrow Down"
						class="w-[190px] mt-9"
					/>
					<div class="pb-16 text-charcoal px-[18px]">
						<h2 class="text-[30px] leading-[32px] text-charcoal font-bold mt-7">Less impact on gut flora<sup class="text-[60%]">†4,10,11</sup></h2>
						<p class="text-[15.6px] leading-[19px] mt-4 font-uni-grotesk">
							Low risk of adversely affecting<br />
							the gut microflora
						</p>
					</div>
				</div>
				<div
					ref="easeOfUse"
					class="relative flex flex-col w-[275px] h-[380px] justify-between bg-primary-light-orange rounded-[15px] cursor-pointer z-50 shadow-zevtera-efficacy-pathogens-card"
				>
					<RouterLink :to="{ name: 'zevtera-dosing', query: { navigatedAwayBy: 'ease-of-use-card' } }">
						<img
							src="/chevron-right-purple-circle.png"
							alt="Touch to select tab"
							class="absolute w-[55px] h-[55px] top-3 right-4"
						/>

						<img
							src="/hand-cross-black.png"
							alt="Arrow Down"
							class="w-[204px]"
						/>
					</RouterLink>
					<div class="pb-16 text-charcoal px-[18px]">
						<h2 class="text-[30px] leading-[32px] text-charcoal font-bold mt-7">Ease of use<sup class="text-[60%]">‡4</sup></h2>
						<p class="text-[15.6px] leading-[19px] mt-4 font-uni-grotesk">Explore the ZEVTERA®/MABELIO® dosing regimen</p>
					</div>
				</div>
				<div
					ref="wellTolaratedDetails"
					class="flex flex-col gap-y-5 pl-[260px] pt-14 pb-8 min-w-[1200px] min-h-[790px] absolute top-1/2 -translate-y-[59%] left-[190px] right-[60px] bg-white rounded-[30px] overflow-hidden shadow-zevtera-efficacy-card z-10"
				>
					<h2 class="text-[32px] font-bold pr-3 leading-tight">ZEVTERA®/MABELIO® is generally well tolerated<sup class="text-[60%]">9</sup></h2>
					<p class="text-2xl font-medium font-uni-grotesk leading-tight">
						Most common adverse events (incidence ≥5%, regardless of<br />
						causality) in patients with HAP<sup class="text-[50%] -top-[1em]">9</sup>
					</p>

					<div class="flex justify-between pr-14 gap-x-16 mt-1">
						<img
							src="/adverse-events.png"
							alt="Adverse Events"
							class="min-w-[450px] max-w-[450px] h-auto"
						/>
						<div class="flex flex-col gap-y-[50px] bg-[#F5F5F5] rounded-[15px] py-10 px-2.5">
							<div class="flex flex-col items-center gap-y-6">
								<img
									src="/caution-orange-border.png"
									alt="Caution"
									class="w-[80px] h-[80px]"
								/>
								<p class="text-xl font-uni-grotesk text-charcoal text-center leading-tight">
									The incidence of treatment related adverse events was similar to that with other cephalosporins<sup
										class="text-[60%] -top-[0.7em]"
										>1</sup
									>
								</p>
							</div>
							<div class="flex flex-col items-center gap-y-6">
								<img
									src="/patients-orange-border.png"
									alt="Caution"
									class="w-[80px] h-[80px]"
								/>
								<p class="text-xl font-uni-grotesk text-charcoal text-center leading-tight">
									In pooled therapeutic clinical studies, 1,668 patients received ZEVTERA®/MABELIO®<sup class="text-[60%] -top-[0.7em]"
										>4</sup
									>
								</p>
							</div>
						</div>
					</div>
					<footer class="text-[10px] text-[#555] mt-1 mr-12 font-uni-grotesk">Adapted from Syed YY et al. 2014.<sup>9</sup></footer>
				</div>
				<div
					ref="gutFloraDetails"
					class="flex flex-col gap-y-5 pl-[260px] pt-14 pb-8 min-w-[1200px] min-h-[790px] absolute top-1/2 -translate-y-[59%] left-[190px] right-[60px] bg-white rounded-[30px] overflow-hidden shadow-zevtera-efficacy-card z-10"
				>
					<h2 class="text-[32px] font-bold pr-3">Less impact on gut flora<sup class="text-[60%]">4,10,11</sup></h2>
					<div class="flex flex-col gap-y-[60px] mt-11 font-uni-grotesk text-charcoal text-xl">
						<div class="flex items-center gap-x-11">
							<img
								src="/intestines-orange.png"
								alt="Intestines"
								class="w-[122px] h-auto"
							/>
							<p>
								<span class="font-bold">Low risk of adversely affecting the gut microflora</span> because<br />
								ZEVTERA®/MABELIO® is eliminated almost entirely (89%) via the kidneys<sup class="text-[55%] -top-[0.9em]">4,10</sup>
							</p>
						</div>
						<div class="flex items-center gap-x-11">
							<img
								src="/flora-orange.png"
								alt="Intestines"
								class="w-[122px] h-auto"
							/>
							<p>
								In a healthy volunteer study (N=12), 7 days of treatment with<br />
								<span class="font-bold"
									>ZEVTERA®/MABELIO® did not significantly impact human<br />
									intestinal flora</span
								>, and there were no measurable levels of<br />
								ZEVTERA®/MABELIO® in faeces<sup class="text-[55%] -top-[0.9em]">11</sup>
							</p>
						</div>
						<div class="flex items-center gap-x-11">
							<img
								src="/bacteria-orange.png"
								alt="Intestines"
								class="w-[122px] h-auto"
							/>
							<p>
								<span class="italic">Clostridioides difficile</span> colitis is uncommon with ZEVTERA®/MABELIO®<br />
								(reported during therapy or by follow-up visit with a frequency of 1/1,000<br />
								to&lt;1/100)<sup class="text-[55%] -top-[0.9em]">4</sup>
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>

		<footer class="relative pb-6">
			<the-footer class="footer mb-4 font-uni-grotesk"
				>*Among patients who had requirements for de-escalation therapy from linezolid, piperacillin/tazobactam or meropenem combinations<sup>2</sup
				><br /><sup>†</sup>I.e., ceftazidime, cefotoxitin, ceftroaxone or retapenem<sup>10</sup><br /><sup>‡</sup>No dose adjustment except for renally
				impaired patients<sup>4</sup></the-footer
			>
			<div class="flex justify-between items-center mt-4 mr-12">
				<ExploreAnother />
				<RouterLink :to="{ name: 'zevtera-dosing', query: { navigatedAwayBy: 'next-section-button' } }">
					<next-section class="bg-primary-purple" />
				</RouterLink>
			</div>
		</footer>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, toRef, computed, inject, onMounted } from 'vue';

import { gsap } from 'gsap';

// import { trackAction } from '@/utils/analytics.js';
import { usePageAnimation } from '@/composables/usePageAnimation.js';
import { useAnimateSelectTab } from '@/composables/useAnimateSelectTab.js';

import TheFooter from '@/components/TheFooter.vue';
import NextSection from '@/components/NextSection.vue';
import TheTitle from '@/components/zevtera/TheTitle.vue';
import ExploreAnother from '@/components/ExploreAnother.vue';

const props = defineProps({
	sidebarOpen: {
		type: Boolean,
		required: true,
	},
});

const route = useRoute();

const sidebarOpenRef = toRef(props, 'sidebarOpen');
usePageAnimation(sidebarOpenRef);
useAnimateSelectTab(sidebarOpenRef);

const sessionId = inject('sessionId');

const content = ref(null);
const easeOfUse = ref(null);

const wellTolarated = ref(null);
const wellTolaratedDetails = ref(null);
const wellTolaratedActive = ref(false);

const gutFlora = ref(null);
const gutFloraDetails = ref(null);
const gutFloraActive = ref(false);

const brand = computed(() => route.meta.brand);

onMounted(() => {
	gsap.set(wellTolaratedDetails.value, { opacity: 0, display: 'none' });
	gsap.set(gutFloraDetails.value, { opacity: 0 });
	gsap.set('.bacterial-swap-card', { opacity: 0 });
	gsap.set('.clinical-swap-card', { opacity: 0 });
});

const animateSection = ({ activeRef, detailsRef, mainRef, swapCardSelector, fadeElements, slideDivisor }) => {
	const tl = gsap.timeline();
	const isActive = activeRef.value;

	// Common animation properties
	const opacityConfig = {
		opacity: isActive ? 1 : 0,
		pointerEvents: 'none',
		duration: 0.7,
		ease: 'power2.inOut',
	};

	const detailsOpacityConfig = {
		opacity: isActive ? 0 : 1,
		display: isActive ? 'none' : 'flex',
		duration: 0.7,
		ease: 'power2.inOut',
	};

	const slideConfig = {
		x: isActive ? 0 : -window.innerWidth / slideDivisor,
		duration: 0.9,
		ease: 'power2.inOut',
		onComplete: () => {
			activeRef.value = !isActive;
		},
	};

	if (isActive) {
		// Animate slide first, then opacity
		tl.to(detailsRef.value, detailsOpacityConfig)
			.to(mainRef.value, slideConfig, '-=0.5')
			.to(swapCardSelector, { opacity: 0, duration: 0.7, ease: 'power2.inOut' }, '-=0.5')
			.to(fadeElements, opacityConfig, '-=0.5')
			.to(fadeElements, { pointerEvents: 'auto' });
	} else {
		// Animate opacity first, then slide
		tl.to(fadeElements, opacityConfig)
			.to(mainRef.value, slideConfig, '-=0.5')
			.to(detailsRef.value, detailsOpacityConfig, '-=0.5')
			.to(swapCardSelector, { opacity: 1, duration: 0.7, ease: 'power2.inOut' }, '-=0.5');
	}

	return tl;
};

// Now you can create the specific animations by passing the right parameters:

const animateWellTolarated = () => {
	if (!wellTolaratedActive.value) {
		// trackAction('Safety', 'well-tolerated', sessionId.value, brand.value);
	}

	return animateSection({
		activeRef: wellTolaratedActive,
		detailsRef: wellTolaratedDetails,
		mainRef: wellTolarated,
		swapCardSelector: '.bacterial-swap-card',
		fadeElements: [gutFlora.value, easeOfUse.value, content.value],
		slideDivisor: 0,
	});
};

const animateGutFlora = () => {
	if (!gutFloraActive.value) {
		// trackAction('Safety', 'gut-flora', sessionId.value, brand.value);
	}

	return animateSection({
		activeRef: gutFloraActive,
		detailsRef: gutFloraDetails,
		mainRef: gutFlora,
		swapCardSelector: '.clinical-swap-card',
		fadeElements: [wellTolarated.value, easeOfUse.value, content.value],
		slideDivisor: props.sidebarOpen ? 3.95 : 3.6,
	});
};
</script>
