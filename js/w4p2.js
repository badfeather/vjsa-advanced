import Time from './w4p2-esm.js';

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
history.innerHTML = `<p>Starting time: ${time.getLocaleString()}</p>`;

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
		time = time.addSeconds(seconds);
		newMessage.push(`${seconds} seconds added.`);
	}

	if (minutes) {
		time = time.addMinutes(minutes);
		newMessage.push(`${minutes} minutes added.`);
	}

	if (hours) {
		time = time.addHours(hours);
		newMessage.push(`${hours} hours added.`);
	}

	if (days) {
		time = time.addDays(days);
		newMessage.push(`${days} days added.`);
	}

	if (months) {
		time = time.addMonths(months);
		newMessage.push(`${months} months added.`);
	}

	if (years) {
		time = time.addYears(years);
		newMessage.push(`${years} years added.`);
	}

	history.innerHTML += `<p>${newMessage.join(' ')} New time: ${time.getLocaleString()}</p>`;
	form.reset();
});


// CONSOLE TESTS
//let monday = new Time('January 24, 2022 00:00:00');
//console.log(monday);
//console.log(monday.date);
//console.log(monday._settings);
////monday.date = 'xyz';
//let wednesday = monday.addDays(2);
//console.log(monday.getDay());
//console.log(wednesday.getDay());

// Create a new Time() instance
let halloween = new Time('October 31, 2021', {instanceName: 'halloween'});
console.log('Initial halloween constructor: ', halloween);

// If the year on the Time() instance is greater than 2021, don't update
document.addEventListener('time:update', function (event) {
	console.log('Instance name: ' + event.detail.instance._settings.instanceName);
	console.log('Is halloween:', event.detail.instance._settings.instanceName === 'halloween');

	if ('halloween' === event.detail.instance._settings.instanceName && event.detail.time.date.getFullYear() > 2021) {
		console.log('The instanceName is halloween and the year is greater than 2021. Canceled.');
		event.preventDefault();
		return;
	}
	console.log('Either the instanceName is not halloweeen or the year is less than or equal to 2021. Proceed.');
});

halloween.addDays(3).addMonths(1).addYears(1);
console.log('Halloween date after methods: ' + halloween.date);



