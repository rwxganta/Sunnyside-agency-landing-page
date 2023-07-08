const menuBtn = document.getElementById('menuBtn');
const navMenu = document.querySelector('.menu');


menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('invisible');
});
