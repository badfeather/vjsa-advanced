let convertMetricWeight = (function () {
	let g = 1,
		mcg = g * 1000000,
		mg = g * 1000,
		cg = g * 100,
		dg = g * 10,
		dag = g / 10,
		hg = g / 100,
		kg = g / 1000,
		t = g / 1000000,
		fromGrams = {g, mcg, mg, cg, dg, dag, hg, kg, t};

	/**
	 * Convert number in unit to grams
	 * @param {Number} n The starting weight
	 * @param {Number} u The starting unit
	 */
	function nToGrams (n, u) {
		return n / fromGrams[u];
	}

	/**
	 * Convert number in grams to unit
	 * @param {Number} n The starting weight in grams
	 * @param {Number} u The desired unit
	 */
	function nFromGrams (n, u) {
		return n * fromGrams[u];
	}

	/**
	 * Convert grams to micrograms
	 * @param {Number} n The starting weight in grams
	 */
	function g2mcg (n) {
		return nFromGrams(n, 'mcg');
	}

	/**
	 * Convert grams to milligrams
	 * @param {Number} n The starting weight in grams
	 */
	function g2mg (n) {
		return nFromGrams(n, 'mg');
	}

	/**
	 * Convert grams to centigrams
	 * @param {Number} n The starting weight in grams
	 */
	function g2cg (n) {
		return nFromGrams(n, 'cg');
	}

	/**
	 * Convert grams to decigrams
	 * @param {Number} n The starting weight in grams
	 */
	function g2dg (n) {
		return nFromGrams(n, 'dg');
	}

	/**
	 * Convert grams to decagrams
	 * @param {Number} n The starting weight in grams
	 */
	function g2dag (n) {
		return nFromGrams(n, 'dag');
	}

	/**
	 * Convert grams to hectograms
	 * @param {Number} n The starting weight in grams
	 */
	function g2hg (n) {
		return nFromGrams(n, 'hg');
	}

	/**
	 * Convert grams to kilograms
	 * @param {Number} n The starting weight in grams
	 */
	function g2kg (n) {
		return nFromGrams(n, 'kg');
	}

	/**
	 * Convert grams to tonnes
	 * @param {Number} n The starting weight in grams
	 */
	function g2t (n) {
		return nFromGrams(n, 't');
	}
//

	/**
	 * Convert micrograms to grams
	 * @param {Number} n The starting weight in micrograms
	 */
	function mcg2g (n) {
		return nToGrams(n, 'mcg');
	}

	/**
	 * Convert micrograms to milligrams
	 * @param {Number} n The starting weight in micrograms
	 */
	function mcg2mg (n) {
		return nFromGrams(mcg2g(n), 'mcg');
	}

	/**
	 * Convert micrograms to centigrams
	 * @param {Number} n The starting weight in micrograms
	 */
	function mcg2cg (n) {
		return nFromGrams(mcg2g(n), 'cg');
	}

	/**
	 * Convert micrograms to decigrams
	 * @param {Number} n The starting weight in micrograms
	 */
	function mcg2dg (n) {
		return nFromGrams(mcg2g(n), 'dg');
	}

	/**
	 * Convert micrograms to decagrams
	 * @param {Number} n The starting weight in micrograms
	 */
	function mcg2dag (n) {
		return nFromGrams(mcg2g(n), 'dag');
	}

	/**
	 * Convert micrograms to hectograms
	 * @param {Number} n The starting weight in micrograms
	 */
	function mcg2hg (n) {
		return nFromGrams(mcg2g(n), 'hg');
	}

	/**
	 * Convert micrograms to kilograms
	 * @param {Number} n The starting weight in micrograms
	 */
	function mcg2kg (n) {
		return nFromGrams(mcg2g(n), 'kg');
	}

	/**
	 * Convert micrograms to tonnes
	 * @param {Number} n The starting weight in micrograms
	 */
	function mcg2t (n) {
		return nFromGrams(mcg2g(n), 't');
	}

	/**
	 * Convert milligrams to grams
	 * @param {Number} n The starting weight in milligrams
	 */
	function mg2g (n) {
		return nToGrams(n, 'mg');
	}

	/**
	 * Convert milligrams to micrograms
	 * @param {Number} n The starting weight in milligrams
	 */
	function mg2mcg (n) {
		return nFromGrams(mg2g(n), 'mcg');
	}

	/**
	 * Convert milligrams to milligrams
	 * @param {Number} n The starting weight in milligrams
	 */
	function mg2mg (n) {
		return nFromGrams(mg2g(n), 'mg');
	}

	/**
	 * Convert milligrams to centigrams
	 * @param {Number} n The starting weight in milligrams
	 */
	function mg2cg (n) {
		return nFromGrams(mg2g(n), 'cg');
	}

	/**
	 * Convert milligrams to decigrams
	 * @param {Number} n The starting weight in milligrams
	 */
	function mg2dg (n) {
		return nFromGrams(mg2g(n), 'dg');
	}

	/**
	 * Convert milligrams to decagrams
	 * @param {Number} n The starting weight in milligrams
	 */
	function mg2dag (n) {
		return nFromGrams(mg2g(n), 'dag');
	}

	/**
	 * Convert milligrams to hectograms
	 * @param {Number} n The starting weight in milligrams
	 */
	function mg2hg (n) {
		return nFromGrams(mg2g(n), 'hg');
	}

	/**
	 * Convert milligrams to kilograms
	 * @param {Number} n The starting weight in milligrams
	 */
	function mg2kg (n) {
		return nFromGrams(mg2g(n), 'kg');
	}

	/**
	 * Convert milligrams to tonnes
	 * @param {Number} n The starting weight in milligrams
	 */
	function mg2t (n) {
		return nFromGrams(mg2g(n), 't');
	}

	/**
	 * Convert centigrams to grams
	 * @param {Number} n The starting weight in centigrams
	 */
	function cg2g (n) {
		return nToGrams(n, 'cg');
	}

	/**
	 * Convert centigrams to micrograms
	 * @param {Number} n The starting weight in centigrams
	 */
	function cg2mcg (n) {
		return nFromGrams(cg2g(n), 'mcg');
	}

	/**
	 * Convert centigrams to milligrams
	 * @param {Number} n The starting weight in centigrams
	 */
	function cg2mg (n) {
		return nFromGrams(cg2g(n), 'mg');
	}

	/**
	 * Convert centigrams to decigrams
	 * @param {Number} n The starting weight in centigrams
	 */
	function cg2dg (n) {
		return nFromGrams(cg2g(n), 'dg');
	}

	/**
	 * Convert centigrams to decagrams
	 * @param {Number} n The starting weight in centigrams
	 */
	function cg2dag (n) {
		return nFromGrams(cg2g(n), 'dag');
	}

	/**
	 * Convert centigrams to hectograms
	 * @param {Number} n The starting weight in centigrams
	 */
	function cg2hg (n) {
		return nFromGrams(cg2g(n), 'hg');
	}

	/**
	 * Convert centigrams to kilograms
	 * @param {Number} n The starting weight in centigrams
	 */
	function cg2kg (n) {
		return nFromGrams(cg2g(n), 'kg');
	}

	/**
	 * Convert centigrams to tonnes
	 * @param {Number} n The starting weight in centigrams
	 */
	function cg2t (n) {
		return nFromGrams(cg2g(n), 't');
	}

	/**
	 * Convert decigrams to grams
	 * @param {Number} n The starting weight in decigrams
	 */
	function dg2g (n) {
		return nToGrams(n, 'dg');
	}

	/**
	 * Convert decigrams to micrograms
	 * @param {Number} n The starting weight in milligrams
	 */
	function dg2mcg (n) {
		return nFromGrams(dg2g(n), 'mcg');
	}

	/**
	 * Convert decigrams to milligrams
	 * @param {Number} n The starting weight in decigrams
	 */
	function dg2mg (n) {
		return nFromGrams(dg2g(n), 'mg');
	}

	/**
	 * Convert decigrams to centigrams
	 * @param {Number} n The starting weight in decigrams
	 */
	function dg2cg (n) {
		return nFromGrams(dg2g(n), 'cg');
	}

	/**
	 * Convert decigrams to decagrams
	 * @param {Number} n The starting weight in decigrams
	 */
	function dg2dag (n) {
		return nFromGrams(dg2g(n), 'dag');
	}

	/**
	 * Convert decigrams to hectograms
	 * @param {Number} n The starting weight in decigrams
	 */
	function dg2hg (n) {
		return nFromGrams(dg2g(n), 'hg');
	}

	/**
	 * Convert decigrams to kilograms
	 * @param {Number} n The starting weight in decigrams
	 */
	function dg2kg (n) {
		return nFromGrams(dg2g(n), 'kg');
	}

	/**
	 * Convert decigrams to tonnes
	 * @param {Number} n The starting weight in decigrams
	 */
	function dg2t (n) {
		return nFromGrams(dg2g(n), 't');
	}

	/**
	 * Convert decagrams to grams
	 * @param {Number} n The starting weight in decagrams
	 */
	function dag2g (n) {
		return nToGrams(n, 'dag');
	}

	/**
	 * Convert decagrams to micrograms
	 * @param {Number} n The starting weight in milligrams
	 */
	function dag2mcg (n) {
		return nFromGrams(dag2g(n), 'mcg');
	}

	/**
	 * Convert decagrams to milligrams
	 * @param {Number} n The starting weight in decagrams
	 */
	function dag2mg (n) {
		return nFromGrams(dag2g(n), 'mg');
	}

	/**
	 * Convert decagrams to centigrams
	 * @param {Number} n The starting weight in decagrams
	 */
	function dag2cg (n) {
		return nFromGrams(dag2g(n), 'cg');
	}

	/**
	 * Convert decagrams to decigrams
	 * @param {Number} n The starting weight in decagrams
	 */
	function dag2dg (n) {
		return nFromGrams(dag2g(n), 'dg');
	}

	/**
	 * Convert decagrams to hectograms
	 * @param {Number} n The starting weight in decagrams
	 */
	function dag2hg (n) {
		return nFromGrams(dag2g(n), 'hg');
	}

	/**
	 * Convert decagrams to kilograms
	 * @param {Number} n The starting weight in decagrams
	 */
	function dag2kg (n) {
		return nFromGrams(dag2g(n), 'kg');
	}

	/**
	 * Convert decagrams to tonnes
	 * @param {Number} n The starting weight in decagrams
	 */
	function dag2t (n) {
		return nFromGrams(dag2g(n), 't');
	}

	/**
	 * Convert hectograms to grams
	 * @param {Number} n The starting weight in hectograms
	 */
	function hg2g (n) {
		return nToGrams(n, 'hg');
	}

	/**
	 * Convert hectograms to micrograms
	 * @param {Number} n The starting weight in milligrams
	 */
	function hg2mcg (n) {
		return nFromGrams(hg2g(n), 'mcg');
	}

	/**
	 * Convert hectograms to milligrams
	 * @param {Number} n The starting weight in hectograms
	 */
	function hg2mg (n) {
		return nFromGrams(hg2g(n), 'mg');
	}

	/**
	 * Convert hectograms to centigrams
	 * @param {Number} n The starting weight in hectograms
	 */
	function hg2cg (n) {
		return nFromGrams(hg2g(n), 'cg');
	}

	/**
	 * Convert hectograms to decigrams
	 * @param {Number} n The starting weight in hectograms
	 */
	function hg2dg (n) {
		return nFromGrams(hg2g(n), 'dg');
	}

	/**
	 * Convert hectograms to decagrams
	 * @param {Number} n The starting weight in hectograms
	 */
	function hg2dag (n) {
		return nFromGrams(hg2g(n), 'dag');
	}

	/**
	 * Convert hectograms to kilograms
	 * @param {Number} n The starting weight in hectograms
	 */
	function hg2kg (n) {
		return nFromGrams(hg2g(n), 'kg');
	}

	/**
	 * Convert hectograms to tonnes
	 * @param {Number} n The starting weight in hectograms
	 */
	function hg2t (n) {
		return nFromGrams(hg2g(n), 't');
	}

	/**
	 * Convert kilograms to grams
	 * @param {Number} n The starting weight in kilograms
	 */
	function kg2g (n) {
		return nToGrams(n, 'kg');
	}

	/**
	 * Convert kilograms to micrograms
	 * @param {Number} n The starting weight in milligrams
	 */
	function kg2mcg (n) {
		return nFromGrams(kg2g(n), 'mcg');
	}

	/**
	 * Convert kilograms to milligrams
	 * @param {Number} n The starting weight in kilograms
	 */
	function kg2mg (n) {
		return nFromGrams(kg2g(n), 'mg');
	}

	/**
	 * Convert kilograms to centigrams
	 * @param {Number} n The starting weight in kilograms
	 */
	function kg2cg (n) {
		return nFromGrams(kg2g(n), 'cg');
	}

	/**
	 * Convert kilograms to decigrams
	 * @param {Number} n The starting weight in kilograms
	 */
	function kg2dg (n) {
		return nFromGrams(kg2g(n), 'dg');
	}

	/**
	 * Convert kilograms to decagrams
	 * @param {Number} n The starting weight in kilograms
	 */
	function kg2dag (n) {
		return nFromGrams(kg2g(n), 'dag');
	}

	/**
	 * Convert kilograms to hectograms
	 * @param {Number} n The starting weight in kilograms
	 */
	function kg2hg (n) {
		return nFromGrams(kg2g(n), 'hg');
	}

	/**
	 * Convert kilograms to tonnes
	 * @param {Number} n The starting weight in kilograms
	 */
	function kg2t (n) {
		return nFromGrams(kg2g(n), 't');
	}

	/**
	 * Convert tonnes to grams
	 * @param {Number} n The starting weight in tonnes
	 */
	function t2g (n) {
		return nToGrams(n, 't');
	}

	/**
	 * Convert tonnes to micrograms
	 * @param {Number} n The starting weight in milligrams
	 */
	function t2mcg (n) {
		return nFromGrams(t2g(n), 'mcg');
	}

	/**
	 * Convert tonnes to milligrams
	 * @param {Number} n The starting weight in tonnes
	 */
	function t2mg (n) {
		return nFromGrams(t2g(n), 'mg');
	}

	/**
	 * Convert tonnes to centigrams
	 * @param {Number} n The starting weight in tonnes
	 */
	function t2cg (n) {
		return nFromGrams(t2g(n), 'cg');
	}

	/**
	 * Convert tonnes to decigrams
	 * @param {Number} n The starting weight in tonnes
	 */
	function t2dg (n) {
		return nFromGrams(t2g(n), 'dg');
	}

	/**
	 * Convert tonnes to decagrams
	 * @param {Number} n The starting weight in tonnes
	 */
	function t2dag (n) {
		return nFromGrams(t2g(n), 'dag');
	}

	/**
	 * Convert tonnes to hectograms
	 * @param {Number} n The starting weight in tonnes
	 */
	function t2hg (n) {
		return nFromGrams(t2g(n), 'hg');
	}

	/**
	 * Convert tonnes to kilograms
	 * @param {Number} n The starting weight in tonnes
	 */
	function t2kg (n) {
		return nFromGrams(t2g(n), 'kg');
	}

	// Export public methods
	return {
		nFromGrams, nToGrams,
		g2mcg, g2mg, g2cg, g2dg, g2dag, g2hg, g2kg, g2t,
		mcg2mg, mcg2cg, mcg2dg, mcg2g, mcg2dag, mcg2hg, mcg2kg, mcg2t,
		mg2mcg, mg2cg, mg2dg, mg2g, mg2dag, mg2hg, mg2kg, mg2t,
		cg2mcg, cg2mg, cg2dg, cg2g, cg2dag, cg2hg, cg2kg, cg2t,
		dg2mcg, dg2mg, dg2cg, dg2g, dg2dag, dg2hg, dg2kg, dg2t,
		dag2mcg, dag2mg, dag2cg, dag2dg, dag2g, dag2hg, dag2kg, dag2t,
		hg2mcg, hg2mg, hg2cg, hg2dg, hg2g, hg2dag, hg2kg, hg2t,
		kg2mcg, kg2mg, kg2cg, kg2dg, kg2g, kg2dag, kg2hg, kg2t,
		t2mcg, t2mg, t2cg, t2dg, t2g, t2dag, t2hg, t2kg
	};
})();

