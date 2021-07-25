// menu-btn

const menuBtn = document.querySelector('.menu-btn');
const menuBtnShow = document.querySelector('.show');
const menu = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
  // getting the matrix value of translateX to toggle the menu

  const style = window.getComputedStyle(menu);
  //this is a 2d matrix
  //https://zellwk.com/blog/css-translate-values-in-javascript/
  const matrix = style.transform || style.webkitTransform || style.mozTransform;

  //split up the matrix into an array?
  const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');

  //   4 = translateX value
  //   5 = translateY value
  const x = matrixValues[4];

  // console.log(theCSSprop);

  if (x > 0) {
    menu.style.transform = 'translateX(0)';
  } else {
    menu.style.transform = 'translateX(100%)';
  }
});
