let Time = (function () {
	let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	/**
	 * Time object constructor
	 * @param {dateString, value, or dateObject} date Optional parameter for date
	 * If no date is passed, or the date parameter causes an invalid date, the current date will be used
	 */
	function Constructor (date) {
		if (date) {
			let newDate = new Date(date);
			if (newDate.toString() !== 'Invalid Date') {
				this.date = date;
				return;
			}
		}
		this.date = new Date();
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
		return months[this.date.getMonth()];
	}

	/**
	 * Get day of this.date
	 * @return {string} day name
	 */
	Constructor.prototype.getDay = function () {
		return days[this.date.getDay()];
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
	Constructor.prototype.getLongDate = function (options = {}) {
		options = typeof options === 'object' ? options : {};
		let settings = Object.assign({
			showTime: false,
			showSeconds: true,
			amPm: true
		}, options);
		let date = `${days[this.date.getDay()]}, ${months[this.date.getMonth()]} ${this.date.getDate()}, ${this.date.getFullYear()}`;
		if (settings.showTime) {
			let hours = this.date.getHours(),
				suffix = '';
			if (settings.amPm) {
				suffix = hours >= 12 ? ' p.m.' : ' a.m.';
				if (hours >= 13) {
					hours = hours - 12;
				}
			}
			date += `, ${hours}:${this.date.getMinutes()}`;
			if (settings.showSeconds) date += `:${this.date.getSeconds()}`;
			date += suffix;
		}
		return date;
	}

	/**
	 * Add number in seconds to this.date
	 * @param {number} The number of seconds to add
	 */
	Constructor.prototype.addSeconds = function (n) {
		n = parseFloat(n);
		if (isNaN(n)) throw 'Not a valid number.';
		this.date.setSeconds(this.date.getSeconds() + n);
		return this;
	}

	/**
	 * Add number in minutes to this.date
	 * @param {number} n - The number of minutes to add
	 */
	Constructor.prototype.addMinutes = function (n) {
		n = parseFloat(n);
		if (isNaN(n)) throw 'Not a valid number.';
		this.date.setMinutes(this.date.getMinutes() + n);
		return this;
	}

	/**
	 * Add number in hours to this.date
	 * @param {number} n - The number of hours to add
	 */
	Constructor.prototype.addHours = function (n) {
		n = parseFloat(n);
		if (isNaN(n)) throw 'Not a valid number.';
		this.date.setHours(this.date.getHours() + n);
		return this;
	}

	/**
	 * Add number in days to this.date
	 * @param {number} n - The number of days to add
	 */
	Constructor.prototype.addDays = function (n) {
		n = parseFloat(n);
		if (isNaN(n)) throw 'Not a valid number.';
		this.date.setDate(this.date.getDate() + n);
		return this;
	}

	/**
	 * Add number in months to this.date
	 * @param {number} n - The number of months to add
	 */
	Constructor.prototype.addMonths = function (n) {
		n = parseFloat(n);
		if (isNaN(n)) throw 'Not a valid number.';
		this.date.setMonth(this.date.getMonth() + n);
		return this;
	}

	/**
	 * Add number in years to this.date
	 * @param {number} n - The number of years to add
	 */
	Constructor.prototype.addYears = function (n) {
		n = parseFloat(n);
		if (isNaN(n)) throw 'Not a valid number.';
		this.date.setFullYear(this.date.getFullYear() + n);
		return this;
	}

	// Export constructor object
	return Constructor;
})();

export default Time;
