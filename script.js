// Carrocel
document.addEventListener('DOMContentLoaded', () => {
    const emblaNode = document.querySelector('.embla');
    const viewport = emblaNode.querySelector('.embla__viewport');
    const prevButton = emblaNode.querySelector('.embla__button--prev');
    const nextButton = emblaNode.querySelector('.embla__button--next');
    const embla = EmblaCarousel(viewport, { loop: true });

    prevButton.addEventListener('click', () => embla.scrollPrev());
    nextButton.addEventListener('click', () => embla.scrollNext());
});

// Menu
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li a'); // Seleciona todos os links do menu

    // Função para abrir/fechar o menu ao clicar no ícone
    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('open');
    });

    // Função para fechar o menu ao clicar em qualquer link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('open'); // Fecha o menu
        });
    });
});