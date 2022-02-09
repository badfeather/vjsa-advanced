import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

let formats = ['iife', 'es', 'cjs'];
let banner = `/*!
 * Project: w4p2
 * Package: ${pkg.name}
 * Version: ${pkg.version}
 * Description: ${pkg.description}
 * Copyright:  ${new Date().getFullYear()}
 * License: ${pkg.license}
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


