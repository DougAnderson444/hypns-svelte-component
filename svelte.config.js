// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		paths: {
			// change below to your repo name
			base: process.env.NODE_ENV === 'development' ? '' : '/hypns-svelte-component'
		},
		prerender: { default: true }
	}
};

export default config;
