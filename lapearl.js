

const burger1 = document.querySelector('.bar');
const burger2 = document.querySelector('.hex');
const navBar = document.querySelector('.sub-nav');

burger1.addEventListener('click', () => {
  navBar.classList.toggle('sidebar');
  burger1.classList.toggle('to-hide');
  burger2.classList.toggle('to-show');
});

burger2.addEventListener('click', () => {
    navBar.classList.toggle('sidebar');
    burger1.classList.remove('to-hide');
    burger2.classList.remove('to-show');
  });