import { useRoute } from 'vue-router';
import { computed, onMounted, watch } from 'vue';

import { gsap } from 'gsap';

export function usePageAnimation(sidebarOpen) {
	const route = useRoute();

	const isZevteraRoute = computed(() => route.path.includes('/zevtera'));

	const animate = (value) => {
		const marginLeft = value ? 55 : 114;
		const duration = value ? 0.4 : 0.5;

		gsap.to(['.page-content', '.footer'], {
			marginLeft,
			duration,
			ease: 'power4.inOut',
		});
	};

	onMounted(() => {
		const marginLeft = sidebarOpen.value ? (isZevteraRoute.value ? 52 : 55) : 114;
		gsap.set(['.page-content', '.footer'], { marginLeft });
	});

	watch(sidebarOpen, (value) => {
		animate(value);
	});
}
