<template>
	<div class="flex">
		<div class="flex items-center absolute z-20 top-[112px] w-[225px]">
			<div
				class="relative transform w-full"
				@click="toggleSidebar"
				@touchstart.prevent="toggleSidebar"
			>
				<button class="absolute top-1/2 -translate-y-1/2 -left-[15px] bg-[#ECECEC] text-white p-[6.5px] rounded-md">
					<SimpleChevronRightIcon
						v-if="open"
						class="w-[17px] h-[17px]"
					/>
					<SimpleChevronLeftIcon
						v-else
						class="w-[17px] h-[17px]"
					/>
				</button>
				<div
					ref="sidebarLine"
					class="bg-[#CDCDCD] absolute top-1/2 -translate-y-1/2 left-4 h-px w-[208px] -z-10"
				></div>
			</div>
		</div>
		<aside
			ref="sidebar"
			class="z-10 flex flex-col bg-white relative shadow-treatment font-effra sidebar"
		>
			<div
				ref="sidebarContent"
				class="relative flex flex-col flex-1 justify-end mb-[60px]"
			>
				<ul class="flex flex-col gap-y-[30px] px-4">
					<RouterLink :to="{ name: 'exblifep-home', query: { navigatedAwayBy: 'sidebar' } }">
						<li
							class="list__item relative px-3 py-5 min-h-[50px] text-[15px] rounded-md flex gap-x-2.5 items-center"
							:class="{
								'bg-[#EFEFEF] font-bold text-black': isActive('/exblifep'),
								'text-[#969696]': !isActive('/exblifep'),
							}"
						>
							<div class="list-image absolute top-1/2 -translate-y-1/2">
								<img
									v-if="isActive('/exblifep')"
									src="/home-sidebar-full.png"
									alt="Home Icon"
									class="w-[30px] h-[30px]"
								/>
								<img
									v-else
									src="/home-sidebar.png"
									alt="Home Icon"
									class="w-[30px] h-[30px]"
								/>
							</div>
							<p class="sidebar-text absolute left-[52px] top-1/2 -translate-y-1/2 leading-tight max-h-[15px]">Home</p>
						</li>
					</RouterLink>
					<RouterLink :to="{ name: 'exblifep-efficacy', query: { navigatedAwayBy: 'sidebar' } }">
						<li
							class="list__item relative px-3 py-5 min-h-[50px] text-[15px] rounded-md flex gap-x-2.5 items-center"
							:class="{
								'bg-[#EFEFEF] font-bold text-black': isActive('/exblifep/efficacy'),
								'text-[#969696]': !isActive('/exblifep/efficacy'),
							}"
						>
							<div class="list-image absolute top-1/2 -translate-y-1/2">
								<img
									v-if="isActive('/exblifep/efficacy')"
									src="/chart-sidebar-full.png"
									alt="Home Icon"
									class="w-[30px] h-[30px]"
								/>
								<img
									v-else
									src="/chart-sidebar.png"
									alt="Home Icon"
									class="w-[30px] h-[30px]"
								/>
							</div>
							<p class="sidebar-text absolute left-[52px] top-1/2 -translate-y-1/2 leading-tight max-h-[15px]">Efficacy</p>
						</li>
					</RouterLink>
					<RouterLink :to="{ name: 'exblifep-safety', query: { navigatedAwayBy: 'sidebar' } }">
						<li
							class="list__item relative px-3 py-5 min-h-[50px] text-[15px] rounded-md flex gap-x-2.5 items-center"
							:class="{
								'bg-[#EFEFEF] font-bold text-black': isActive('/exblifep/safety'),
								'text-[#969696]': !isActive('/exblifep/safety'),
							}"
						>
							<div class="list-image absolute top-1/2 -translate-y-1/2">
								<img
									v-if="isActive('/exblifep/safety')"
									src="/shield-sidebar-full.png"
									alt="Home Icon"
									class="w-[30px] h-[30px]"
								/>
								<img
									v-else
									src="/shield-sidebar.png"
									alt="Home Icon"
									class="w-[30px] h-[30px]"
								/>
							</div>
							<p class="sidebar-text absolute left-[52px] top-1/2 -translate-y-1/2 leading-tight max-h-[15px]">Safety</p>
						</li>
					</RouterLink>
					<RouterLink :to="{ name: 'exblifep-dosing', query: { navigatedAwayBy: 'sidebar' } }">
						<li
							class="list__item relative px-3 py-5 min-h-[50px] text-[15px] rounded-md flex gap-x-2.5 items-center"
							:class="{
								'bg-[#EFEFEF] font-bold text-black': isActive('/exblifep/dosing'),
								'text-[#969696]': !isActive('/exblifep/dosing'),
							}"
						>
							<div class="list-image absolute top-1/2 -translate-y-1/2">
								<img
									v-if="isActive('/exblifep/dosing')"
									src="/bottle-sidebar-full.png"
									alt="Home Icon"
									class="w-[30px] h-[30px]"
								/>
								<img
									v-else
									src="/bottle-sidebar.png"
									alt="Home Icon"
									class="w-[30px] h-[30px]"
								/>
							</div>
							<p class="sidebar-text absolute left-[52px] top-1/2 -translate-y-1/2 leading-tight max-h-[30px]">
								Dosing and<br />
								administration
							</p>
						</li>
					</RouterLink>
					<RouterLink :to="{ name: 'exblifep-summary', query: { navigatedAwayBy: 'sidebar' } }">
						<li
							class="list__item relative px-3 py-5 min-h-[50px] text-[15px] rounded-md flex gap-x-2.5 items-center"
							:class="{
								'bg-[#EFEFEF] font-bold text-black': isActive('/exblifep/summary'),
								'text-[#969696]': !isActive('/exblifep/summary'),
							}"
						>
							<div class="list-image absolute top-1/2 -translate-y-1/2">
								<img
									v-if="isActive('/exblifep/summary')"
									src="/summary-sidebar-full.png"
									alt="Home Icon"
									class="w-[30px] h-[30px]"
								/>
								<img
									v-else
									src="/summary-sidebar.png"
									alt="Home Icon"
									class="w-[30px] h-[30px]"
								/>
							</div>
							<p class="sidebar-text absolute text-[15px] leading-tight max-h-[15px] left-[52px] top-1/2 -translate-y-1/2">Summary</p>
						</li>
					</RouterLink>
				</ul>
			</div>

			<div class="flex flex-col min-h-[230px]">
				<div class="flex flex-col w-full px-8 gap-y-1 border-y border-[#CDCDCD] min-h-36 pt-4">
					<div
						class="flex items-center gap-x-3 min-h-[50px]"
						@click="router.push({ name: 'exblifep-references', query: { navigatedAwayBy: 'sidebar' } })"
						@touchstart.prevent="router.push({ name: 'exblifep-references', query: { navigatedAwayBy: 'sidebar' } })"
					>
						<img
							src="/book.png"
							alt="Book Icon"
							class="w-[30px] h-auto justify-self-center"
						/>
						<p
							v-if="open"
							class="text-[15px] leading-tight max-h-[15px] text-[#969696]"
						>
							References
						</p>
					</div>
					<div
						class="flex items-center gap-x-3 min-h-[50px]"
						@click="router.push({ name: 'exblifep-prescribing-information', query: { navigatedAwayBy: 'sidebar' } })"
						@touchstart.prevent="router.push({ name: 'exblifep-prescribing-information', query: { navigatedAwayBy: 'sidebar' } })"
					>
						<img
							src="/pi.png"
							alt="PI Icon"
							class="w-[30px] h-auto justify-self-center"
						/>
						<p
							v-if="open"
							class="text-[15px] leading-tight max-h-[30px] text-[#969696]"
						>
							Prescribing<br />
							information
						</p>
					</div>
				</div>
				<img
					src="/advanz-logo.png"
					alt="Advanz Logo"
					class="w-[118px] h-auto m-auto"
				/>
			</div>
		</aside>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

