document.addEventListener("DOMContentLoaded", function() {
    $('.slick-slider').slick({
        infinite: true, // Para permitir el desplazamiento infinito
        slidesToShow: 1, // Muestra solo una tarjeta a la vez
        slidesToScroll: 1 // Desplaza solo una tarjeta a la vez
    });
});