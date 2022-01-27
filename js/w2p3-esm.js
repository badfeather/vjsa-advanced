let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/**
 * Get the year
 * @param  {Date} date - The date object
 * @return {String} - The year
 */
function getYear (date) {
	return date.getFullYear();
}

/**
 * Get the month
 * @param  {Date} date - The date object
 * @return {String} - The month
 */
function getMonth (date) {
	return months[date.getMonth()];
}

/**
 * Get the day
 * @param  {Date} date - The date object
 * @return {String} - The day
 */
function getDay (date) {
	return days[date.getDay()];
}

/**
 * Get the day number of month
 * @param  {Date} date - The date object
 * @return {integer} - The day number of month
 */
function getDate (date) {
	return date.getDate();
}

/**
 * Get the hours
 * @param  {Date} date - The date object
 * @return {integer} - The hours
 */
function getHours (date) {
	return date.getHours();
}

/**
 * Get the minutes
 * @param  {Date} date - The date object
 * @return {integer} - The minutes
 */
function getMinutes (date) {
	return date.getMinutes();
}

/**
 * Get the seconds
 * @param  {Date} date - The date object
 * @return {integer} - The seconds
 */
function getSeconds (date) {
	return date.getSeconds();
}

/**
 * Get full date of date
 * @param  {Date} date - The date object
 * @param {object} options - The following options:
 * - {boolean} showTime - Whether to show the time. Defaults to false
 * - {boolean} showSeconds - whether to show the seconds (only used if showTime is true)
 * - {boolean} amPm - whether to output the hours in military time or standard time
 * with an a.m./p.m. suffix. (only used if showTime is true)
 */
function getLongDate (date, options = {}) {
	options = typeof options === 'object' ? options : {};
	let settings = Object.assign({
		showTime: false,
		showSeconds: true,
		amPm: true
	}, options);

	let longDate = `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
	if (settings.showTime) {
		let hours = date.getHours(),
			suffix = '';
		if (settings.amPm) {
			suffix = hours >= 12 ? ' p.m.' : ' a.m.';
			if (hours >= 13) {
				hours = hours - 12;
			}
		}
		longDate += `, ${hours}:${date.getMinutes()}`;
		if (settings.showSeconds) longDate += `:${date.getSeconds()}`;
		longDate += suffix;
	}
	return longDate;
}

/**
 * Add number in seconds to date
 * @param  {Date} date - The date object
 * @param {number} The number of seconds to add
 */
function addSeconds (date, n) {
	n = parseFloat(n);
	if (isNaN(n)) throw 'Not a valid number.';
	date.setSeconds(date.getSeconds() + n);
}

/**
 * Add number in minutes to date
 * @param  {Date} date - The date object
 * @param {number} n - The number of minutes to add
 */
function addMinutes (date, n) {
	n = parseFloat(n);
	if (isNaN(n)) throw 'Not a valid number.';
	date.setMinutes(date.getMinutes() + n);
}

/**
 * Add number in hours to date
 * @param  {Date} date - The date object
 * @param {number} n - The number of hours to add
 */
function addHours (date, n) {
	n = parseFloat(n);
	if (isNaN(n)) throw 'Not a valid number.';
	date.setHours(date.getHours() + n);
}

/**
 * Add number in days to date
 * @param  {Date} date - The date object
 * @param {number} n - The number of days to add
 */
function addDays (date, n) {
	n = parseFloat(n);
	if (isNaN(n)) throw 'Not a valid number.';
	date.setDate(date.getDate() + n);
}

/**
 * Add number in months to date
 * @param  {Date} date - The date object
 * @param {number} n - The number of months to add
 */
function addMonths (date, n) {
	n = parseFloat(n);
	if (isNaN(n)) throw 'Not a valid number.';
	date.setMonth(date.getMonth() + n);
}

/**
 * Add number in years to date
 * @param  {Date} date - The date object
 * @param {number} n - The number of years to add
 */
function addYears (date, n) {
	n = parseFloat(n);
	if (isNaN(n)) throw 'Not a valid number.';
	date.setFullYear(date.getFullYear() + n);
}

export {getYear, getMonth, getDay, getHours, getMinutes, getSeconds, getLongDate, addSeconds, addMinutes, addHours, addMonths, addYears};
