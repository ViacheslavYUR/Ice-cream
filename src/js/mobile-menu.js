(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    // menuWrap: document.querySelector('[data-backdrop]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.menu.classList.toggle('is-open');
    // refs.modal.classList.toggle("backdrop--hidden");
  }

  function closeMenu() {
    const mobileLinks = Document.getElementsByClassName('js-mobile-menu__link');
    for (const mobileLink of mobileLinks) {
      mobileLink.addEventListener('click', function () {
        refs.menu.classList.remove('is-open');
      });
    }
  }
})();
