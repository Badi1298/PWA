<template>
	<main class="flex bg-textured">
		<img
			src="/exblifep-logo-no-triangle.png"
			alt="Exblifep Logo"
			class="absolute top-8 right-[21px] z-50 w-[183px]"
		/>
		<div class="flex flex-1 flex-col h-screen">
			<router-view v-slot="{ Component }">
				<transition
					name="fade"
					mode="out-in"
				>
					<component
						:is="Component"
						:sidebarOpen="sidebarOpen"
					/>
				</transition>
			</router-view>
		</div>
		<Sidebar v-model:open="sidebarOpen" />
		<transition
			name="fade"
			mode="out-in"
		>
			<img
				v-if="route.name === 'exblifep-home'"
				src="/background-green-circle.png"
				alt="Green Circle"
				:class="{ 'opacity-0': route.name === 'exblifep-home' }"
				class="absolute w-[628px] bottom-0 right-0 -z-10"
			/>
			<img
				v-else-if="route.name === 'exblifep-dosing'"
				src="/background-circle-blue.png"
				alt=" Background Circle Blue"
				class="absolute w-[628px] bottom-0 right-0 -z-10"
			/>
			<img
				v-else-if="route.name === 'exblifep-safety'"
				src="/background-circle-grey.png"
				alt="Background Circle Yellow"
				class="absolute w-[628px] bottom-0 right-0 -z-10"
			/>
			<img
				v-else
				src="/background-green-circle.png"
				alt="Green Circle"
				class="absolute w-[628px] bottom-0 right-0 -z-10"
			/>
		</transition>
	</main>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import Sidebar from '@/components/exblifep/Sidebar.vue';
import { onMounted } from 'vue';

const route = useRoute();

const sidebarOpen = ref(true);
</script>
