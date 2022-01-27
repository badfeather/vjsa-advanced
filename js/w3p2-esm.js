/**
 * The Constructor object
 * @param {dateString, value, dateObject or array} date Optional parameter for date
 * If no date is passed, or the date parameter causes an invalid date, the current date will be used
 */
function Constructor (date = [], options = {}) {
	if (!Array.isArray(date)) {
		date = [date];
	}
	let settings = Object.assign({
		days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	});
	Object.freeze(settings);
	Object.defineProperties(this, {
		date: {
			value: new Date(...date)
		},
		_settings: {
			value: settings
		}
	});
}

/**
 * Get year of this.date
 */
Constructor.prototype.getYear = function () {
	return this.date.getFullYear();
}

/**
 * Get month of this.date
 * @return {string} month name
 */
Constructor.prototype.getMonth = function () {
	return this._settings.months[this.date.getMonth()];
}

/**
 * Get day of this.date
 * @return {string} day name
 */
Constructor.prototype.getDay = function () {
	return this._settings.days[this.date.getDay()];
}

/**
 * Get day of month of this.date
 * @return {string} day name
 */
Constructor.prototype.getDate = function () {
	return this.date.getDate();
}

/**
 * Get hours of this.date
 * @param {boolean} amPm - whether to output the hours in military time or standard time
 * with an a.m./p.m. suffix
 */
Constructor.prototype.getHours = function () {
	return this.date.getHours();
}

/**
 * Get minutes of this.date
 */
Constructor.prototype.getMinutes = function () {
	return this.date.getMinutes();
}

/**
 * Get seconds of this.date
 */
Constructor.prototype.getSeconds = function () {
	return this.date.getSeconds();
}

/**
 * Get full date of this.date
 * @param {boolean} showTime - whether to show the time
 * @param {boolean} showSeconds - whether to show the seconds (only used if showTime is true)
 * @param {boolean} amPm - whether to output the hours in military time or standard time
 * with an a.m./p.m. suffix
 */
Constructor.prototype.getLocaleString = function (locale) {
	locale = locale ? locale : 'en-US';
	return this.date.toLocaleString(locale);
}

/**
 * Add number in seconds to this.date
 * @param {number} The number of seconds to add
 */
//Constructor.prototype.addSeconds = function (n) {
	//n = parseFloat(n);
	//if (isNaN(n)) throw 'Not a valid number.';
	//let newTime = new Constructor(this.date, this._settings);
	//newTime.date.setSeconds(newTime.date.getSeconds() + n);
	//return newTime;
//}
Constructor.prototype.addSeconds = function (n) {
	n = parseFloat(n);
	if (isNaN(n)) throw 'Not a valid number.';
	let d = new Date(this.date);
	d.setSeconds(d.getSeconds() + n);
	return new Constructor(d, this._settings);
}

/**
 * Add number in minutes to this.date
 * @param {number} n - The number of minutes to add
 */
Constructor.prototype.addMinutes = function (n) {
	n = parseFloat(n);
	if (isNaN(n)) throw 'Not a valid number.';
	let d = new Date(this.date);
	d.setMinutes(d.getMinutes() + n);
	return new Constructor(d, this._settings);
}

/**
 * Add number in hours to this.date
 * @param {number} n - The number of hours to add
 */
Constructor.prototype.addHours = function (n) {
	n = parseFloat(n);
	if (isNaN(n)) throw 'Not a valid number.';
	let d = new Date(this.date);
	d.setHours(d.getHours() + n);
	return new Constructor(d, this._settings);
}

/**
 * Add number in days to this.date
 * @param {number} n - The number of days to add
 */
Constructor.prototype.addDays = function (n) {
	n = parseFloat(n);
	if (isNaN(n)) throw 'Not a valid number.';
	let d = new Date(this.date);
	d.setDate(d.getDate() + n);
	return new Constructor(d, this._settings);
}

/**
 * Add number in months to this.date
 * @param {number} n - The number of months to add
 */
Constructor.prototype.addMonths = function (n) {
	n = parseFloat(n);
	if (isNaN(n)) throw 'Not a valid number.';
	let d = new Date(this.date);
	d.setMonth(d.getMonth() + n);
	return new Constructor(d, this._settings);
}

/**
 * Add number in years to this.date
 * @param {number} n - The number of years to add
 */
Constructor.prototype.addYears = function (n) {
	n = parseFloat(n);
	if (isNaN(n)) throw 'Not a valid number.';
	let d = new Date(this.date);
	d.setFullYear(d.getFullYear() + n);
	return new Constructor(d, this._settings);
}

export default Constructor;
