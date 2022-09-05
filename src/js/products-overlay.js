(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-overlay-open]'),
    closeMenuBtn: document.querySelector('[data-overlay-close]'),
    menu: document.querySelector('[data-menu-overlay]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();
