//mobail nav

let burger = document.querySelector('.burger-btn');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__nav-link');

burger.addEventListener('click', function () {

    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })
})

let tabsBtn = document.querySelectorAll('.step-nav__link');
let tabsItemBox = document.querySelectorAll('.tabs-box');
let tabsImgBox = document.querySelectorAll('.work__column--image');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('step-nav__link--active')});
    e.currentTarget.classList.add('step-nav__link--active');

    tabsItemBox.forEach(function(box){ box.classList.remove('tabs-box--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-box--active');

    tabsImgBox.forEach(function(img){ img.classList.remove('work__column--active')});
    document.querySelector(`[data-target-image="${path}"]`).classList.add('work__column--active');
  })
})

// search

let search = document.querySelector('.search');
let searchClose = document.querySelector('.serach-container__close');
let searchContainer = document.querySelector('.search-container');
let searchContainerbtn = document.querySelector('.serach-container__search');

search.addEventListener('click', function () {

  searchContainer.classList.add('search-container--active');
  search.classList.add('search--disable');
})

searchClose.addEventListener('click', function () {

  searchContainer.classList.remove('search-container--active');
  search.classList.remove('search--disable');
  searchContainer.querySelector('.serach-container__input').value = '';
})

searchContainerbtn.addEventListener('click', function () {

  searchContainer.classList.remove('search-container--active');
  search.classList.remove('search--disable');
  searchContainer.querySelector('.serach-container__input').value = '';
  alert("Поиск временно не доступен.");
})

//swiper

const swiper = new Swiper('.swiper', {
  loop: true,
	pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
		clickable: true
  },
  autoplay: {
    delay: 3500,
  },
  mousewheel: {
    invert: true,
    eventsTarget: '.swiper-pagination',
  },
  a11y: {
    paginationBulletMessage: 'Переход к слайду {{index}}',
  },
});

// accordion

new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});

