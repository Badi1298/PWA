<template>
	<main class="flex justify-between bg-zevtera">
		<img
			src="/zevtera-mabelio-logo.png"
			alt="Exblifep Logo"
			class="absolute top-9 right-[18px] z-50 mt-4 ml-4 w-[190px] h-auto"
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
	</main>
</template>

<script setup>
import { ref } from 'vue';

import Sidebar from '@/components/zevtera/Sidebar.vue';

const sidebarOpen = ref(true);
</script>
