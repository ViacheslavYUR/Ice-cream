!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var a="Expected a function",r=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,i=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,f=u||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return f.Date.now()};function b(e,t,n){var o,r,d,c,i,l,u=0,s=!1,f=!1,m=!0;if("function"!=typeof e)throw new TypeError(a);function b(t){var n=o,a=r;return o=r=void 0,u=t,c=e.apply(a,n)}function h(e){return u=e,i=setTimeout(S,t),s?b(e):c}function M(e){var n=e-l;return void 0===l||n>=t||n<0||f&&e-u>=d}function S(){var e=y();if(M(e))return w(e);i=setTimeout(S,function(e){var n=t-(e-l);return f?p(n,d-(e-u)):n}(e))}function w(e){return i=void 0,m&&o?b(e):(o=r=void 0,c)}function q(){var e=y(),n=M(e);if(o=arguments,r=this,l=e,n){if(void 0===i)return h(l);if(f)return i=setTimeout(S,t),b(l)}return void 0===i&&(i=setTimeout(S,t)),c}return t=L(t)||0,g(n)&&(s=!!n.leading,d=(f="maxWait"in n)?v(L(n.maxWait)||0,t):d,m="trailing"in n?!!n.trailing:m),q.cancel=function(){void 0!==i&&clearTimeout(i),u=0,o=l=r=i=void 0},q.flush=function(){return void 0===i?c:w(y())},q}function g(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function L(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(g(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var a=c.test(e);return a||i.test(e)?l(e.slice(2),a?2:8):d.test(e)?NaN:+e}n=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(a);return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:o,maxWait:t,trailing:r})};var h=document.querySelectorAll('a[href^="#"]'),M=document.querySelector(".scroll-up-btn"),S=!0,w=!1,q=void 0;try{for(var B,k=function(e,t){var n=t.value;n.addEventListener("click",(function(e){e.preventDefault();var t=n.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}))},E=h[Symbol.iterator]();!(S=(B=E.next()).done);S=!0)k(0,B)}catch(e){w=!0,q=e}finally{try{S||null==E.return||E.return()}finally{if(w)throw q}}M.classList.add("js-hidden"),window.addEventListener("scroll",n((function(){window.scrollY>400?M.classList.remove("js-hidden"):window.scrollY<=400&&M.classList.add("js-hidden")}),500)),function(){var e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),bntLinks:document.querySelectorAll(".js-mobile-menu__link")};function t(){document.body.classList.toggle("modal-open"),e.menu.classList.toggle("is-open")}function n(t){t.preventDefault(),e.menu.classList.remove("is-open"),document.body.style.overflow="auto"}e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t),e.bntLinks.forEach((function(e){e.addEventListener("click",n)}))}(),function(){var e={openModalBtn:document.querySelector("[data-read-modal-open]"),closeModalBtn:document.querySelector("[data-read-modal-close]"),modal:document.querySelector("[data-read-modal]")};function t(){e.modal.classList.toggle("backdrop--hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),function(){var e={openModalBtn:document.querySelector("[data-location-modal-open]"),closeModalBtn:document.querySelector("[data-location-modal-close]"),modal:document.querySelector("[data-location-modal]")};function t(){e.modal.classList.toggle("backdrop--hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),function(){var e={openModalBtn:document.querySelector("[data-ingredients-modal-open]"),closeModalBtn:document.querySelector("[data-ingredients-modal-close]"),modal:document.querySelector("[data-ingredients-modal]")};function t(){e.modal.classList.toggle("backdrop--hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),function(){var e={openModalBtn:document.querySelector("[data-buynow-modal-open]"),closeModalBtn:document.querySelector("[data-buynow-modal-close]"),modal:document.querySelector("[data-buynow-modal]")};function t(){e.modal.classList.toggle("backdrop--hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),function(){var e={openModalBtn:document.querySelector("[data-franchise-modal-open]"),closeModalBtn:document.querySelector("[data-franchise-modal-close]"),modal:document.querySelector("[data-franchise-modal]")};function t(){e.modal.classList.toggle("backdrop--hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}();var _={cowImg:document.querySelector(".about__img-wrapper"),productPlate:document.querySelector(".hero__product-img")};_.cowImg.addEventListener("mouseover",(function(){return _.cowImg.classList.add("animate__animated","animate__bounce")})),_.cowImg.addEventListener("mouseout",(function(){return _.cowImg.classList.remove("animate__animated","animate__bounce")})),_.productPlate.addEventListener("mouseover",(function(){_.productPlate.classList.add("animate__rotateIn")})),_.productPlate.addEventListener("mouseout",(function(){return _.productPlate.classList.remove("animate__rotateIn")}))}();
//# sourceMappingURL=index.320f1b61.js.map