window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    var logoNavbar = document.getElementById("logo-navbar");
    var logoNavbarImage = document.getElementById("logo-navbar-image");
    var logo = document.getElementById("logo");
    var sticky = navbar.offsetTop;

    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
        logoNavbar.style.display = "block";
        logo.style.display = "none";
        logoNavbarImage.src = logo.src; // Copia el src del logo del encabezado al logo de la barra de navegación
    } else {
        navbar.classList.remove("sticky");
        logoNavbar.style.display = "none";
        logo.style.display = "block";
    }
}