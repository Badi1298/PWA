import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		tailwindcss(),
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
			manifest: {
				name: 'My PWA App',
				short_name: 'PWA App',
				description: 'My Vue3 PWA using Vite',
				theme_color: '#ffffff',
				icons: [
					{
						src: '/pwa-192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/pwa-512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
			},
			workbox: {
				runtimeCaching: [
					{
						urlPattern: /^https:\/\/my-api\.com\//,
						handler: 'NetworkFirst',
						options: {
							cacheName: 'api-cache',
							expiration: {
								maxEntries: 50,
								maxAgeSeconds: 86400, // 1 day
							},
						},
					},
					{
						urlPattern: new RegExp('/.*\\.(png|jpg|jpeg|svg|gif|woff2|woff|ttf|eot)$'),
						handler: 'CacheFirst',
						options: {
							cacheName: 'static-assets-cache',
							expiration: {
								maxEntries: 200,
								maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
							},
						},
					},
				],
			},
		}),
	],
	resolve: {
		alias: {
			'@': '/src',
		},
	},
});
