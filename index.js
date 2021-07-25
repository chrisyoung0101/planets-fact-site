// menu-btn

const menuBtn = document.querySelector('.menu-btn');
const menuBtnShow = document.querySelector('.show');
const menu = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
  menu.style.transform = 'translateX(0)';
  menuBtn.classList.add('show');
});

menuBtnShow.addEventListener('click', () => {
  menu.style.transform = 'translateX(100%)';
});
