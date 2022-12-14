(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-read-modal-open]"),
    closeModalBtn: document.querySelector("[data-read-modal-close]"),
    modal: document.querySelector("[data-read-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("backdrop--hidden");
  }
})();