<template>
	<div
		ref="topTab"
		class="grid grid-cols-1 grid-rows-1 min-h-screen relative z-10"
	>
		<!-- <div class="flex flex-col gap-y-6 absolute top-1/2 left-[52px]">
			<img
				src="/active-dot.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
			/>
			<img
				src="/inactive-dot.png"
				alt="Active Dot"
				class="h-5 w-5 cursor-pointer"
				@click="emit('goToBottomTab')"
			/>
		</div> -->
		<img
			src="/back-button-white.png"
			alt="Back Button"
			class="absolute top-1/2 -translate-y-1/2 h-[84px] cursor-pointer"
			@click="router.push({ name: 'exblifep-safety', query: { navigatedAwayBy: 'back-button' } })"
			@touchstart.prevent="router.push({ name: 'exblifep-safety', query: { navigatedAwayBy: 'back-button' } })"
		/>
		<div class="page-content flex flex-col justify-end font-effra relative pb-12">
			<div class="relative flex justify-between mr-12">
				<div>
					<the-h1 class="text-electric-blue leading-tight">
						Dosing and administration of EXBLIFEP<span class="font-extrabold">®</span><sup class="text-[50%] font-extrabold -top-[0.8em]">5</sup>
					</the-h1>
					<img
						src="/lime-green-border.png"
						alt="Lime Green Border"
						class="h-1.5 w-[240px] my-2.5"
					/>
				</div>
				<div class="select-tab absolute top-1/2 -translate-y-1/2 flex gap-x-3.5 items-center text-cool-grey text-2xl font-medium">
					<img
						src="/touch.png"
						alt="Touch to select tab"
						class="w-[50px] h-[50px]"
					/>
					<the-h2 class="text-cool-grey text-2xl">Touch a step to continue</the-h2>
				</div>
			</div>
			<div class="flex pt-10 gap-x-7">
				<div
					class="flex"
					@click="activateTab(tabs[0])"
					@touchstart.prevent="activateTab(tabs[0])"
				>
					<!-- Image Section -->
					<img
						ref="fullDosingButton"
						src="/dosing-button-full.png"
						alt="Dosing Full"
						class="absolute h-[500px] w-auto z-20 cursor-pointer hidden opacity-0"
					/>
					<img
						ref="emptyDosingButton"
						src="/dosing-button-empty.png"
						alt="Dosing Empty"
						class="absolute h-[500px] w-auto z-20 cursor-pointer hidden opacity-0"
					/>

					<!-- Expanding Content Section -->
					<div
						:class="[tabs[0].class, tabs[0].active ? 'w-[640px]' : 'w-0 opacity-0']"
						class="flex justify-center flex-col bg-white pl-[60px] rounded-r-[30px] z-10 overflow-hidden max-h-[496px] ml-[61px]"
					>
						<div
							class="opacity-0"
							:class="`${tabs[0].class}-content`"
						>
							<div class="flex items-end">
								<img
									src="/dosing-bottle.png"
									alt="Dosing Bottle"
									class="w-[106px] h-[106px]"
								/>
								<the-h1 class="text-electric-blue font-semibold -translate-y-4 -translate-x-3">
									{{ tabs[0].name }}
								</the-h1>
							</div>
							<div
								class="flex flex-col pl-10 text-base text-cool-grey"
								v-html="tabs[0].details"
							></div>
						</div>
					</div>
				</div>
				<div
					class="flex"
					@click="activateTab(tabs[1])"
					@touchstart.prevent="activateTab(tabs[1])"
				>
					<!-- Image Section -->
					<img
						ref="fullAdministrationButton"
						src="/administration-button-full.png"
						alt="Dosing Full"
						class="absolute h-[500px] w-auto z-20 cursor-pointer hidden opacity-0"
					/>
					<img
						ref="emptyAdministrationButton"
						src="/administration-button-empty.png"
						alt="Dosing Empty"
						class="absolute h-[500px] w-auto z-20 cursor-pointer"
					/>

					<!-- Expanding Content Section -->
					<div
						:class="[tabs[1].class, tabs[1].active ? 'w-[640px]' : 'w-0 opacity-0']"
						class="flex justify-center flex-col bg-white pl-[60px] rounded-r-[30px] z-10 overflow-hidden max-h-[496px] ml-[61px]"
					>
						<div
							class="opacity-0"
							:class="`${tabs[1].class}-content`"
						>
							<div class="flex items-end mt-5">
								<img
									src="/iv-bag-blue.png"
									alt="Dosing Bottle"
									class="w-[106px] h-[106px]"
								/>
								<the-h1 class="font-semibold text-electric-blue -translate-y-4 -translate-x-3">
									{{ tabs[1].name }}
								</the-h1>
							</div>
							<div
								class="relative flex flex-col pl-10 text-base text-cool-grey"
								v-html="tabs[1].details"
							></div>
							<div class="bg-[#00EAFF] shadow-dark py-3.5 flex items-center mt-7 relative z-10 border-2 border-white pr-5 max-w-[478px] ml-10">
								<div class="pl-5 pr-1.5 py-1 border-r-1 border-[#002470]">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="30"
										height="25"
										viewBox="0 0 30 25"
										fill="none"
									>
										<g clip-path="url(#clip0_360_21688)">
											<path
												d="M0.752441 0.459595L12.667 12.3901L0.752441 24.3206H7.37167L19.2863 12.3901L15.9767 9.07898L7.37167 0.459595H0.752441Z"
												fill="#002470"
											/>
											<path
												d="M10.9561 0.321533L22.8707 12.252L10.9561 24.1788H17.5753L29.4899 12.252L26.1803 8.93719L17.5753 0.321533H10.9561Z"
												fill="#002470"
											/>
										</g>
										<defs>
											<clipPath id="clip0_360_21688">
												<rect
													width="28.7377"
													height="23.9991"
													fill="white"
													transform="translate(0.75293 0.321899)"
												/>
											</clipPath>
										</defs>
									</svg>
								</div>
								<h2 class="pl-1.5 text-sm font-bold text-[#002470] max-h-[28px] leading-tight">
									For more information on the reconstitution/dilution of EXBLIFEP®, speak to a member of the ADVANZ PHARMA team.
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<footer class="relative pb-6">
			<the-footnotes class="footer mb-4 font-effra text-cool-grey"
				>EXBLIFEP® is not indicated in children as the safety and efficacy in children below 18 years of age has not yet been established. No data are
				available.<sup>5</sup>
			</the-footnotes>
			<div class="flex justify-between items-center mr-12">
				<ExploreAnother />
				<RouterLink :to="{ name: 'exblifep-summary', query: { navigatedAwayBy: 'next-section-button' } }">
					<next-section class="bg-electric-blue" />
				</RouterLink>
			</div>
			<!-- <button
				class="absolute left-1/2 -translate-x-1/2 bottom-0"
				@click="emit('goToBottomTab')"
			>
				<img
					src="/down-button-blue.png"
					alt="Down Button"
					class="w-[140px] h-[50px] cursor-pointer"
				/>
			</button> -->
		</footer>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, computed, inject, onMounted, watch } from 'vue';