let form = document.getElementById('form'),
	mass = document.getElementById('mass'),
	fromUnits = document.getElementById('from-units'),
	toUnits = document.getElementById('to-units'),
	result = document.getElementById('result');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	if (!form || ! mass.value) return;
	let n = mass.value,
		inU = fromUnits.value,
		outU = toUnits.value,
		i = false;

	if (inU === outU) {
		i = n;
	}
	if (outU === 'g') {
		i = convertMetricWeight.nToGrams(n, inU);

	} else if (inU === 'g') {
		i = convertMetricWeight.nFromGrams(n, outU);

	} else {
		switch (inU) {
			case 'mcg':
				i = convertMetricWeight.nFromGrams(convertMetricWeight.mcg2g(n), outU);
				break;
			case 'mg':
				i = convertMetricWeight.nFromGrams(convertMetricWeight.mg2g(n), outU);
				break;
			case 'cg':
				i = convertMetricWeight.nFromGrams(convertMetricWeight.cg2g(n), outU);
				break;
			case 'dg':
				i = convertMetricWeight.nFromGrams(convertMetricWeight.dg2g(n), outU);
				break;
			case 'dag':
				i = convertMetricWeight.nFromGrams(convertMetricWeight.dag2g(n), outU);
				break;
			case 'hg':
				i = convertMetricWeight.nFromGrams(convertMetricWeight.hg2g(n), outU);
				break;
			case 'kg':
				i = convertMetricWeight.nFromGrams(convertMetricWeight.kg2g(n), outU);
				break;
			case 't':
				i = convertMetricWeight.nFromGrams(convertMetricWeight.t2g(n), outU);
				break;
		}
	}
	if (!i) {
		result.innerHTML = 'Something&rsquo;s amiss';
		return;
	}
	result.innerHTML = i + ' ' + outU;
});

