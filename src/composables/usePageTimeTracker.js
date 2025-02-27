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
		const data = JSON.parse(localStorage.getItem('pageMetrics')) || { brands: {} };

		if (!brand.value) return data; // Don't modify data if brand is not set

		if (!data.brands[brand.value]) {
			data.brands[brand.value] = { sessions: {} };
		}

		if (!data.brands[brand.value].sessions[sessionId.value]) {
			data.brands[brand.value].sessions[sessionId.value] = { journey: [], aggregate: {}, total: 0 };
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

	const stopTracking = (navigatedFromBy) => {
		if (!brand.value || !startTime.value) return; // Skip if brand is invalid

		const timeSpent = (performance.now() - startTime.value) / 1000; // Convert to seconds
		console.log(`User spent ${timeSpent} seconds on ${route.name}`);

		const data = getStoredData();

		// Append to journey
		data.brands[brand.value].sessions[sessionId.value].journey.push({
			page: route.name,
			navigatedFromBy,
			timeSpent,
			timestamp: format(new Date(), 'pp'),
		});

		// Update aggregate time spent on the page
		data.brands[brand.value].sessions[sessionId.value].aggregate[route.name] =
			(data.brands[brand.value].sessions[sessionId.value].aggregate[route.name] || 0) + timeSpent;

		// Update total time spent on the brand
		data.brands[brand.value].sessions[sessionId.value].total += timeSpent;

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
		const navigatedFromBy = to.query.navigatedFromBy || '';

		stopTracking(navigatedFromBy);
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
