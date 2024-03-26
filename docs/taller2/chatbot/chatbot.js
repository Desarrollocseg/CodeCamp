document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("chatbot-toggle");
    const chatbot = document.getElementById("chatbot");
    const inputField = document.getElementById("chatbot-input");
    const sendButton = document.getElementById("chatbot-send");
    const chatbotBody = document.getElementById("chatbot-body");

    toggleButton.addEventListener("click", function() {
        chatbot.classList.toggle("closed");
    });

    sendButton.addEventListener("click", function() {
        const message = inputField.value.trim();
        if (message !== "") {
            sendMessage(message);
            inputField.value = "";
             // Enviar el mensaje al servidor
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "guardar_mensaje.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText); // Manejar la respuesta del servidor si es necesario
            }
        };
        xhr.send("message=" + encodeURIComponent(message));
        }
    });

    function sendMessage(message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", "sent");
        messageElement.textContent = message;
        chatbotBody.appendChild(messageElement);
        chatbotBody.scrollTop = chatbotBody.scrollHeight; // Desplazar el chat hacia abajo automáticamente
        receiveMessage("Lo siento, aún no puedo responder a eso."); // Simular respuesta del chatbot
    }

    function receiveMessage(message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", "received");
        messageElement.textContent = message;
        chatbotBody.appendChild(messageElement);
        chatbotBody.scrollTop = chatbotBody.scrollHeight; // Desplazar el chat hacia abajo automáticamente
    }
});
