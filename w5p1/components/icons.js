import {isFave} from './faves.js';

/**
 * Load icons onto the homepage for favorited places
 */
function loadIcons () {

	// Get places
	let places = document.querySelectorAll('[data-place]');

	// Create an icon
	let icon = document.createElement('span');
	icon.setAttribute('aria-label', '(Favorite)');
	icon.textContent = ' ♥';

	// Loop through each place and add an icon if it's a favorite
	for (let place of places) {

		// Get the place ID
		let id = place.getAttribute('data-place');

		// If place is not a fave, carry on
		if (!isFave(id)) continue;

		// Otherwise, add an icon
		let title = place.querySelector('.place-title');
		if (!title) continue;
		title.append(icon.cloneNode(true));

	}

}

export default loadIcons;
