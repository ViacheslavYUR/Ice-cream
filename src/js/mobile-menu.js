(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.menu.classList.toggle('is-open');
  }
  const btnRefs = document.querySelectorAll('.js-mobile-menu__link');
  for (const btnRef of btnRefs) {
    btnRef.addEventListener('click', closeMobileMenu);
    function closeMobileMenu() {
      refs.menu.classList.remove('is-open');
    }
  }
})();
