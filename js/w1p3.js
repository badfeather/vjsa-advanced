let Weight = (function () {
	// metric
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
		// imperial
		gr = pg * 64798910000,
		dr = gr * 27.34375,
		oz = dr * 16,
		lb = oz * 16,
		cwt = lb * 100,
		lcwt  = lb * 112,
		T = cwt * 20,
		lT = lcwt * 20,
		fromPg = {pg, ng, mcg, mg, cg, dg, g, dag, hg, kg, t, Mt, Gt, gr, dr, oz, lb, cwt, lcwt, T, lT};

	let units = {
		// metric
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
		Gt: 'gigatonne',
		// imperial (US)
		gr: 'grain',
		dr: 'dram',
		oz: 'ounce',
		lb: 'pound',
		cwt: 'hundredweight',
		lcwt: 'long hundredweight',
		T: 'ton',
		lT: 'long ton'
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
	 * Helper function - Convert number in unit to another unit
	 * @param {Number} n The input weight
	 * @param {string} inU The unit abbreviation for the input weight
	 * @param {string} outU The unit abbreviation for the output weight
	 */
	function convertWeight (n, inU, outU) {
		return pg2u(n2pg(n, inU), outU);
	}

	/**
	 * Helper function - Add weight in specified unit from current weight
	 * @param {Number} w The weight to add
	 * @param {string} u the unit of the weight to add
	 * @param {Number} currentW The current weight
	 * @param {string} currentU The current unit
	 */
	function addWeight (w, u, currentW, currentU) {
		let convertedW = convertWeight(w, u, currentU);
		return currentW + convertedW;
	}

	/**
	 * Helper function - Subtract weight in specified unit from current weight
	 * @param {Number} w The weight to subtract
	 * @param {string} u the unit of the weight to subtract
	 * @param {Number} currentW The current weight
	 * @param {string} currentU The current unit
	 */
	function subtractWeight (w, u, currentW, currentU) {
		let convertedW = convertWeight(w, u, currentU);
		return currentW - convertedW;
	}

	function Constructor (weight, unit) {
		weight = parseFloat(weight);
		if (isNaN(weight)) throw 'Not a valid number.';
		this.weight = weight;
		this.unit = units.hasOwnProperty(unit) ? unit : 'g';
	}

	/**
	 * Convert number in unit to picograms
	 * @param {string} unit The unit abbreviation to convert to
	 * @see units object keys for available units
	 */
	Constructor.prototype.convertTo = function (unit) {
		if (!units.hasOwnProperty(unit)) throw 'Not a valid unit.';
		this.weight = convertWeight(this.weight, this.unit, unit);
		this.unit = unit;
		return this;
	}

	/**
	 * Add weight in specified unit to current weight
	 * @param {Number} weight The amount to add
	 * @param {string} the unit of the amount being added
	 */
	Constructor.prototype.addWeight = function (weight, unit) {
		weight = parseFloat(weight);
		if (isNaN(weight)) throw 'Not a valid number.';
		if (!units.hasOwnProperty(unit)) throw 'Not a valid unit.';
		let addedWeight = addWeight(weight, unit, this.weight, this.unit);
		if (!addedWeight) return;
		this.weight = addedWeight;
		return this;
	}

	/**
	 * Add weight in specified unit to current weight
	 * @param {Number} weight The amount to subtract
	 * @param {string} the unit of the amount being subtracted
	 */
	Constructor.prototype.subtractWeight = function (weight, unit) {
		weight = parseFloat(weight);
		if (isNaN(weight)) throw 'Not a valid number.';
		if (!units.hasOwnProperty(unit)) throw 'Not a valid unit.';
		let subtractedWeight = subtractWeight(weight, unit, this.weight, this.unit);
		if (!subtractedWeight) return;
		this.weight = subtractedWeight;
		return this;
	}

	/**
	 * Create convert/add/subtract functions for all the unit keys in the units object
	 */
	for (let key in units) {
		let addedWeight, subtractedWeight;

		/**
		 * Convert weight from current unit to key unit
		 * @function to_[key]()
		 */
		Constructor.prototype[`to_${key}`] = function () {
			this.weight = convertWeight(this.weight, this.unit, key);
			this.unit = key;
			return this;
		}

		/**
		 * Add weight in key unit to current weight
		 * @function add_[key]()
		 */
		Constructor.prototype[`add_${key}`] = function (weight) {
			weight = parseFloat(weight);
			if (isNaN(weight)) throw 'Not a valid number.';
			addedWeight = addWeight(weight, key, this.weight, this.unit);
			if (!addedWeight) return;
			this.weight = addedWeight;
			return this;
		}

		/**
		 * Subtract weight in key unit from current weight
		 * @function subtract_[key]()
		 */
		Constructor.prototype[`subtract_${key}`] = function (weight) {
			weight = parseFloat(weight);
			if (isNaN(weight)) throw 'Not a valid number.';
			subtractedWeight = subtractWeight(weight, key, this.weight, this.unit);
			if (!subtractedWeight) return;
			this.weight = subtractedWeight;
			return this;
		}
	}

	/**
	 * Return formatted string including the weight and the unit
	 * @param {boolean} abbr Whether to display the abbreviated or full unit name
	 */
	Constructor.prototype.format = function (abbr = 1) {
		let unit = abbr ? this.unit : units[this.unit];
		if (!abbr && this.weight !== 1) unit = unit + 's';
		return this.weight.toLocaleString() + ' ' + unit;
	}

	// Export constructor object
	return Constructor;
})();

// TEST FORM
// -----------------------------------------------
let form = document.getElementById('form'),
	weight = document.getElementById('weight'),
	addWeight = document.getElementById('add-weight'),
	addUnit = document.getElementById('add-unit'),
	subtractWeight = document.getElementById('subtract-weight'),
	subtractUnit = document.getElementById('subtract-unit'),
	convertUnit = document.getElementById('convert-unit'),
	abbrUnit = document.getElementById('abbr-unit'),
	history = document.getElementById('history'),
	total = document.getElementById('total'),
	formWeight = new Weight(0, 'g');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	let addWeightVal = addWeight.value,
		addUnitVal = addUnit.value,
		subtractWeightVal = subtractWeight.value,
		subtractUnitVal = subtractUnit.value,
		convertUnitVal = convertUnit.value,
		abbr = abbrUnit.checked ? 1 : 0,
		newMessage = [];

	if (addWeightVal) {
		formWeight.addWeight(addWeightVal, addUnitVal);
		newMessage.push(`${addWeightVal} ${addUnitVal} added.`);
	}

	if (subtractWeightVal) {
		formWeight.subtractWeight(subtractWeightVal, subtractUnitVal);
		newMessage.push(`${subtractWeightVal} ${subtractUnitVal} subtracted.`);
	}

	if (convertUnitVal) {
		formWeight.convertTo(convertUnitVal);
		newMessage.push(`Converted to ${formWeight.unit}.`)
	}

	history.innerHTML += '<p>' + newMessage.join(' ') + ' New Weight: ' + formWeight.weight + ' ' + formWeight.unit + '</p>';
	total.innerHTML = formWeight.format(abbr);
	form.reset();
});

// CONSOLE TESTS
let w1 = new Weight(32, 'lb');
w1.add_lb(10).to_g();
console.log('added 10 lb, converted to grams: ' + w1.format());


