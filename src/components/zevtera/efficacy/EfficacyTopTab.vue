<template>
	<div
		ref="topTab"
		class="grid grid-cols-1 grid-rows-1 min-h-screen relative z-10"
	>
		<div class="flex flex-col gap-y-3 absolute top-1/2 -translate-y-1/2 left-[22px]">
			<img
				src="/active-dot-purple.png"
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
		<div class="page-content flex flex-col font-effra pr-14">
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
					<span class="text-1 max-h-[18px]">Touch a step to continue</span>
					<span class="text-2 max-h-[18px]">Select a tab</span>
				</div>
			</div>

			<section class="relative flex-1 content-end pb-6">
				<div class="flex flex-col gap-y-6">
					<img
						src="/zevtera-mabelio-logo.png"
						alt="Zevevtra Mabelio Logo"
						class="w-[290px]"
					/>
					<the-h1 class="!text-[40px] !leading-[42px] text-charcoal">More for your difficult-to-treat patients*</the-h1>
				</div>
				<div class="grid grid-cols-3 min-h-[380px] gap-x-[18px] mt-6">
					<div class="relative bg-primary-green flex flex-col justify-end pb-12 rounded-[20px] overflow-hidden card">
						<chart-icon
							width="172"
							height="171"
							color="#005522"
						/>
						<h3 class="text-[30px] leading-[32px] font-bold font-stag-sans text-white px-[18px] mt-6">
							Demonstrated<br />
							efficacy<sup>5,6</sup>
						</h3>
					</div>
					<div
						ref="bacterialActivity"
						class="relative flex flex-col justify-between bg-primary-green rounded-[20px] max-w-[420px] cursor-pointer card z-50"
						@click="animateBacterialActivity"
						@touchstart.prevent="animateBacterialActivity"
					>
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
							src="/arrow-down-dark-green.png"
							alt="Arrow Down"
							class="h-[114px] w-fit mt-[38px]"
						/>
						<div class="flex flex-col pb-11">
							<h2 class="text-[30px] leading-[32px] text-white font-stag-sans font-bold pl-[18px]">Fast bactericidal activity</h2>
							<p class="text-[15.6px] leading-[19px] text-white mt-1.5 font-uni-grotesk pl-[18px]">
								Exhibits rapid in vitro bactericidal activity in Gram-positive and Gram-negative pathogens<sup class="text-[50%] -top-[0.9em]"
									>5</sup
								>
							</p>
						</div>
					</div>
					<div
						ref="clinicalEfficacy"
						class="relative flex flex-col justify-between bg-primary-green rounded-[20px] overflow-hidden max-w-[420px] cursor-pointer card z-50"
						@click="animateClinicalEfficacy"
						@touchstart.prevent="animateClinicalEfficacy"
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
							src="/up-arrows-dark-green.png"
							alt="Arrow Down"
							class="w-[140px] mt-[42px] ml-7"
						/>
						<div class="flex flex-col pb-11 pl-[18px]">
							<h2 class="text-[30px] leading-[32px] text-white font-stag-sans font-bold">Clinical efficacy from Days 3-4</h2>
							<p class="text-[15.6px] leading-[19px] text-white mt-1.5 font-uni-grotesk pr-4">
								Early improvement at D3 in patients with CAP and at D4 in patients with HAP (CE)<sup class="text-[50%] -top-[0.9em]">6</sup>
							</p>
						</div>
					</div>
				</div>

				<div
					ref="bacterialActivityDetails"
					class="flex flex-col absolute top-1/2 -translate-y-1/2 bg-white rounded-[22px] overflow-hidden detail w-[865px] pt-[25px] px-[30px] pb-[55px] gap-y-9"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="41"
						height="40"
						viewBox="0 0 41 40"
						fill="none"
						class="absolute right-6 top-6"
						@click="animateBacterialActivity"
						@touchstart.prevent="animateBacterialActivity"
					>
						<ellipse
							cx="20.7902"
							cy="20"
							rx="20.0929"
							ry="20"
							fill="#982384"
						/>
						<path
							d="M13.4447 28.5713L12.126 27.2526L19.3787 19.9999L12.126 12.7471L13.4447 11.4285L20.6974 18.6812L27.9502 11.4285L29.2688 12.7471L22.0161 19.9999L29.2688 27.2526L27.9502 28.5713L20.6974 21.3186L13.4447 28.5713Z"
							fill="white"
						/>
					</svg>
					<div class="flex flex-col gap-y-[33px]">
						<the-h1 class="text-charcoal !leading-[26px] pr-3">
							ZEVTERA®/ MABELIO® exhibits rapid in vitro bactericidal<br />
							activity in Gram-positive and Gram-negative pathogens<sup>5</sup>
						</the-h1>
						<div class="flex justify-center items-end mr-5 gap-x-28">
							<div class="flex flex-col justify-between h-[284px]">
								<h3 class="text-[11px] font-uni-grotesk italic text-center">Staphylococcus aureus*</h3>
								<img
									src="/bacterial-activity-sa.png"
									alt="Bacterial Activity"
									class="h-[260px] w-auto"
								/>
							</div>
							<div class="flex flex-col justify-between h-[284px]">
								<h3 class="text-[11px] font-uni-grotesk italic text-center">Escherichia coli*</h3>
								<img
									src="/bacterial-activity-ec.png"
									alt="Bacterial Activity"
									class="h-[247px] w-auto"
								/>
							</div>
						</div>
					</div>

					<footer class="text-[10px] leading-[12px] text-[#555] opacity-80 font-uni-grotesk">
						Adapted from Hebeisen P et al. 2001<sup class="-top-[0.6em]">5</sup><br /><br />
						*Overnight cultures of <span class="italic">E. coli</span> and MSSA/MRSA test strain were grown in 30 mL of Mueller-Hinton broth and
						diluted into fresh medium to yield an inoculum of 10<sup class="-top-[0.6em]">6</sup> CFU/mL or higher. Drug<br />
						was added either with the inoculumor at intervals of 1.5 hours (early log phase) and 3 hours (log phase) after its addition. Drug
						concentrations of 2 times the MIC were used. Ten-microlitre<br />
						aliquots of appropriate dilutions were plated on Mueller-Hinton agar (MHA), and colonies were counted after 24 hours of incubation. To
						check if resistant clones had been selected, the MICs<br />
						were determined for those cultures that showed growth after 24 hours. Bactericidal activity was defined by a ≥ 3-log<sub>10</sub>
						decrease in the number of CFU/mL within 24 hours.<sup class="-top-[0.6em]">5</sup><br />
						CFU, colony-forming unit; MIC, minimum inhibitory concentration; MRSA, Methicillin-resistant <span class="italic">S. aureus</span>;
						MSSA, Methicillin-susceptible <span class="italic">S. aureus</span>.
					</footer>
				</div>
				<div
					ref="clinicalEfficacyDetails"
					class="flex flex-col min-h-[750px] pl-[276px] pt-[74px] absolute top-1/2 -translate-y-1/2 left-[190px] right-[60px] bg-white z-10 rounded-[30px] overflow-hidden shadow-zevtera-efficacy-card"
				>
					<div class="flex flex-col w-[863px]">
						<div class="grid grid-cols-[1fr_1fr] gap-x-2">
							<button
								class="flex items-center justify-center py-3 rounded-t-[20px] text-2xl transition-colors duration-500 font-uni-grotesk"
								:class="[activeClinicalEfficayTab === clinicalEfficacyTabs.DAY_3 ? 'bg-primary-purple text-white font-bold' : 'bg-[#E4E4E4]']"
								@click="activateDay3"
								@touchstart.prevent="activateDay3"
							>
								<span class="max-h-[26px]">Day 3</span>
							</button>
							<button
								class="flex items-center justify-center py-3 rounded-t-[20px] text-2xl transition-colors duration-500 font-uni-grotesk"
								:class="[activeClinicalEfficayTab === clinicalEfficacyTabs.DAY_4 ? 'bg-primary-purple text-white font-bold' : 'bg-[#E4E4E4]']"
								@click="activateDay4"
								@touchstart.prevent="activateDay4"
							>
								<span class="max-h-[26px]">Day 4</span>
							</button>
						</div>
						<div
							v-if="activeClinicalEfficayTab === clinicalEfficacyTabs.DAY_3"
							class="w-[863px] h-[464px] border-2 flex flex-col items-center pt-8 border-primary-purple"
						>
							<h3 class="text-2xl font-stag-sans font-bold">Early improvement at Day 3 in patients with CAP by risk factors (CE)<sup>6</sup></h3>
							<VLazyImage
								:src="ChartA"
								alt="Chart A"
								class="w-[803px] h-auto object-cover"
							/>
							<span class="text-[10px] mt-5 font-uni-grotesk text-[#555]">Adapted from Scheeren T et al. 2019.6</span>
						</div>
						<div
							v-if="activeClinicalEfficayTab === clinicalEfficacyTabs.DAY_4"
							class="w-[863px] h-[464px] border-2 flex flex-col items-center pt-8 border-primary-purple"
						>
							<h3 class="text-2xl font-stag-sans font-bold text-center">
								Early improvement at Day 4 in patients with HAP<br />
								(excluding VAP) by risk factor (CE)<sup>6</sup>
							</h3>
							<VLazyImage
								:src="ChartB"
								alt="Chart A"
								class="w-[803px] h-auto object-cover -mt-8"
							/>
							<span class="text-[10px] mt-5 font-uni-grotesk text-[#555]">Adapted from Scheeren T et al. 2019.6</span>
						</div>
					</div>
					<footer class="text-[10px] text-[#555] mt-4 mr-12 font-uni-grotesk">
						<span class="font-bold">STUDY DESIGN</span>: Post hoc analysis of data from two Phase III studies to evaluate early improvement outcomes
						in subgroups of high-risk patients treated with ceftobiprole, compared with the respective active-control therapies(ceftriaxone ±
						linezolid in CAP and ceftazidime plus linezolid in HAP). The HAP study was a multicentre, international, double-blind, non-inferiority
						study of adult patients with HAP undertaken at 157 centres between April 2005 and May 2007. Key inclusion criteria comprised: a clinical
						diagnosis of pneumonia after ≥72 h stay in hospital or a chronic care facility; clinical signs and symptoms of pneumonia; fever or
						leucocytosis / leukopenia; new orpersistent radiographic infiltrates; and an Acute Physiology and Chronic Health Evaluation II (APACHE
						II) score between 8 and 25.<sup>6</sup><br /><br />
						CAP, Community-acquired pneumonia; CE, clinically evaluable; CI, confidence interval; COPD, chronic obstructive pulmonary disease; HAP,
						hospital-acquired pneumonia; CE, clinically evaluable;<br />
						TOC, test ofcure.
					</footer>
				</div>
			</section>
		</div>

		<footer class="relative pb-[30px]">
			<the-footnotes class="footer mb-[42px] text-[#555555] opacity-70"
				>*Patients' groups who are severely ill or at high risk of poor outcomes</the-footnotes
			>
			<explore-another />
			<button
				class="absolute left-1/2 bottom-0"
				@click="emit('goToBottomTab')"
				@touchstart.prevent="emit('goToBottomTab')"
			>
				<img
					src="/page-vertical-down-purple.png"
					alt="Down Button"
					class="w-[84px] h-[30px] cursor-pointer"
				/>
			</button>
		</footer>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, toRef, computed, inject, watch, onMounted } from 'vue';

