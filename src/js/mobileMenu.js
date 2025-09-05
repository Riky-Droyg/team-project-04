(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  // ⬇️ закриваємо меню при кліку на будь-який <a> всередині [data-menu]
  refs.menu.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    closeMenu();
  });

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
  }

  function closeMenu() {
    refs.menu.classList.remove('is-open');
  }
})();
