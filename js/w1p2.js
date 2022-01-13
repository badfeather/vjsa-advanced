let MetricWeight = (function () {
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

	let units = {
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
	 * Helper function - Convert number in unit to picograms
	 * @param {Number} n The input weight
	 * @param {string} u The input unit abbreviation
	 * @see units object keys for available units for u
	 */
	function n2pg (n, u) {
		return n * fromPg[u];
	}

	/**
	 * Helper Function - Convert number in picograms
	 * @param {Number} n The input weight in picograms
	 * @param {string} u The unit abbreviation to convert to
	 * @see units object keys for available units for u
	 */
	function pg2u (n, u) {
		return n / fromPg[u];
	}

	/**
	 * Convert number in unit to another unit
	 * @param {Number} n The input weight
	 * @param {string} inU The unit abbreviation for the input weight
	 * @param {string} outU The unit abbreviation for the output weight
	 */
	function convertTo (n, inU, outU) {
		return pg2u(n2pg(n, inU), outU);
	}

	function Constructor (weight, unit) {
		this.weight = parseFloat(weight);
		this.unit = units.hasOwnProperty(unit) ? unit : 'g';
	}

	/**
	 * Convert number in unit to picograms
	 * @param {string} unit The unit abbreviation to convert to
	 * @see units object keys for available units
	 */
	Constructor.prototype.convertTo = function (unit) {
		if (!units.hasOwnProperty(unit)) throw 'Not a valid unit.';
		this.weight = convertTo(this.weight, this.unit, unit);
		this.unit = unit;
	}

	/**
	 * Return formatted string including the weight and the unit
	 * @param {boolean} abbr Whether to display the abbreviated or full unit name
	 */
	Constructor.prototype.format = function (abbr = 1) {
		let unit = abbr ? this.unit : units[this.unit];
		return this.weight + ' ' + unit;
	}

	// Export constructor object
	return Constructor;
})();

// TEST FORM
// -----------------------------------------------
let form = document.getElementById('form'),
	weight = document.getElementById('weight'),
	fromUnits = document.getElementById('from-units'),
	toUnits = document.getElementById('to-units'),
	showUnits = document.getElementById('show-units'),
	abbrUnits = document.getElementById('abbr-units'),
	result = document.getElementById('result');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	if (!form || ! weight.value) return;
	let n = weight.value,
		inU = fromUnits.value,
		outU = toUnits.value,
		newWeight = new MetricWeight(n, inU),
		resultText,
		unit;
	console.log(weight);
	newWeight.convertTo(outU);

	if (showUnits.checked) {
		let abbr = abbrUnits.checked ? 1 : 0;
		resultText = newWeight.format(abbr);
	} else {
		resultText = newWeight['weight'];
	}

	result.innerHTML = resultText;
});
