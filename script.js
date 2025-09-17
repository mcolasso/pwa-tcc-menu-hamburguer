// Este bloco de código registra o Service Worker para a PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => {
        console.log('Service Worker registrado com sucesso:', reg);
      })
      .catch(err => {
        console.log('Falha no registro do Service Worker:', err);
      });
  });
}

// Ativa o AOS (animação ao rolar)
AOS.init();

// Script para o menu hambúrguer
const hamburguer = document.getElementById('hamburguer');
const nav = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('#menu a');

function toggleMenu() {
  hamburguer.classList.toggle('open');
  nav.classList.toggle('open');
  overlay.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
}

hamburguer.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu); // Fecha o menu ao clicar no overlay

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      toggleMenu(); // Fecha o menu se for mobile
    }
  });
});

// Script para a barra de navegação que muda ao rolar
const header = document.querySelector('header');
let mainTop = document.querySelector('main').offsetTop;

function handleScroll() {
  if (window.scrollY >= mainTop) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', () => {
  mainTop = document.querySelector('main').offsetTop; // Recalcula a posição do main
});