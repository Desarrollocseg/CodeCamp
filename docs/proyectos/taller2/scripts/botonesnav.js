// Obtener todos los elementos de la lista
var menuItems = document.querySelectorAll('.menu-item');

// Agregar event listeners para cada elemento de la lista
menuItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
        // Prevenir el comportamiento predeterminado de los enlaces
        event.preventDefault();
        
        // Agregar la clase 'disabled' al elemento para simular el estado deshabilitado
        item.classList.add('disabled');
    });
});
