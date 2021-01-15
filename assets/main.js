const togglerOpen = document.querySelector('.fa-bars');
const togglerClose = document.querySelector('.fa-times');
const toggleMenu = document.querySelector('.navlinks-wrapper');
const dropdownLinks = document.querySelectorAll('.top-bar-link')

const toggleFunction = () => {
    toggleMenu.classList.toggle('active');
}

const removeFunction = () => {
    toggleMenu.classList.remove('active');
}

togglerOpen.addEventListener('click', toggleFunction);
togglerClose.addEventListener('click', toggleFunction);
dropdownLinks.forEach(dLink => dLink.addEventListener('click', removeFunction));