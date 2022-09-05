(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-overlay-open-2]'),
    closeMenuBtn: document.querySelector('[data-overlay-close-2]'),
    menu: document.querySelector('[data-menu-overlay-2]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();