import { gsap } from 'gsap';

import VLazyImage from 'v-lazy-image';

// import { trackAction } from '@/utils/analytics.js';
import { useAnimateSelectTab } from '@/composables/useAnimateSelectTab.js';

import ChartA from '/zevtera-efficacy-day-3.png';
import ChartB from '/zevtera-efficacy-day-4.png';

import ChartIcon from '@/icons/ChartIcon.vue';

import TheH1 from '@/components/zevtera/TheH1.vue';
import TheBody from '@/components/zevtera/TheBody.vue';
import TheBodyLg from '@/components/zevtera/TheBodyLg.vue';
import ExploreAnother from '@/components/ExploreAnother.vue';
import TheFootnotes from '@/components/zevtera/TheFootnotes.vue';

const clinicalEfficacyTabs = Object.freeze({
	DAY_3: 1,
	DAY_4: 2,
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

const bacterialActivity = ref(null);
const bacterialActivityDetails = ref(null);
const bacterialActivityActive = ref(false);

const clinicalEfficacy = ref(null);
const clinicalEfficacyDetails = ref(null);
const clinicalEfficacyActive = ref(false);

const activeClinicalEfficayTab = ref(clinicalEfficacyTabs.DAY_3);

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
	gsap.set(bacterialActivityDetails.value, { scale: 0 });
	gsap.set(clinicalEfficacyDetails.value, { scale: 0 });
	gsap.set('.bacterial-swap-card', { opacity: 0 });
	gsap.set('.clinical-swap-card', { opacity: 0 });
	gsap.set('.text-2', { display: 'none' });
});

