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

  const prLink = 'https://github.com/fgriff/rsschool-cv/pull/4';
  const item1 = '1. Верстка валидная. Document checking completed. No errors or warnings to show: +10 баллов';
  const item2 = '2. Верстка семантическая. В коде присутствуют следующие теги HTML5: header, nav, figure, figcaption, section, main, h1, h2, h3, time: +20 баллов';
  const item3 = '3. Для оформления СV используются css-стили: +10 баллов';
  const item4 = '4. Контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет тянется во всю ширину страницы: +10 баллов';
  const item5 = '5. Верстка адаптивная. До 320px включительно не появляется горизонтальная полоса прокрутки, всё содержание страницы сохраняется: +10 баллов';
  const item6 = '6. Есть адаптивное бургер-меню. Реализована плавная прокрутка по якорям: +10 баллов';
  const item7 = '7. Присутствует фото автора CV, пропорции изображения не искажены, у изображения есть атрибут alt: +10 баллов';
  const item8 = '8. Контакты для связи и перечень навыков оформлены в виде списка ul > li: +10 баллов';
  const item9 = '9. CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского: +10 баллов';
  const item10 = '10. CV содержит пример кода с подсветкой: +10 баллов';
  const item11 = '11. CV содержит изображения-ссылки на выполненные проекты. У каждого проекта есть описание. При клике по изображению страница проекта открывается в новой вкладке: +10 баллов';
  const item12 = '12. CV выполнено на английском языке: +10 баллов';
  const item13 = '13. Выполнены требования к Pull Request: +10 баллов';
  const item14 = '14. Есть видеорезюме автора CV на английском языке. В описание видео на YouTube добавлена ссылка на его транскрипцию на английском языке: +10 баллов';
  const item15 = '15. Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию: +10 баллов';

  console.log('Ссылка на Pull Request: ', prLink);
  console.log('Самооценка:');
  console.log(item1);
  console.log(item2);
  console.log(item3);
  console.log(item4);
  console.log(item5);
  console.log(item6);
  console.log(item7);
  console.log(item8);
  console.log(item9);
  console.log(item10);
  console.log(item11);
  console.log(item12);
  console.log(item13);
  console.log(item14);
  console.log(item15);
  console.log('Итого: 160 баллов');
}