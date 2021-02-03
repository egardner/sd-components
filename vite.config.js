const vue2 = require( 'vite-plugin-vue2' );
const fs = require( 'fs' )
const path = require( 'path' )

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
	build: {
		// See https://vitejs.dev/guide/build.html#library-mode
		lib: {
			entry: path.resolve(__dirname, 'src/main.js'),
			name: 'SDComponents'
		},

		minify: false,

		rollupOptions: {
			external: ['vue'],

			output: {
				globals: {
					vue: 'Vue'
				}
			}
		}
	},
	plugins: [
		vue2.createVuePlugin(),

		// Explicitly emit an index.html file for demo purposes
		// {
		// 	name: 'emit-index',
		// 	generateBundle() {
		// 		this.emitFile({
		// 			type: 'asset',
		// 			fileName: 'index.html',
		// 			source: fs.readFileSync(
		// 				path.resolve(__dirname, 'index.dist.html'),
		// 				'utf-8'
		// 			)
		// 		})
		// 	}
        // }
	]
};
