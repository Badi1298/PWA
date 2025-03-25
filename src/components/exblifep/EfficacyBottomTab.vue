<template>
	<div
		ref="bottomTab"
		class="grid grid-cols-1 grid-rows-1 min-h-screen relative z-10 pb-6"
	>
		<img
			src="/page-vertical-up-blue.png"
			alt="Vertical Up Blue"
			class="absolute top-0 left-1/2 w-[84px] h-[30px] cursor-pointer z-50"
			@click="emit('goToTopTab')"
			@touchstart.prevent="emit('goToTopTab')"
		/>
		<div class="flex flex-col gap-y-6 absolute top-1/2 -translate-y-1/2 left-[22px]">
			<img
				src="/inactive-dot.png"
				alt="Active Dot"
				class="w-2.5 h-2.5 cursor-pointer"
				@click="emit('goToTopTab')"
				@touchstart.prevent="emit('goToTopTab')"
			/>
			<img
				src="/active-dot.png"
				alt="Active Dot"
				class="w-2.5 h-2.5 cursor-pointer"
			/>
		</div>
		<div class="page-content flex flex-col justify-center font-effra relative pr-14">
			<div class="flex justify-between mr-12 items-center">
				<div>
					<the-h1 class="text-electric-blue">
						EXBLIFEP<span class="font-extrabold">®</span> demonstrated high intrapulmonary penetration<br />
						in healthy volunteers, supporting its use in the treatment of HAP/VAP<sup class="text-[50%] font-extrabold -top-[0.8em]">6</sup>
					</the-h1>
					<img
						src="/lime-green-border.png"
						alt="Lime Green Border"
						class="h-1.5 w-[300px] my-2.5"
					/>
				</div>
			</div>

			<section class="flex flex-col gap-x-12 mt-16">
				<div class="flex justify-between">
					<div class="relative bg-white border-2 border-electric-blue rounded-[20px] w-[250px] px-4 pb-8 pt-16">
						<img
							src="/water-drop.png"
							alt="Water Drop"
							class="absolute -top-[45px] -left-[3px] min-w-[90px] max-w-[90px]"
						/>
						<the-h2 class="text-cool-grey max-h-[95px] !font-normal">
							Cefepime and enmetazobactam have demonstrated similar concentration-time profiles in plasma and ELF.<sup
								class="text-[60%] -top-[0.6em] font-semibold"
								>6</sup
							>
						</the-h2>
					</div>
					<div class="relative bg-white border-2 border-electric-blue rounded-[20px] w-[250px] px-4 pb-8 pt-16">
						<img
							src="/24-hours.png"
							alt="Water Drop"
							class="absolute -top-[45px] -left-[3px] min-w-[90px] max-w-[90px]"
						/>
						<the-h2 class="text-cool-grey max-h-[95px] !font-normal">
							Concentrations of both agents are detectable in plasma for<br />
							24 hours after last administration.<sup class="text-[60%] -top-[0.6em] font-semibold">6</sup>
						</the-h2>
					</div>
					<div class="relative bg-white border-2 border-electric-blue rounded-[20px] w-[300px] px-4 pb-8 pt-16">
						<img
							src="/lungs.png"
							alt="Water Drop"
							class="absolute -top-[45px] -left-[3px] min-w-[90px] max-w-[90px]"
						/>
						<the-h2 class="text-cool-grey max-h-[95px] !font-normal">
							Cefepime has high lung tissue penetration compared with other cephalosporins, and is recommended in European clinical guidelines for
							the management of HAP/VAP.<sup class="text-[60%] -top-[0.6em] font-semibold">7,8</sup>
						</the-h2>
					</div>
				</div>

				<div class="mt-[50px]">
					<h4 class="text-xl max-h-[20px] font-bold text-[#002470] leading-tight">
						In an intrapulmonary PK study of 20 healthy volunteers:*<sup class="text-[60%] font-extrabold -top-[0.5em]">6</sup>
					</h4>
					<the-h2 class="font-semibold text-cool-grey mt-2.5">
						Concentration-time of cefepime and enmetazobactam in plasma and epithelial lining fluid were similar
					</the-h2>
					<the-body-lg class="text-cool-grey mt-1.5">
						Percentage of partitioning of total drug concentrations between plasma and epithelial lining fluid:
					</the-body-lg>
					<ul class="list-disc pl-5 mt-1 ml-0.5 text-cool-grey">
						<li>Cefepime (mean [SD]): 60.59% (±28.62%)</li>
						<li>Enmetazobactam: 53.03% (±21.05%)</li>
					</ul>
					<the-body-lg class="text-cool-grey mt-1">
						Using the ratio of the ELF-to-plasma fAUCs over the entire 8 hour dosing interval, biodistribution coefficients of 46%<br />
						for enmetazobactam and 46.8% for cefepime were obtained.<sup class="text-[65%] font-semibold">9</sup>
					</the-body-lg>
				</div>
			</section>
		</div>

		<footer class="relative">
			<the-footnotes class="footer mb-4 font-effra text-cool-grey">
				ELF, epithelial lining fluid; fAUC, area under the curve for unbound drug; HAP/VAP, hospital-acquired pneumonia/ventilator associated pneumonia;
				IV, intravenous; MIC, minimum inhibitory concentration;<br />
				PK, pharmacokinetics; q8h: every 8 hours; SD, standard deviation.<br />
				*The intrapulmonary PK of 2.0 g-1.0 g of EXBLIFEP® IV q8h was assessed in the plasma and epithelial lining fluid obtained by bronchoalveolar
				lavage in 20 healthy volunteers. In this study, EXBLIFEP® was<br />
				well tolerated. There were no serious adverse events. None of the treatment-emergent adverse events led to the discontinuation of study drugs.
				All adverse events spontaneously resolved without<br />
				sequelae.<sup>6†</sup>Consideration should be given to official guidance on the appropriate use of antibacterial agents.
			</the-footnotes>
			<div class="flex justify-between items-center mt-4 mr-12">
				<ExploreAnother />
				<RouterLink :to="{ name: 'exblifep-safety', query: { navigatedAwayBy: 'next-section-button' } }">
					<next-section class="bg-electric-blue" />
				</RouterLink>
			</div>
		</footer>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue';

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

const emit = defineEmits(['goToTopTab']);

const bottomTab = ref(null);

watch(
	() => props.scrollIntoView,
	(value) => {
		if (value) {
			bottomTab.value.scrollIntoView({ behavior: 'smooth' });
		}
	}
);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
