/*!
 * Project: w5p2
 * Package: vjsa-advanced
 * Version: 1.0.0
 * Description: VJSA Advanced Academy Projects
 * Copyright:  2022
 * License: ISC
 */
!function(){"use strict";function e(e){return(JSON.parse(localStorage.getItem("places_faves"))||{})[e]}!function(){let t=document.querySelectorAll("[data-place]"),a=document.createElement("span");a.setAttribute("aria-label","(Favorite)"),a.textContent=" ♥";for(let l of t){if(!e(l.getAttribute("data-place")))continue;let t=l.querySelector(".place-title");t&&t.append(a.cloneNode(!0))}}()}();
//# sourceMappingURL=home.js.map
