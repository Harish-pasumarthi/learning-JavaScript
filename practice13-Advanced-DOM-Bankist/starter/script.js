'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // ------------OLD SCHOOL WAY------------
  // const s1coords = section1.getBoundingClientRect();
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // ------------------MODERN WAY SMOOTH SCROLLING---------------
  section1.scrollIntoView({ behavior: 'smooth' });
});

// NORMAL WAY OF IMPLEMENTING SMOOTH SCROLLING FOR LIST OF ELEMENTS WITHOUT EVENT DELIOGATION

// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// USING THE EVENT DELIGATION
document.querySelector('.nav__links').addEventListener('click', function (e) {
  // MATCHING STATEGY
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//-------------------------------------------------------------------
// CREATING TABBED COMPONENT
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelectorAll('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

//---BAD PRACTICE---
// tabs.forEach(t =>
//   t.addEventListener('click', () => {
//     console.log('hi');
//   })
// );
//-------------------------------------------------------------------
