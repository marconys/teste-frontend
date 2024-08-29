
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {

  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
