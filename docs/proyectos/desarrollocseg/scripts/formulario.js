


// Manejar el envío del formulario de contacto
document.getElementById("contactform").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    // Obtener los datos del formulario
    var formData = new FormData(this);

    // Enviar datos a Formspree
    fetch(this.action, {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json"
        }
    })
    .then(response => {
        if (response.ok) {
            alert("¡Mensaje enviado! Te responderemos pronto.");
            this.reset(); // Limpiar el formulario después del envío
        } else {
            throw new Error("Error al enviar el mensaje.");
        }
    })
    .catch(error => {
        alert("Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.");
        console.error(error);
    });
});
