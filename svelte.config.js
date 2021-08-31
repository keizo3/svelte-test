import preprocess from 'svelte-preprocess';
import static from '@sveltejs/adapter-static';
import node from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		// adapter: static({
		// 	// default options are shown
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: null
		// })
		adapter: node({
			// default options are shown
			out: 'build',
			precompress: false,
			env: {
				host: '0.0.0.0',
				port: '3000'
			}
		})
	}
};

export default config;
