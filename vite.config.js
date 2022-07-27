import { sveltekit } from '@sveltejs/kit/vite';
import path, { dirname } from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@douganderson444/hypns-svelte-component-kit': path.resolve('src/lib')
		}
	},
	server: {
		fs: {
			strict: false
		}
	}
};

export default config;
