const throttle = require('lodash.throttle');

const smoothLinks = document.querySelectorAll('a[href^="#"]');
const scrollBtn = document.querySelector('.scroll-up-btn');

for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', e => {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

scrollBtn.classList.add('js-hidden');
window.addEventListener('scroll', throttle(onScroll, 500));

function onScroll() {
  if (window.scrollY > 400) {
    scrollBtn.classList.remove('js-hidden');
  } else if (window.scrollY <= 400) {
    scrollBtn.classList.add('js-hidden');
  }
}

