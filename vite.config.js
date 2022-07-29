import { sveltekit } from '@sveltejs/kit/vite';
import path, { dirname } from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@douganderson444/hypns-svelte-component': path.resolve('src/lib')
		}
	},
	server: {
		fs: {
			strict: false
		}
	},
	// workaround for common-js issues of default export
	// https://vitejs.dev/guide/dep-pre-bundling.html#monorepos-and-linked-dependencies
	build: {
		commonjsOptions: {
			include: [/immortal-db/, /node_modules/]
		}
	},
	optimizeDeps: {
		include: ['immortal-db']
	}
};

export default config;
