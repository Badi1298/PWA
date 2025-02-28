import { createMemoryHistory, createRouter } from 'vue-router';

const routes = [
	{
		path: '/',
		component: () => import('@/pages/Home.vue'),
		name: 'home',
		meta: { brand: 'NONE' },
	},
	{
		path: '/exblifep',
		component: () => import('@/pages/exblifep/ExblifepLayout.vue'),
		name: 'exblifep-index',
		children: [
			{
				path: '',
				component: () => import('@/pages/exblifep/Exblifep.vue'),
				name: 'exblifep-home',
				meta: { brand: 'EXBLIFEP' },
			},
			{
				path: '/efficacy',
				component: () => import('@/pages/exblifep/Efficacy.vue'),
				name: 'efficacy',
				meta: { brand: 'EXBLIFEP' },
			},
			{
				path: '/safety',
				component: () => import('@/pages/exblifep/Safety.vue'),
				name: 'safety',
				meta: { brand: 'EXBLIFEP' },
			},
			{
				path: '/dosing',
				component: () => import('@/pages/exblifep/Dosing.vue'),
				name: 'dosing',
				meta: { brand: 'EXBLIFEP' },
			},
			{
				path: '/summary',
				component: () => import('@/pages/exblifep/Summary.vue'),
				name: 'summary',
				meta: { brand: 'EXBLIFEP' },
			},
		],
	},
	{
		path: '/brand2',
		component: () => import('@/pages/brand2/Brand2.vue'),
		name: 'brand2',
		meta: { brand: 'BRAND2' },
	},
	{
		path: '/screensaver',
		component: () => import('@/pages/Screensaver.vue'),
		name: 'screensaver',
		meta: { brand: 'NONE' },
	},
];

const router = createRouter({
	history: createMemoryHistory(),
	routes,
});

export default router;
