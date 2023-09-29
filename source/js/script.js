const menuButton = document.querySelector('.toggle');
const navList = document.querySelector('.nav-list');


menuButton.addEventListener('click', () => {
navList.classList.add('nav-list--opened');
//navList.classList.toggle('nav-list--closed');
});
