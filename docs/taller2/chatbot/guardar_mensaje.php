<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "c101xrr522t@";
$dbname = "desarrollocseg";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Procesar el mensaje enviado por el usuario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = $_POST["message"];
    $sender = "Usuario"; // Puedes cambiar esto según tus necesidades

    // Insertar el mensaje en la base de datos
    $sql = "INSERT INTO chat_messages (message, sender) VALUES ('$message', '$sender')";
    if ($conn->query($sql) === TRUE) {
        echo "Mensaje enviado correctamente";
    } else {
        echo "Error al enviar el mensaje: " . $conn->error;
    }
}

// Cerrar la conexión
$conn->close();
?>
