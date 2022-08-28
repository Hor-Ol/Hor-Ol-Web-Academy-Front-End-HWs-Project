// ADDING BUTTONS AND THE MECHANICS FOR REVIEW SLIDER SCROLL

let btnLeft = document.querySelector('.btn-left');

let btnRight = document.querySelector('.btn-right');

let reviews = document.querySelector('.reviews-section-container');

let initial = 0;

btnLeft.addEventListener('click', function (e) {
  if (initial <= -2200) {
    reviews.style.transform = `translateX(${initial}px)`;
  } else {
    initial = initial - 100;
    reviews.style.transform = `translateX(${initial}px)`;
  }
});

btnRight.addEventListener('click', function (e) {
  if (initial >= 0) {
    reviews.style.transform = `translateX(0px)`;
    console.log(initial);
  } else {
    initial = initial + 150;
    reviews.style.transform = `translateX(${initial}px)`;
  }
});

// ADDING BUTTONS AND THE MECHANICS FOR BURGER MENU OPENING AND CLOSING

let width = window.innerWidth;

let burgerBtn = document.querySelector('.header-burger');

let burgerClsBtn = document.querySelector('.header-close');

let hiddenMenu = document.querySelector('.main-nav');

burgerBtn.addEventListener('click', function (e) {
  if (window.innerWidth <= 550) {
    hiddenMenu.style.transform = 'translateX(-100%)';
    burgerClsBtn.style.display = `block`;
    burgerBtn.style.display = 'none';
  }
});

burgerClsBtn.addEventListener('click', function (e) {
  if (window.innerWidth <= 550) {
    hiddenMenu.style.transform = 'translateX(+100%)';
    burgerClsBtn.style.display = `none`;
    burgerBtn.style.display = 'block';
  }
});

let navListLogo = document.querySelector('.main-nav-link-logo');

window.addEventListener('resize', function (e) {
  if (window.innerWidth > 550) {
    hiddenMenu.style = '';
    burgerBtn.style = '';
  }
});

let linkButtons = document.querySelectorAll('.main-nav-link');

for (let i = 0; i < linkButtons.length; i++) {
  linkButtons[i].addEventListener('click', function (e) {
    if (window.innerWidth <= 550) {
      hiddenMenu.style.transform = 'translateX(+100%)';
      burgerClsBtn.style.display = `none`;
      burgerBtn.style.display = 'block';
    }
  });
}
