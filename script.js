const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// Seleciona o botão
const scrollToTopButton = document.getElementById('scrollToTop');

// Mostra o botão ao rolar para baixo
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { // Exibe o botão após 200px de rolagem
    scrollToTopButton.classList.add('visible');
  } else {
    scrollToTopButton.classList.remove('visible');
  }
});

// Função para rolar até o topo ao clicar no botão
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Rola suavemente
  });
});
