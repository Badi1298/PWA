import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { format } from 'date-fns';

export function usePageTimeTracker() {
	const route = useRoute();
	const router = useRouter();
	const brand = ref(route.meta.brand || null); // Allow null initially
	const sessionId = ref(localStorage.getItem('sessionId') || crypto.randomUUID());

	localStorage.setItem('sessionId', sessionId.value);
	const startTime = ref(null);

	const getStoredData = () => {
		const data = JSON.parse(localStorage.getItem('pageMetrics')) || { sessions: {} };

		if (!brand.value) return data; // Don't modify data if brand is not set

		if (!data.sessions[sessionId.value]) {
			data.sessions[sessionId.value] = { brands: {} };
		}

		if (!data.sessions[sessionId.value].brands[brand.value]) {
			data.sessions[sessionId.value].brands[brand.value] = { journey: [], aggregate: {}, total: 0 };
		}

		return data;
	};

	const saveData = (data) => {
		localStorage.setItem('pageMetrics', JSON.stringify(data));
	};

	const startTracking = () => {
		if (!brand.value) return; // Don't start tracking if brand is still null
		startTime.value = performance.now();
	};

	const stopTracking = (navigatedAwayBy) => {
		if (!brand.value || !startTime.value) return; // Skip if brand is invalid

		const timeSpent = (performance.now() - startTime.value) / 1000; // Convert to seconds

		const data = getStoredData();

		// Append to journey
		data.sessions[sessionId.value].brands[brand.value].journey.push({
			page: route.name,
			navigatedAwayBy,
			timeSpent,
			timestamp: format(new Date(), 'pp'),
		});

		// Update aggregate time spent on the page
		data.sessions[sessionId.value].brands[brand.value].aggregate[route.name] =
			(data.sessions[sessionId.value].brands[brand.value].aggregate[route.name] || 0) + timeSpent;

		// Update total time spent on the brand
		data.sessions[sessionId.value].brands[brand.value].total += timeSpent;

		saveData(data);
		startTime.value = null;
	};

	// Start tracking when component mounts (only if brand is set)
	onMounted(() => {
		if (brand.value) startTracking();
	});

	// Stop tracking when component unmounts
	onUnmounted(() => {
		stopTracking();
	});

	// Handle route changes
	router.beforeEach((to, from, next) => {
		const navigatedAwayBy = to.query.navigatedAwayBy || '';

		stopTracking(navigatedAwayBy);
		if (from.name === 'screensaver') {
			startNewSession();
		}
		next();
	});

	router.afterEach(() => {
		startTracking();
	});

	const startNewSession = () => {
		sessionId.value = crypto.randomUUID();
		localStorage.setItem('sessionId', sessionId.value);
		console.log('New session started with ID:', sessionId.value);
	};

	// Watch for changes in `route.meta.brand`
	watch(
		() => route.meta.brand,
		(newBrand) => {
			if (newBrand) {
				brand.value = newBrand;
				startTracking(); // Start tracking as soon as brand becomes available
			}
		},
		{ immediate: true } // Run immediately in case brand is already set
	);

	return { startTracking, stopTracking };
}
