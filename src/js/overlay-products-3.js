(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-overlay-open-3]'),
    closeMenuBtn: document.querySelector('[data-overlay-close-3]'),
    menu: document.querySelector('[data-menu-overlay-3]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();