import { gsap } from 'gsap';

import SimpleChevronLeftIcon from '../../icons/SimpleChevronLeftIcon.vue';
import SimpleChevronRightIcon from '../../icons/SimpleChevronRightIcon.vue';

const props = defineProps({
	open: {
		type: Boolean,
		required: true,
	},
});

const emit = defineEmits(['update:open']);

const route = useRoute();
const router = useRouter();

const referencesPopupOpen = ref(false);
const prescribingPopupOpen = ref(false);

const sidebar = ref(null);
const sidebarLine = ref(null);

onMounted(() => {
	gsap.set('.sidebar-text', {
		opacity: 1,
		display: 'block',
	});
	gsap.set(sidebar.value, {
		width: 225,
	});
});

const isActive = (currentRoute) => {
	return currentRoute === route.path;
};

const toggleSidebar = async () => {
	const tl = gsap.timeline();

	if (props.open) {
		// Collapse sidebar timeline
		tl.to(
			'.sidebar-text',
			{
				autoAlpha: 0,
				duration: 0.3,
			},
			0
		)
			.to(
				'.list-image',
				{
					left: 9,
					duration: 0.1,
				},
				0.2
			)
			.to(
				sidebarLine.value,
				{
					opacity: 0,
					duration: 0.5,
				},
				0
			)
			.to(
				sidebar.value,
				{
					width: 80,
					clipPath: 'inset(15% 0 0 0)',
					ease: 'power4.inOut',
					duration: 0.5,
				},
				0
			);

		emit('update:open', false);
	} else {
		// Expand sidebar timeline
		tl.to(
			sidebar.value,
			{
				width: 225,
				clipPath: 'inset(0% 0 0 0)',
				ease: 'power4.inOut',
				duration: 0.4,
				onComplete: () => {
					gsap.to(sidebar.value, {
						clipPath: 'none',
					});
				},
			},
			0
		)
			.to(
				'.list-image',
				{
					left: 12,
					duration: 0.4,
				},
				0.1
			)
			.to(
				'.sidebar-text',
				{
					autoAlpha: 1,
					duration: 0.3,
				},
				0.2
			)
			.to(
				sidebarLine.value,
				{
					opacity: 1,
					duration: 0.3,
				},
				0.2
			);

		emit('update:open', true);
	}
};
</script>

<style scoped>
.sidebar {
	will-change: width, clip-path;
}
</style>
