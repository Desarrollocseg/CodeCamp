document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el enlace de "Servicios" en la barra de navegación
    var serviciosLink = document.querySelector("nav a[href='#servicios']");
    // Selecciona el elemento que contiene los servicios
    var servicios = document.getElementById("servicios");

    // Agrega un evento de clic al enlace de "Servicios"
    serviciosLink.addEventListener("click", function(event) {
       // event.preventDefault(); // Evita que el enlace se comporte como un enlace normal

        // Alterna la clase 'visible' en el elemento 
        servicios.classList.toggle("visible");
    });
});
