// menu-btn

// Code for hiding / showing the menu however we really don't need this functionality
const menuBtn = document.querySelector('.menu-btn');
const menuBtnShow = document.querySelector('.show');
const menu = document.querySelector('nav ul');
const sectionContent = document.querySelector('.content');
const body = document.querySelector('body');
const infotangle = document.querySelector('.infotangle');

menuBtn.addEventListener('click', () => {
  // getting the matrix value of translateX to toggle the menu

  const style = window.getComputedStyle(menu);
  //this is a 2d matrix
  //https://zellwk.com/blog/css-translate-values-in-javascript/
  const matrix = style.transform || style.webkitTransform || style.mozTransform;

  //split up the matrix into an array?
  const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');

  console.log(matrixValues.length);

  //   4 = translateX value
  //   5 = translateY value
  const x = matrixValues[4];

  // console.log(theCSSprop);

  if (x > 0) {
    menu.style.transform = 'translateX(0)';
    menuBtn.style.opacity = '24.87%';
    sectionContent.style.display = 'none';
    //stop scroll mobile - what about tablet & desktop?
    body.style.overflow = 'hidden';
    infotangle.style.display = 'none';
  } else {
    menu.style.transform = 'translateX(100%)';
    menuBtn.style.opacity = 1;
    sectionContent.style.display = 'flex';
    // only add scroll bar when necessary
    body.style.overflow = 'auto';
    infotangle.style.display = 'block';
  }
});

// ************* MOBILE **************
//below js : most likely this could be simpler but...

//.myelement is being added to the overview button by default
//when another button is clicked this default is removed and that button now has the :after bottom border

const overview = document.querySelector('.overview');
const structure = document.querySelector('.structure');
const surface = document.querySelector('.surface');

//default
overview.classList.add('myelement');

const clicked = false;
structure.addEventListener('click', (clicked) => {
  clicked = true;
  if (clicked) {
    structure.classList.add('myelement');
    overview.classList.remove('myelement');
    surface.classList.remove('myelement');
  }
});

surface.addEventListener('click', (clicked) => {
  clicked = true;
  if (clicked) {
    surface.classList.add('myelement');
    overview.classList.remove('myelement');
    structure.classList.remove('myelement');
  }
});

overview.addEventListener('click', (clicked) => {
  clicked = true;
  if (clicked) {
    overview.classList.add('myelement');
    surface.classList.remove('myelement');
    structure.classList.remove('myelement');
  }
});

var structureIsClicked = false;
var surfaceIsClicked = false;
function clickHandler(event) {
  structureIsClicked = true;
  surfaceIsClicked = true;
  if (structureIsClicked || surfaceIsClicked) {
    overview.classList.remove('myelement');
  }
}

// ************* TABLE & DESKTOP **************

const sideBtn1Mercury = document.querySelector('.overview .side-btn-1-mercury');
const sideBtn2Mercury = document.querySelector('.overview.side-btn-2-mercury');
const sideBtn3Mercury = document.querySelector('.overview.side-btn-3-mercury');

const sideBtn1Earth = document.querySelector('.side-btn-1-earth');
const sideBtn2Earth = document.querySelector('.side-btn-2-earth');
const sideBtn3Earth = document.querySelector('.side-btn-3-earth');

//default
sideBtn1Mercury.classList.add('mercuryBackGroundColor');
//sideBtn1Earth.classList.add('earthBackGroundColor');

sideBtn1Mercury.classList.remove('side-btn-1-mercury:hover');
//sideBtn1Earth.classList.remove('side-btn-1-earth:hover');

// sideBtn1Earth.classList.remove('side-btn-1-earth');
//sideBtn1Earth.style.background = 'red';

const clickedSide = false;

// mercury

sideBtn1Mercury.addEventListener('click', (clickedSide) => {
  clickedSide = true;
  if (clickedSide) {
    sideBtn1Mercury.classList.add('mercuryBackGroundColor');
    sideBtn2Mercury.classList.remove('mercuryBackGroundColor');
    sideBtn3Mercury.classList.remove('mercuryBackGroundColor');
  }
});

sideBtn2Mercury.addEventListener('click', (clickedSide) => {
  clickedSide = true;
  if (clickedSide) {
    sideBtn1Mercury.classList.remove('mercuryBackGroundColor');
    sideBtn2Mercury.classList.add('mercuryBackGroundColor');
    sideBtn3Mercury.classList.remove('mercuryBackGroundColor');
  }
});

sideBtn3Mercury.addEventListener('click', (clickedSide) => {
  clickedSide = true;
  if (clickedSide) {
    sideBtn1Mercury.classList.remove('mercuryBackGroundColor');
    sideBtn2Mercury.classList.remove('mercuryBackGroundColor');
    sideBtn3Mercury.classList.add('mercuryBackGroundColor');
  }
});

// earth

