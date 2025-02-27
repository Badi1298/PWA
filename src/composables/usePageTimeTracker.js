import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export function usePageTimeTracker() {
	const route = useRoute();
	const router = useRouter();
	const startTime = ref(null);

	const startTracking = () => {
		startTime.value = performance.now();
	};

	const stopTracking = () => {
		if (startTime.value) {
			const timeSpent = (performance.now() - startTime.value) / 1000; // in seconds

			// Store in localStorage (or send to backend later)
			const metrics = JSON.parse(localStorage.getItem('pageMetrics')) || [];
			metrics.push({ page: route.path, timeSpent, timestamp: Date.now() });
			localStorage.setItem('pageMetrics', JSON.stringify(metrics));

			startTime.value = null;
		}
	};

	// Start tracking when component mounts
	onMounted(() => {
		startTracking();
	});

	// Stop tracking when component unmounts (i.e., user navigates away)
	onUnmounted(() => {
		stopTracking();
	});

	// Handle route changes within the same component (e.g., dynamic params)
	router.beforeEach((to, from, next) => {
		stopTracking();
		next();
	});

	router.afterEach(() => {
		startTracking();
	});

	return { startTracking, stopTracking };
}
