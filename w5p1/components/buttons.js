import {addFave, removeFave, isFave} from './faves.js';

/**
 * Handle click events
 * @param  {Event} event The event object
 */
function clickHandler (event) {

	// Make sure a [data-fave] button was clicked
	let btn = event.target.closest('[data-fave]');
	if (!btn) return;

	// Get place ID
	let id = btn.getAttribute('data-fave');

	// Update button UI and save
	if (btn.getAttribute('aria-pressed') === 'true') {
		btn.setAttribute('aria-pressed', 'false');
		removeFave(id);
	} else {
		btn.setAttribute('aria-pressed', 'true');
		addFave(id);
	}

}

/**
 * Load buttons into the UI
 * @return {[type]} [description]
 */
function loadButtons () {

	// Check for controls
	let controls = document.querySelector('[data-controls]');
	if (!controls) return;

	// Get the content ID
	let id = controls.getAttribute('data-controls');

	// Inject buttons
	controls.innerHTML =
		`<p>
			<button data-fave="${id}" aria-pressed="${isFave(id) ? 'true' : 'false'}">
				<span aria-hidden="true">♥</span> Favorite
			</button>
		</p>`;

}

// Listen for clicks on fave and visited buttons
document.addEventListener('click', clickHandler);

export default loadButtons;