sideBtn1Earth.addEventListener('click', (clickedSide) => {
  clickedSide = true;
  if (clickedSide) {
    sideBtn1Earth.classList.add('earthBackGroundColor');
    sideBtn2Earth.classList.remove('earthBackGroundColor');
    sideBtn3Earth.classList.remove('earthBackGroundColor');
  }
});

sideBtn2Earth.addEventListener('click', (clickedSide) => {
  clickedSide = true;
  if (clickedSide) {
    sideBtn1Earth.classList.remove('earthBackGroundColor');
    sideBtn2Earth.classList.add('earthBackGroundColor');
    sideBtn3Earth.classList.remove('earthBackGroundColor');
  }
});

sideBtn3Earth.addEventListener('click', (clickedSide) => {
  clickedSide = true;
  if (clickedSide) {
    sideBtn1Earth.classList.remove('earthBackGroundColor');
    sideBtn2Earth.classList.remove('earthBackGroundColor');
    sideBtn3Earth.classList.add('earthBackGroundColor');
  }
});

//SHOW - HIDE CONTENT : show image, show text, show link

//mobile buttons

const mobileBtnOverview = document.querySelector('.overview-mobile-btn');
const mobileBtnStructure = document.querySelector('.structure-mobile-btn');
const mobileBtnGeology = document.querySelector('.geology-mobile-btn');

// mobileBtnOverview.style.background = 'red';

//tablet and desktop "side" buttons
const sideBtnOverview = document.querySelector('.side-btn-1');
const sideBtnStructure = document.querySelector('.side-btn-2');
const sideBtnGeology = document.querySelector('.side-btn-3');

//content text
const overviewContent = document.querySelector('.overview-text');
const structureContent = document.querySelector('.structure-text');
const geologyContent = document.querySelector('.geology-text');

//content img
const overviewImg = document.querySelector('.overview-img');
const structureImg = document.querySelector('.structure-img');
const geologyImg = document.querySelector('.geology-img');

//content wikipedia link
const overviewLink = document.querySelector('.overview-link');
const structureLink = document.querySelector('.structure-link');
const geologyLink = document.querySelector('.geology-link');

// MOBILE

// overview content
mobileBtnOverview.addEventListener('click', () => {
  overviewImg.style.display = 'inline-block';
  structureImg.style.display = 'none';
  geologyImg.style.display = 'none';

  overviewContent.style.display = 'block';
  structureContent.style.display = 'none';
  geologyContent.style.display = 'none';

  overviewLink.style.display = 'inline';
  structureLink.style.display = 'none';
  geologyLink.style.display = 'none';
});

//structure content
mobileBtnStructure.addEventListener('click', () => {
  overviewImg.style.display = 'none';
  structureImg.style.display = 'inline-block';
  geologyImg.style.display = 'none';

  overviewContent.style.display = 'none';
  structureContent.style.display = 'block';
  geologyContent.style.display = 'none';

  overviewLink.style.display = 'none';
  structureLink.style.display = 'inline';
  geologyLink.style.display = 'none';
});

//geology content
mobileBtnGeology.addEventListener('click', () => {
  overviewImg.style.display = 'inline-block';
  structureImg.style.display = 'none';
  geologyImg.style.display = 'inline-block';

  overviewContent.style.display = 'none';
  structureContent.style.display = 'none';
  geologyContent.style.display = 'block';

  overviewLink.style.display = 'none';
  structureLink.style.display = 'none';
  geologyLink.style.display = 'inline';
});

// TABLET & DESKTOP

// overview content
sideBtnOverview.addEventListener('click', () => {
  overviewImg.style.display = 'inline-block';
  structureImg.style.display = 'none';
  geologyImg.style.display = 'none';

  overviewContent.style.display = 'block';
  structureContent.style.display = 'none';
  geologyContent.style.display = 'none';

  overviewLink.style.display = 'inline';
  structureLink.style.display = 'none';
  geologyLink.style.display = 'none';
});

//structure content
sideBtnStructure.addEventListener('click', () => {
  overviewImg.style.display = 'none';
  structureImg.style.display = 'inline-block';
  geologyImg.style.display = 'none';

  overviewContent.style.display = 'none';
  structureContent.style.display = 'block';
  geologyContent.style.display = 'none';

  overviewLink.style.display = 'none';
  structureLink.style.display = 'inline';
  geologyLink.style.display = 'none';
});

//geology content
sideBtnGeology.addEventListener('click', () => {
  overviewImg.style.display = 'inline-block';
  structureImg.style.display = 'none';
  geologyImg.style.display = 'inline-block';

  overviewContent.style.display = 'none';
  structureContent.style.display = 'none';
  geologyContent.style.display = 'block';

  overviewLink.style.display = 'none';
  structureLink.style.display = 'none';
  geologyLink.style.display = 'inline';
});
