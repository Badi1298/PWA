<template>
	<div class="relative w-screen h-screen overflow-hidden">
		<!-- Top page (will slide away) -->
		<div
			ref="overlayScreen"
			class="absolute top-0 left-0 w-full h-full bg-home bg-[#195C68] z-10 text-white flex flex-col items-center justify-center transition-none will-change-transform"
		>
			<div class="text-white font-futura">
				<section class="absolute top-[18%] left-[26.4%] flex flex-col gap-y-[100px]">
					<div ref="text1">
						<h2 class="text-[32px] font-semibold leading-[1.2]">
							We offer a complimentary range of treatments extending<br />
							across the antimicrobial landscape<sup>1-3</sup>
							<span class="text-[40px]"> –</span>
						</h2>
						<p class="text-[24px]">including resistant pathogens outlined in WHO's Bacterial Priority Pathogen list <sup>4</sup></p>
					</div>
					<div
						ref="text2"
						class="ml-[100px]"
					>
						<h2 class="text-[32px] font-semibold leading-[1.2]">
							Putting humanity first - we strive to remove treatment<br />
							barriers and reduce the burden of care
							<span class="text-[40px]"> –</span>
						</h2>
						<p class="text-[24px]">forging a smoother path to recovery for patients today, and safeguarding the future</p>
					</div>
					<div
						ref="text3"
						class="ml-[200px]"
					>
						<h2 class="text-[32px] font-semibold leading-[1.2]">
							Forging a different path by providing effective<br />
							treatments with predictable outcomes<sup>5-7</sup>
							<span class="text-[40px]"> –</span>
						</h2>
						<p class="text-[24px]">even in difficult-to-treat patients who currently have limited treatment options <sup>8-10</sup></p>
					</div>
					<button
						ref="button"
						class="flex items-center justify-end w-[264px] gap-x-7 py-2.5 px-[22px] bg-primary-green text-white text-2xl ml-72"
						@click="startEraserAnimation"
						@touchstart.prevent="startEraserAnimation"
					>
						<span>Get started</span>
						<img
							src="/chevron-right-white.png"
							alt="Chevron Right"
							class="w-[50px]"
						/>
					</button>
				</section>

				<footer class="absolute bottom-4 left-[41.5%] text-[10px] leading-tight">
					<p>
						1. EXBLIFEP® Summary of Product Characteristics 2024. 2. XYDALBA® Summary of Product Characteristics 2024. 3. ZEVTERA® Summary of<br />
						Product Characteristics 2024. 4. World Health Organization. WHO Bacterial Priority Pathogens List 2024. Available at:
						<span class="underline">https://www.who.int/<br />publications/i/item/9789240093461.</span> Accessed March 2025. 5. Kaye KS
						<span class="italic">et al. JAMA </span>2022;328:1304-1314. 6. McCarthy MW <span class="italic">et al. Infect Dis Ther</span><br />
						2020;9:53-67. 7. Giacobbe D <span class="italic">et al. ERATCK </span>2019;17(9):689-698. 8. Boyd SE
						<span class="italic">et al. Antimicrob Agents Chemother </span>2022;66:e0021622. 9. Belley A
						<span class="italic"
							>et<br />
							al. J Glob Antimicrob Resist </span
						>2021;25:93-101. 10. D'Angelo RG <span class="italic">et al. Expert Opin Pharmacother </span>2016;17:953-967.
					</p>
					<p class="mt-1.5">GL/CEFE/PM/0051 | March 2025</p>
				</footer>
				<img
					src="/advanz-logo-bg-white.png"
					alt="Advanz Logo"
					class="absolute bottom-0 right-0 w-[392px]"
				/>
			</div>
		</div>
		<div class="logo will-change-transform transition-none absolute left-0 top-0 z-50">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="891"
				height="1080"
				viewBox="0 0 891 1080"
				fill="none"
			>
				<path
					d="M475.2 1079.6L386.1 872.55H564.3L430.65 547.193L0 1612V1109.17L445.5 0L891 1079.6H475.2Z"
					fill="#94C11F"
				/>
			</svg>
		</div>
		<div class="eraser absolute top-0 left-0 w-screen h-screen bg-white z-20"></div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

import gsap from 'gsap';

const router = useRouter();

const text1 = ref(null);
const text2 = ref(null);
const text3 = ref(null);
const button = ref(null);

// Reference to the top page element
const overlayScreen = ref(null);

onMounted(() => {
	gsap.set(overlayScreen.value, {
		x: 0,
		display: 'block',
		clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)',
	});
	gsap.set('.logo', {
		x: -200,
	});
	gsap.set('.eraser', {
		x: -1920,
	});

	gsap.fromTo([text1.value, text2.value, text3.value, button.value], { opacity: 0 }, { opacity: 1, stagger: 0.5 }).delay(0.5);
});

// Function to animate the top page sliding away
const startEraserAnimation = () => {
	const tl = gsap.timeline({
		onComplete: () => {
			overlayScreen.value.style.display = 'none';
			router.push('/home');
		},
	});

	// Create a seamless movement by using a single continuous motion
	tl.to('.logo', {
		duration: 0.5,
		x: -450,
	})
		.to('.logo', {
			duration: 0.5,
			x: 0,
			ease: 'power4.in',
		})
		.to(
			overlayScreen.value,
			{
				duration: 0.5,
				clipPath: 'polygon(23.2% 0, 100% 0, 100% 100%, 1% 100%)',
				ease: 'power4.in',
			},
			'<'
		)
		.to('.logo', {
			duration: 0.5,
			x: 1475,
		})
		.to(
			overlayScreen.value,
			{
				duration: 0.5,
				clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 78% 100%)',
			},
			'<'
		)
		.to(
			'.logo',
			{
				x: 1920,
				duration: 0.5,
			},
			'-=0.25'
		)
		.to(
			overlayScreen.value,
			{
				duration: 0.15,
				clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
				autoAlpha: 0,
			},
			'<'
		);
};
</script>

<style scoped>
.slide-button {
	padding: 0.75rem 1.5rem;
	background-color: #4a5568;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 1rem;
}
</style>
