import { terser } from 'rollup-plugin-terser';
export default {
	input: 'js/w4p1.js',
	output: [
		{
			file: 'js/w4p1-bundle.js',
			format: 'iife'
		},
		{
			file: 'js/w4p1-bundle.min.js',
			format: 'iife',
			plugins: [terser()]
		}
	]
};

