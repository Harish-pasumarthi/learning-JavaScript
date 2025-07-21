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
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

//---BAD PRACTICE---
// tabs.forEach(t =>
//   t.addEventListener('click', () => {
//     console.log('hi');
//   })
// );
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  //GUARD CLASS
  if (!clicked) return;

  //if clicked--Remove active class to all tabs and content
  //tab active remove
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  //content active remove
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));

  //Add active class to clicked TAB
  clicked.classList.add('operations__tab--active');

  //iAdd active class to content according to clicked tab
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
//-------------------------------------------------------------------

//-----------------------------------------------------------------
//MENU FADE ANIMATION
const nav = document.querySelector('.nav');

nav.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    console.log(link);
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = 0.5;
      }
    });
  }
});

nav.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    console.log(link);
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = 1;
    });
  }
});
