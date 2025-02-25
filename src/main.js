import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
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

createApp(App).use(router).mount('#app');