let x = 36;
console.log( 'console tests: ' +
	convertMetricWeight.nFromGrams(x, 'mcg'),
	convertMetricWeight.nToGrams(x, 'mcg'),
	convertMetricWeight.g2mcg(x),
	convertMetricWeight.g2mg(x),
	convertMetricWeight.g2cg(x),
	convertMetricWeight.g2dg(x),
	convertMetricWeight.g2dag(x),
	convertMetricWeight.g2hg(x),
	convertMetricWeight.g2kg(x),
	convertMetricWeight.g2t(x),
	convertMetricWeight.mcg2mg(x),
	convertMetricWeight.mcg2cg(x),
	convertMetricWeight.mcg2dg(x),
	convertMetricWeight.mcg2g(x),
	convertMetricWeight.mcg2dag(x),
	convertMetricWeight.mcg2hg(x),
	convertMetricWeight.mcg2kg(x),
	convertMetricWeight.mcg2t(x),
	convertMetricWeight.mg2mcg(x),
	convertMetricWeight.mg2cg(x),
	convertMetricWeight.mg2dg(x),
	convertMetricWeight.mg2g(x),
	convertMetricWeight.mg2dag(x),
	convertMetricWeight.mg2hg(x),
	convertMetricWeight.mg2kg(x),
	convertMetricWeight.mg2t(x),
	convertMetricWeight.cg2mcg(x),
	convertMetricWeight.cg2mg(x),
	convertMetricWeight.cg2dg(x),
	convertMetricWeight.cg2g(x),
	convertMetricWeight.cg2dag(x),
	convertMetricWeight.cg2hg(x),
	convertMetricWeight.g2kg(x),
	convertMetricWeight.cg2t(x),
	convertMetricWeight.dg2mcg(x),
	convertMetricWeight.dg2mg(x),
	convertMetricWeight.dg2cg(x),
	convertMetricWeight.dg2g(x),
	convertMetricWeight.dg2dag(x),
	convertMetricWeight.dg2hg(x),
	convertMetricWeight.dg2kg(x),
	convertMetricWeight.dg2t(x),
	convertMetricWeight.dag2mcg(x),
	convertMetricWeight.dag2mg(x),
	convertMetricWeight.dag2cg(x),
	convertMetricWeight.dag2dg(x),
	convertMetricWeight.dag2g(x),
	convertMetricWeight.dag2hg(x),
	convertMetricWeight.dag2kg(x),
	convertMetricWeight.dag2t(x),
	convertMetricWeight.hg2mcg(x),
	convertMetricWeight.hg2mg(x),
	convertMetricWeight.hg2cg(x),
	convertMetricWeight.hg2dg(x),
	convertMetricWeight.hg2g(x),
	convertMetricWeight.hg2dag(x),
	convertMetricWeight.hg2kg(x),
	convertMetricWeight.hg2t(x),
	convertMetricWeight.kg2mcg(x),
	convertMetricWeight.kg2mg(x),
	convertMetricWeight.kg2cg(x),
	convertMetricWeight.kg2dg(x),
	convertMetricWeight.kg2g(x),
	convertMetricWeight.kg2dag(x),
	convertMetricWeight.kg2hg(x),
	convertMetricWeight.kg2t(x),
	convertMetricWeight.t2mcg(x),
	convertMetricWeight.t2mg(x),
	convertMetricWeight.t2cg(x),
	convertMetricWeight.t2dg(x),
	convertMetricWeight.t2g(x),
	convertMetricWeight.t2dag(x),
	convertMetricWeight.t2hg(x),
	convertMetricWeight.t2kg(x)
);
