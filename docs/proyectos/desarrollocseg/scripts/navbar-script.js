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
        //logo.style.display = "none";
        logoNavbarImage.src = logo.src; // Copia el src del logo del encabezado al logo de la barra de navegación
    } else {
        navbar.classList.remove("sticky");
        logoNavbar.style.display = "none";
        logo.style.display = "block";
    }
}

document.getElementById('menu-toggle').addEventListener('click', function() {
    var menuItems = document.getElementById('menu-items');
    menuItems.style.display = (menuItems.style.display === 'block') ? 'none' : 'block';
});

// Escuchar el evento de cambio de tamaño de la ventana
window.addEventListener('resize', function() {
    var menuItems = document.getElementById('menu-items');
    // Verificar el ancho de la ventana
    if (window.innerWidth > 601) { // Cambia este valor según tu punto de ruptura para escritorio
        menuItems.style.display = 'flex'; // Restablecer a 'flex' en escritorio
    } else {
        menuItems.style.display = 'none'; // Ocultar el menú en dispositivos móviles por defecto
    }
});
