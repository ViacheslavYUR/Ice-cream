(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-ingredients-modal-open]"),
    closeModalBtn: document.querySelector("[data-ingredients-modal-close]"),
    modal: document.querySelector("[data-ingredients-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("backdrop--hidden");
  }
})();