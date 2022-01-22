import * as _ from './w2p3-time-esm.js';

// TEST FORM
// -----------------------------------------------
let form = document.getElementById('form'),
	add_seconds = document.getElementById('add-seconds'),
	add_minutes = document.getElementById('add-minutes'),
	add_hours = document.getElementById('add-hours'),
	add_days = document.getElementById('add-days'),
	add_months = document.getElementById('add-months'),
	add_years = document.getElementById('add-years'),
	history = document.getElementById('history'),
	date = new Date();

form.reset();
history.innerHTML = `<p>Starting time: ${_.getLongDate(date, {showTime: true})}</p>`;

form.addEventListener('submit', function(event) {
	event.preventDefault();
	let seconds = add_seconds.value,
		minutes = add_minutes.value,
		hours = add_hours.value,
		days = add_days.value,
		months = add_months.value,
		years = add_years.value,
		newMessage = [];

	if (seconds) {
		_.addSeconds(date, seconds);
		newMessage.push(`${seconds} seconds added.`);
	}

	if (minutes) {
		_.addMinutes(date, minutes);
		newMessage.push(`${minutes} minutes added.`);
	}

	if (hours) {
		_.addHours(date, hours);
		newMessage.push(`${hours} hours added.`);
	}

	if (days) {
		_.addDays(date, days);
		newMessage.push(`${days} days added.`);
	}

	if (months) {
		_.addMonths(date, months);
		newMessage.push(`${months} months added.`);
	}

	if (years) {
		_.addYears(date, years);
		newMessage.push(`${years} years added.`);
	}

	history.innerHTML += `<p>${newMessage.join(' ')} New time: ${_.getLongDate(date, {showTime: true})}</p>`;
	form.reset();
});
