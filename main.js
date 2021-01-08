document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});



ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.seccion', {delay: 500});
ScrollReveal().reveal('.banner-seccion', {delay: 500});
ScrollReveal().reveal('.banner-seccion2', {delay: 500});