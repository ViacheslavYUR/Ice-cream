const e=document.querySelectorAll('a[href^="#"]');for(let n of e)n.addEventListener("click",(function(e){e.preventDefault();const o=n.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})}));(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};function n(){document.body.classList.toggle("modal-open"),e.menu.classList.toggle("is-open")}e.openMenuBtn.addEventListener("click",n),e.closeMenuBtn.addEventListener("click",n)})(),(()=>{const e={openModalBtn:document.querySelector("[read-modal-open]"),closeModalBtn:document.querySelector("[read-modal-close]"),modal:document.querySelector("[read-modal]")};function n(){e.modal.classList.toggle("backdrop--hidden")}e.openModalBtn.addEventListener("click",n),e.closeModalBtn.addEventListener("click",n)})(),(()=>{const e={openModalBtn:document.querySelector("[location-modal-open]"),closeModalBtn:document.querySelector("[location-modal-close]"),modal:document.querySelector("[location-modal]")};function n(){e.modal.classList.toggle("backdrop--hidden")}e.openModalBtn.addEventListener("click",n),e.closeModalBtn.addEventListener("click",n)})(),(()=>{const e={openModalBtn:document.querySelector("[ingredients-modal-open]"),closeModalBtn:document.querySelector("[ingredients-modal-close]"),modal:document.querySelector("[ingredients-modal]")};function n(){e.modal.classList.toggle("backdrop--hidden")}e.openModalBtn.addEventListener("click",n),e.closeModalBtn.addEventListener("click",n)})(),(()=>{const e={openMenuBtn:document.querySelector("[data-overlay-open]"),closeMenuBtn:document.querySelector("[data-overlay-close]"),menu:document.querySelector("[data-menu-overlay]")};function n(){e.menu.classList.toggle("is-open")}e.openMenuBtn.addEventListener("click",n),e.closeMenuBtn.addEventListener("click",n)})(),(()=>{const e={openMenuBtn:document.querySelector("[data-overlay-open-2]"),closeMenuBtn:document.querySelector("[data-overlay-close-2]"),menu:document.querySelector("[data-menu-overlay-2]")};function n(){e.menu.classList.toggle("is-open")}e.openMenuBtn.addEventListener("click",n),e.closeMenuBtn.addEventListener("click",n)})(),(()=>{const e={openMenuBtn:document.querySelector("[data-overlay-open-3]"),closeMenuBtn:document.querySelector("[data-overlay-close-3]"),menu:document.querySelector("[data-menu-overlay-3]")};function n(){e.menu.classList.toggle("is-open")}e.openMenuBtn.addEventListener("click",n),e.closeMenuBtn.addEventListener("click",n)})();
//# sourceMappingURL=index.917233af.js.map