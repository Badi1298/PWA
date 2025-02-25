import { createApp } from 'vue';
import App from './App.vue';
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
	onNeedRefresh() {
		if (confirm('New content available. Reload?')) {
			location.reload();
		}
	},
	onOfflineReady() {
		console.log('App is ready to work offline');
	},
});

createApp(App).mount('#app');