const animateSection = ({ activeRef, detailsRef }) => {
	const tl = gsap.timeline({ onComplete: () => (activeRef.value = !activeRef.value) });
	const isActive = activeRef.value;

	const detailsScaleConfig = {
		scale: isActive ? 0 : 1,
		zIndex: isActive ? 10 : 999,
		duration: 0.7,
		ease: 'power2.inOut',
	};

	if (isActive) {
		tl.to(detailsRef.value, detailsScaleConfig);
	} else {
		tl.to(detailsRef.value, detailsScaleConfig);
	}

	return tl;
};

const animateBacterialActivity = () => {
	if (!bacterialActivityActive.value) {
		// trackAction('Efficacy', 'bactericidal-activity', sessionId.value, brand.value);
	}

	return animateSection({
		activeRef: bacterialActivityActive,
		detailsRef: bacterialActivityDetails,
	});
};

const animateClinicalEfficacy = () => {
	if (!clinicalEfficacyActive.value) {
		// trackAction('Efficacy', 'clinical-efficacy', sessionId.value, brand.value);

		const tl = gsap.timeline();
		tl.to('.select-tab', { opacity: 0, duration: 0.7, ease: 'power2.inOut' })
			.to('.text-1', { autoAlpha: 0, duration: 0.1, onComplete: () => gsap.set('.text-1', { display: 'none' }) })
			.to('.text-2', { autoAlpha: 1, duration: 0.1, onComplete: () => gsap.set('.text-2', { display: 'block' }) })
			.to('.select-tab', { opacity: 1, duration: 0.3, ease: 'power2.inOut' });
	} else {
		const tl = gsap.timeline();
		tl.to('.select-tab', { opacity: 0, duration: 0.7, ease: 'power2.inOut' })
			.to('.text-2', { autoAlpha: 0, duration: 0.1, onComplete: () => gsap.set('.text-2', { display: 'none' }) })
			.to('.text-1', { autoAlpha: 1, duration: 0.1, onComplete: () => gsap.set('.text-1', { display: 'block' }) })
			.to('.select-tab', { opacity: 1, duration: 0.3, ease: 'power2.inOut' });
	}

	return animateSection({
		activeRef: clinicalEfficacyActive,
		detailsRef: clinicalEfficacyDetails,
		mainRef: clinicalEfficacy,
	});
};

