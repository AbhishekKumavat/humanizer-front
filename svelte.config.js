import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		prerender: {
			crawl: true,
			handleMissingId: 'warn',
			entries: ['*']
		},
		adapter: adapter({
			fallback: 'index.html',
			pages: 'build',
			assets: 'build'
		})
	}
};

export default config;
