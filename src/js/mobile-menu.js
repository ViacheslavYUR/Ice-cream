(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    bntLinks: document.querySelectorAll('.js-mobile-menu__link'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.menu.classList.toggle('is-open');
  }

  refs.bntLinks.forEach(btnlink => {
    btnlink.addEventListener('click', closeMobileMenu);
  });
  function closeMobileMenu(e) {
    e.preventDefault();
    refs.menu.classList.remove('is-open');
    document.body.style.overflow = 'auto';
  }
})();
