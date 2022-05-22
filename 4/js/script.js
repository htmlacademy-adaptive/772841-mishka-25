let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
console.log(navMain);


navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


const sizeButtons = document.querySelectorAll('[data-size]');
const modal = document.querySelector('.modal');
const modalBtnClose = document.querySelector('.modal__button');

sizeButtons.forEach((button) => {
  button.addEventListener('click', (evt) => {
    modal.classList.add('modal--open');
  })
});

modalBtnClose.addEventListener('click', () => {
  modal.classList.remove('modal--open');
});

document.addEventListener('click', (evt) => {
  if(evt.target.classList.contains('modal')) {
    modal.classList.remove('modal--open');
    console.log('modal');
  }
})
