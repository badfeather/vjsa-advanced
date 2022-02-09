import pkg from '../package.json';
import { terser } from 'rollup-plugin-terser';

// Enable/disable minification
let minify = true;

// The file banner
let banner = `/*!
 * Project: w5p2
 * Package: ${pkg.name}
 * Version: ${pkg.version}
 * Description: ${pkg.description}
 * Copyright:  ${new Date().getFullYear()}
 * License: ${pkg.license}
 */`;

// The files to bundle
let files = ['home.js', 'place.js'];

export default files.map(function (file) {
	return {
		input: `w5p2/src/${file}`,
		output: {
			file: `w5p2/${file}`,
			format: 'iife',
			banner: banner,
			name: file.replace('.js', ''),
			plugins: minify ? [terser()] : null,
			sourcemap: minify
		}
	};
});
