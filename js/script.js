window.onload = () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__menu');
  const menuItems = document.querySelectorAll('.menu__item');

  burger.addEventListener('click', () => {
    burger.classList.toggle('menu-opened');
    burger.classList.toggle('fixed');
    menu.classList.toggle('active');
  });

  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      burger.classList.remove('menu-opened');
      burger.classList.remove('fixed');
      menu.classList.remove('active');
      item.children[0].click();
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 849) {
      burger.classList.remove('menu-opened');
      burger.classList.remove('fixed');
      menu.classList.remove('active');
    };
  });
}