import { gsap } from 'gsap';

// import { trackAction } from '@/utils/analytics.js';

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
	scrollIntoView: {
		type: Boolean,
		required: true,
	},
});

const emit = defineEmits(['goToBottomTab']);

const route = useRoute();
const router = useRouter();

const sessionId = inject('sessionId');

const fullDosingButton = ref(null);
const emptyDosingButton = ref(null);
const fullAdministrationButton = ref(null);
const emptyAdministrationButton = ref(null);

const tabs = ref([
	{
		id: 1,
		class: 'dosing',
		name: 'Dosing',
		action: 'dosing',
		details: `
			<p class="pr-20 leading-tight">
				The recommended dose for patients with normal renal<br /> function is
				<span class="text-dark-blue font-bold">2.0 g/0.5 g cefepime/enmetazobactam.<sup class="text-[60%] font-extrabold -top-[0.6em]">5</sup></span>
			</p>
			<p class="pr-20 mt-3.5 leading-tight">
				The usual duration of treatment is 7 to 10 days. In patients with bacteraemia treatment up to 14 days may be required.<sup class="text-[60%] font-bold -top-[0.6em]"
					>5</sup
				>
			</p>
			<div class="bg-[#00EAFF] shadow-dark py-3.5 flex items-center mt-11 relative z-10 border-2 border-white pr-5 translate-y-5 max-w-[478px]">
				<div class="pl-5 pr-1.5 py-1 border-r-1 border-[#002470]">
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 25" fill="none">
                        <g clip-path="url(#clip0_360_21688)">
                            <path d="M0.752441 0.459595L12.667 12.3901L0.752441 24.3206H7.37167L19.2863 12.3901L15.9767 9.07898L7.37167 0.459595H0.752441Z" fill="#002470"/>
                            <path d="M10.9561 0.321533L22.8707 12.252L10.9561 24.1788H17.5753L29.4899 12.252L26.1803 8.93719L17.5753 0.321533H10.9561Z" fill="#002470"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_360_21688">
                            <rect width="28.7377" height="23.9991" fill="white" transform="translate(0.75293 0.321899)"/>
                            </clipPath>
                        </defs>
                    </svg>
				</div>
				<h2 class="pl-1.5 text-sm font-bold text-[#002470] max-h-[28px] leading-tight">
					For more information on the reconstitution/dilution of EXBLIFEP®, speak to a member of the ADVANZ PHARMA team.
				</h2>
			</div>
		`,
		activeImageSrc: '/dosing-button-full.png',
		inactiveImageSrc: '/dosing-button-empty.png',
		active: true,
	},
	{
		id: 2,
		class: 'administration',
		name: 'Method of administration',
		action: 'administration',
		details: `
			<p>Administered as:<sup class="text-[60%] -top-[0.6em]">5</sup></p>
			<ul class="flex flex-col gap-y-0.5 list-disc pl-5 ml-3">
				<li class="text-dark-blue font-bold">
					2-hour <span class="text-cool-grey font-normal">IV infusion for cUTI, includixng AP</span>
				</li>
				<li class="text-dark-blue font-bold">
					4-hour <span class="text-cool-grey font-normal">IV infusion for HAP/VAP</span>
				</li>
				<li class="text-dark-blue font-bold">
					4-hour <span class="text-cool-grey font-normal">IV infusion for patients with eGFR > 150 mL/min</span>
				</li>
			</ul>
			<p class="mt-1.5">
				Every <span class="text-dark-blue font-bold">8 hours<sup class="text-[60%] font-extrabold -top-[0.55em]">5</sup></span>
			</p>
		`,
		activeImageSrc: '/administration-button-full.png',
		inactiveImageSrc: '/administration-button-empty.png',
		active: false,
	},
]);

