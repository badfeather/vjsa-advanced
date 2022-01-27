/**
 * The Constructor object
 * @param {dateString, value, dateObject or array} date Optional parameter for date
 * If no date is passed, or the date parameter causes an invalid date, the current date will be used
 */
function Constructor (date = [], options = {}) {
	if (!Array.isArray(date)) {
		date = [date];
	}
	let newDate = new Date(...date);
	Object.freeze(newDate);
	let settings = Object.assign({
		days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	});
	Object.freeze(settings);
	Object.defineProperties(this, {
		_date: {
			value: newDate
		},
		_settings: {
			value: settings
		}
	});
}

/**
 * Get year of this._date
 */
Constructor.prototype.getYear = function () {
	return this._date.getFullYear();
}

/**
 * Get month of this._date
 * @return {string} month name
 */
Constructor.prototype.getMonth = function () {
	return this._settings.months[this._date.getMonth()];
}

/**
 * Get day of this._date
 * @return {string} day name
 */
Constructor.prototype.getDay = function () {
	return this._settings.days[this._date.getDay()];
}

/**
 * Get day of month of this._date
 * @return {string} day name
 */
Constructor.prototype.getDate = function () {
	return this._date.getDate();
}

/**
 * Get hours of this._date
 * @param {boolean} amPm - whether to output the hours in military time or standard time
 * with an a.m./p.m. suffix
 */
Constructor.prototype.getHours = function () {
	return this._date.getHours();
}

/**
 * Get minutes of this._date
 */
Constructor.prototype.getMinutes = function () {
	return this._date.getMinutes();
}

/**
 * Get seconds of this._date
 */
Constructor.prototype.getSeconds = function () {
	return this._date.getSeconds();
}

/**
 * Get full date of this._date
 * @param {boolean} showTime - whether to show the time
 * @param {boolean} showSeconds - whether to show the seconds (only used if showTime is true)
 * @param {boolean} amPm - whether to output the hours in military time or standard time
 * with an a.m./p.m. suffix
 */
Constructor.prototype.getLongDate = function (options = {}) {
	options = typeof options === 'object' ? options : {};
	let settings = Object.assign({
		showTime: true,
		showSeconds: true,
		amPm: true
	}, options);
	let date = `${this._settings.days[this._date.getDay()]}, ${this._settings.months[this._date.getMonth()]} ${this._date.getDate()}, ${this._date.getFullYear()}`;
	if (settings.showTime) {
		let hours = this._date.getHours(),
			suffix = '';
		if (settings.amPm) {
			suffix = hours >= 12 ? ' p.m.' : ' a.m.';
			if (hours >= 13) {
				hours = hours - 12;
			}
		}
		date += `, ${hours}:${this._date.getMinutes()}`;
		if (settings.showSeconds) date += `:${this._date.getSeconds()}`;
		date += suffix;
	}
	return date;
}

/**
 * Add number in seconds to this._date
 * @param {number} The number of seconds to add
 */
Constructor.prototype.addSeconds = function (n) {
	n = parseFloat(n);
	if (isNaN(n)) throw 'Not a valid number.';
	let newTime = new Constructor(this._date, this._settings);
	newTime._date.setSeconds(newTime._date.getSeconds() + n);
	return newTime;
}

/**
 * Add number in minutes to this._date
 * @param {number} n - The number of minutes to add
 */
Constructor.prototype.addMinutes = function (n) {
	n = parseFloat(n);
	if (isNaN(n)) throw 'Not a valid number.';
	let newTime = new Constructor(this._date, this._settings);
	newTime._date.setMinutes(newTime._date.getMinutes() + n);
	return newTime;
}

/**
 * Add number in hours to this._date
 * @param {number} n - The number of hours to add
 */
Constructor.prototype.addHours = function (n) {
	n = parseFloat(n);
	if (isNaN(n)) throw 'Not a valid number.';
	let newTime = new Constructor(this._date, this._settings);
	newTime._date.setHours(newTime._date.getHours() + n);
	return newTime;
}

/**
 * Add number in days to this._date
 * @param {number} n - The number of days to add
 */
Constructor.prototype.addDays = function (n) {
	n = parseFloat(n);
	if (isNaN(n)) throw 'Not a valid number.';
	let newTime = new Constructor(this._date, this._settings);
	newTime._date.setDate(newTime._date.getDate() + n);
	return newTime;
}

/**
 * Add number in months to this._date
 * @param {number} n - The number of months to add
 */
Constructor.prototype.addMonths = function (n) {
	n = parseFloat(n);
	if (isNaN(n)) throw 'Not a valid number.';
	let newTime = new Constructor(this._date, this._settings);
	newTime._date.setMonths(newTime._date.getMonths() + n);
	return newTime;
}

/**
 * Add number in years to this._date
 * @param {number} n - The number of years to add
 */
Constructor.prototype.addYears = function (n) {
	n = parseFloat(n);
	if (isNaN(n)) throw 'Not a valid number.';
	let newTime = new Constructor(this._date, this._settings);
	newTime._date.setYears(newTime._date.getFullYear() + n);
	return newTime;
}

export default Constructor;
