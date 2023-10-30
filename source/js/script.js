const nav = document.querySelector('.nav');
const menuButton = document.querySelector('.toggle');

nav.classList.add('nav--closed');
menuButton.addEventListener('click',() => {
  nav.classList.toggle('nav--closed');
  nav.classList.toggle('nav--opened');
  });
