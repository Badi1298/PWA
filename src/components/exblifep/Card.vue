<template>
	<div class="flex max-w-[424px] justify-between bg-white shadow-exblifep-card items-center rounded-[10px] px-8 pt-9 pb-6 font-effra">
		<div class="flex flex-col gap-y-2">
			<h3 class="font-medium text-xl">{{ title }}</h3>
			<p
				class="text-sm"
				v-html="subtitle"
			></p>

			<button
				class="py-3 text-sm mt-2.5 w-[150px] cursor-pointers"
				:class="buttonClass"
				@click="discoverMore"
			>
				Discover More
			</button>
		</div>
		<slot></slot>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
	title: {
		type: String,
		default: '',
	},
	subtitle: {
		type: String,
		default: '',
	},
	buttonClass: {
		type: String,
		default: '',
	},
	discoverMorePath: {
		type: String,
		default: '',
	},
});

const emit = defineEmits(['click']);

const router = useRouter();

const discoverMore = () => {
	router.push({
		path: props.discoverMorePath,
		state: { navigatedAwayBy: 'discover-more-button' },
		query: { navigatedAwayBy: 'discover-more-button' },
	});
};
</script>
