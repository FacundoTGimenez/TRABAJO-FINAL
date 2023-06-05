document.addEventListener('DOMContentLoaded', function() {

    eventListeners();

});

function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive() {
    let navegacion = document.querySelector('.navegacion');

    navegacion.classList.toggle('mostrar')
}