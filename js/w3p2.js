import Time from './w3p2-esm.js';

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
	time = new Time();

form.reset();
history.innerHTML = `<p>Starting time: ${time.getLongDate()}</p>`;

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
		time.addSeconds(seconds);
		newMessage.push(`${seconds} seconds added.`);
	}

	if (minutes) {
		time.addMinutes(minutes);
		newMessage.push(`${minutes} minutes added.`);
	}

	if (hours) {
		time.addHours(hours);
		newMessage.push(`${hours} hours added.`);
	}

	if (days) {
		time.addDays(days);
		newMessage.push(`${days} days added.`);
	}

	if (months) {
		time.addMonths(months);
		newMessage.push(`${months} months added.`);
	}

	if (years) {
		time.addYears(years);
		newMessage.push(`${years} years added.`);
	}

	history.innerHTML += `<p>${newMessage.join(' ')} New time: ${time.getLongDate()}</p>`;
	form.reset();
});

// CONSOLE TESTS
let monday = new Time('January 24, 2022 00:00:00');
console.log(monday._date);
//monday._date = 'xyz';
let wednesday = monday.addDays(2);
console.log(monday.getDay());
console.log(wednesday.getDay());