const activateDay3 = () => {
	activeClinicalEfficayTab.value = clinicalEfficacyTabs.DAY_3;
	// trackAction('Efficacy', 'clinical-efficacy-day-3', sessionId.value, brand.value);
};

const activateDay4 = () => {
	activeClinicalEfficayTab.value = clinicalEfficacyTabs.DAY_4;
	// trackAction('Efficacy', 'clinical-efficacy-day-4', sessionId.value, brand.value);
};
</script>

<style scoped>
.card {
	box-shadow: -31.877px 74.164px 22.77px 0px rgba(0, 0, 0, 0), -20.167px 47.491px 20.818px 0px rgba(0, 0, 0, 0.01),
		-11.71px 26.673px 17.565px 0px rgba(0, 0, 0, 0.05), -5.204px 11.71px 13.011px 0px rgba(0, 0, 0, 0.09), -1.301px 3.253px 7.156px 0px rgba(0, 0, 0, 0.1);
}

.detail {
	box-shadow: -28.6px 254.467px 71.867px 0px rgba(0, 0, 0, 0), -18.333px 162.8px 65.267px 0px rgba(0, 0, 0, 0.01),
		-10.267px 91.667px 55px 0px rgba(0, 0, 0, 0.05), -4.4px 41.067px 41.067px 0px rgba(0, 0, 0, 0.09), -1.467px 10.267px 22.733px 0px rgba(0, 0, 0, 0.1);
}
</style>