const topTab = ref(null);
const activeTab = ref(1);

const brand = computed(() => route.meta.brand);

watch(
	() => props.scrollIntoView,
	(value) => {
		if (value) {
			topTab.value.scrollIntoView({ behavior: 'smooth' });
		}
	}
);

watch(tabs.value, (newValue) => {
	if (newValue[0].active) {
		gsap.to(fullDosingButton.value, { opacity: 1, display: 'block', duration: 0.3 });
		gsap.to(emptyDosingButton.value, { opacity: 0, display: 'none', duration: 0.3 });
	} else {
		gsap.to(fullDosingButton.value, { opacity: 0, display: 'none', duration: 0.3 });
		gsap.to(emptyDosingButton.value, { opacity: 1, display: 'block', duration: 0.3 });
	}

	if (newValue[1].active) {
		gsap.to(fullAdministrationButton.value, { opacity: 1, display: 'block', duration: 0.3 });
		gsap.to(emptyAdministrationButton.value, { opacity: 0, display: 'none', duration: 0.3 });
	} else {
		gsap.to(fullAdministrationButton.value, { opacity: 0, display: 'none', duration: 0.3 });
		gsap.to(emptyAdministrationButton.value, { opacity: 1, display: 'block', duration: 0.3 });
	}
});

watch(
	() => props.sidebarOpen,
	(value) => {
		if (value) {
			const tl = gsap.timeline();

			tl.to('.select-tab', {
				opacity: 0,
				duration: 0.3,
			})
				.set(
					'.select-tab',
					{
						right: '0px',
					},
					'+=0.2'
				)
				.to('.select-tab', {
					opacity: 1,
				});
		} else {
			const tl = gsap.timeline();

			tl.to('.select-tab', {
				opacity: 0,
				duration: 0.3,
			})
				.set(
					'.select-tab',
					{
						right: 250,
					},
					'+=0.2'
				)
				.to('.select-tab', {
					opacity: 1,
				});
		}
	}
);

onMounted(() => {
	gsap.set('.dosing', { width: 640, opacity: 1, borderRight: '2px solid #1F17F6', borderTop: '2px solid #1F17F6', borderBottom: '2px solid #1F17F6' });
	gsap.set('.administration', { width: 20, opacity: 0, borderRight: '2px solid #1F17F6', borderTop: '2px solid #1F17F6', borderBottom: '2px solid #1F17F6' });
	gsap.set('.dosing-content', { opacity: 1 });
	gsap.set(fullDosingButton.value, { opacity: 1, display: 'block' });

	if (props.sidebarOpen) {
		gsap.set('.select-tab', { right: '0' });
	} else {
		gsap.set('.select-tab', { right: 250 });
	}
});

const activateTab = async (newTab) => {
	if (newTab.id === activeTab.value) return; // Do nothing if already active

	const previousTab = tabs.value.find((tab) => tab.id === activeTab.value);
	const nextTab = newTab;

	// trackAction('Dosing and administration', newTab.action, sessionId.value, brand.value);

	previousTab.active = false;

	let tl = gsap.timeline();

	tl.to(`.${previousTab.class}-content`, {
		opacity: 0,
		duration: 0.2,
	})
		.to(`.${previousTab.class}`, {
			opacity: 0,
			width: 20,
			duration: 0.5,
		})
		.to(
			`.${nextTab.class}`,
			{
				opacity: 1,
				width: 640,
				borderRight: '2px solid #1F17F6',
				borderTop: '2px solid #1F17F6',
				borderBottom: '2px solid #1F17F6',
				duration: 0.5,
			},
			'-=0.3'
		)
		.to(`.${nextTab.class}-content`, {
			opacity: 1,
			duration: 0.2,
			onComplete: () => {
				activeTab.value = newTab.id;
				nextTab.active = true;
			},
		});
};
</script>
