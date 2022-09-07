(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-buynow-modal-open]'),
    closeModalBtn: document.querySelector('[data-buynow-modal-close]'),
    modal: document.querySelector('[data-buynow-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--hidden');
  }
})();
