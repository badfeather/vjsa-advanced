/*!
 * Project: w5p2
 * Package: vjsa-advanced
 * Version: 1.0.0
 * Description: VJSA Advanced Academy Projects
 * Copyright:  2022
 * License: ISC
 */
!function(){"use strict";let t="places_faves";document.addEventListener("click",(function(e){let a=e.target.closest("[data-fave]");if(!a)return;let r=a.getAttribute("data-fave");"true"===a.getAttribute("aria-pressed")?(a.setAttribute("aria-pressed","false"),function(e){let a=JSON.parse(localStorage.getItem(t))||{};delete a[e],localStorage.setItem(t,JSON.stringify(a))}(r)):(a.setAttribute("aria-pressed","true"),function(e){let a=JSON.parse(localStorage.getItem(t))||{};a[e]=!0,localStorage.setItem(t,JSON.stringify(a))}(r))})),function(){let e=document.querySelector("[data-controls]");if(!e)return;let a=e.getAttribute("data-controls");e.innerHTML=`<p>\n\t\t\t<button data-fave="${a}" aria-pressed="${function(e){return(JSON.parse(localStorage.getItem(t))||{})[e]}(a)?"true":"false"}">\n\t\t\t\t<span aria-hidden="true">♥</span> Favorite\n\t\t\t</button>\n\t\t</p>`}()}();
//# sourceMappingURL=place.js.map
