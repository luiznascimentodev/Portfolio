// Selecione o botão do menu hambúrguer, a navbar e os links
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

// Adiciona um evento de clique no botão hambúrguer
hamburgerMenu.addEventListener('click', () => {
  // Alterna a classe 'active' para mostrar/ocultar os links
  navLinks.classList.toggle('active');
});

