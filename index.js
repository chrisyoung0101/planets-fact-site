// menu-btn

// Code for hiding / showing the menu however we really don't need this functionality
const menuBtn = document.querySelector('.menu-btn');
const menuBtnShow = document.querySelector('.show');
const menu = document.querySelector('nav ul');
const sectionContent = document.querySelector('.content');
const body = document.querySelector('body');

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
    menuBtn.style.opacity = '24.87%';
    sectionContent.style.display = 'none';
    body.style.overflow = 'hidden';
  } else {
    menu.style.transform = 'translateX(100%)';
    menuBtn.style.opacity = 1;
    sectionContent.style.display = 'flex';
    // only add scroll bar when necessary
    body.style.overflow = 'auto';
  }
});
