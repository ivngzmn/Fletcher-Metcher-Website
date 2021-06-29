const menuBtn = document.querySelector('.menu-btn');
const showCase = document.querySelector('.showcase')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    showCase.classList.toggle('active');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    showCase.classList.remove('active');
    menuOpen = false;
  }
});