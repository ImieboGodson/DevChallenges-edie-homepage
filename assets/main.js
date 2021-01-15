const togglerOpen = document.querySelector('.fa-bars');
const togglerClose = document.querySelector('.fa-times');
const toggleMenu = document.querySelector('.navlinks-wrapper');

const toggleFunction = () => {
    toggleMenu.classList.toggle('active');
}

togglerOpen.addEventListener('click', toggleFunction);
togglerClose.addEventListener('click', toggleFunction);