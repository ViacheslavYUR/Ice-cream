const refs = {
  cowImg: document.querySelector('.about__img-wrapper'),
  productPlate: document.querySelector('.hero__product-img'),
};

refs.cowImg.addEventListener('mouseover', () =>
  refs.cowImg.classList.add('animate__animated', 'animate__bounce')
);

refs.cowImg.addEventListener('mouseout', () =>
  refs.cowImg.classList.remove('animate__animated', 'animate__bounce')
);

refs.productPlate.addEventListener('mouseover', ()=>{
  refs.productPlate.classList.add('animate__rotateIn')
})

refs.productPlate.addEventListener('mouseout', () =>
refs.productPlate.classList.remove('animate__rotateIn')
);