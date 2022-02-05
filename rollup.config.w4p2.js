import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

let formats = ['iife', 'es', 'cjs'];
let banner = `/*!
 * w4p2
 * ${pkg.name} v${pkg.version}
 * ${pkg.description}
 * Copyright ${new Date().getFullYear()}
 * ${pkg.license} license
 */`;

export default formats.map(function (format) {
	return {
		input: 'js/w4p2.js',
		output: [
			{
				file: `js/w4p2-bundle${format === 'iife' ? '' : `.${format}`}.js`,
				format: format,
				name: 'w4p2',
				banner: banner,
				exports: 'auto'
			},
			{
				file: `js/w4p2-bundle${format === 'iife' ? '' : `.${format}`}.min.js`,
				format: format,
				name: 'w4p2',
				banner: banner,
				plugins: [terser()],
				exports: 'auto'
			}
		]
	};
});


