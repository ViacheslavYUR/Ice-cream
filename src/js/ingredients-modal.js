(() => {
  const refs = {
    openModalBtn: document.querySelector("[ingredients-modal-open]"),
    closeModalBtn: document.querySelector("[ingredients-modal-close]"),
    modal: document.querySelector("[ingredients-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("backdrop--hidden");
  }
})();