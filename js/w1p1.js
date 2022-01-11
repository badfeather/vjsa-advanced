let convertMetricWeight = (function () {
	let pg = 1,
		ng = pg * 1000,
		mcg = ng * 1000,
		mg = mcg * 1000,
		cg = mg * 10,
		dg = cg * 10,
		g = dg * 10,
		dag = g * 10,
		hg = dag * 10,
		kg = hg * 10,
		t = kg * 1000,
		Mt = t * 1000000,
		Gt = Mt * 1000,
		fromPg = {pg, ng, mcg, mg, cg, dg, g, dag, hg, kg, t, Mt, Gt};

	let uNames = {
		pg: 'picogram',
		ng: 'nanogram',
		mcg: 'microgram',
		mg: 'milligram',
		cg: 'centigram',
		dg: 'decigram',
		g: 'gram',
		dag: 'decagram',
		hg: 'hectogram',
		kg: 'kilogram',
		t: 'tonne',
		Mt: 'megatonne',
		Gt: 'gigatonne'
	};

	/**
	 * Convert number in unit to picograms
	 * @param {Number} n The starting weight
	 * @param {string} u The unit abbreviation
	 * @see uNames object keys for available units for u
	 */
	function n2pg (n, u) {
		return parseFloat(n) * fromPg[u];
	}

	/**
	 * Convert number in picograms
	 * @param {Number} n The starting weight in picograms
	 * @param {string} u The unit abbreviation to convert to
	 * @see uNames object keys for available units for u
	 */
	function pg2u (n, u) {
		return parseFloat(n) / fromPg[u];
	}

	/**
	 * Convert number in unit to picograms
	 * @param {Number} n The starting weight
	 * @param {string} inU The unit abbreviation for the starting weight
	 * @param {string} outU The unit abbreviation for the output weight
	 * @see uNames object keys for available units for inU and outU
	 * param {boolean} addUnit Whether or not to add a unit. Defaults to true.
	 * param {boolean} abbr Whether or not to abbreviate the unit. Defaults to true.
	 */
	function u2u (n, inU, outU, addUnit = 1, abbr = 1) {
		let val = pg2u(n2pg(parseFloat(n), inU), outU);
		if (!addUnit) return val;
		if (abbr) return val + ' ' + outU;
		return val + ' ' + uNames[outU] + (val === 1 ? '' : 's');
	}

	// Export public methods
	return {u2u};
})();

// TEST FORM
// -----------------------------------------------
let form = document.getElementById('form'),
	mass = document.getElementById('mass'),
	fromUnits = document.getElementById('from-units'),
	toUnits = document.getElementById('to-units'),
	showUnits = document.getElementById('show-units'),
	abbrUnits = document.getElementById('abbr-units'),
	result = document.getElementById('result');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	if (!form || ! mass.value) return;
	let n = mass.value,
		inU = fromUnits.value,
		outU = toUnits.value,
		i = false;

	result.innerHTML = convertMetricWeight.u2u(n, inU, outU, showUnits.checked, abbrUnits.checked);
});
