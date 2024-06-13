<?php
require_once("../../conf/database.php");
require_once("../../classes/Usuarios.php");
if ($_POST) {
    $user_mail = $_POST['user_mail'];
    $user_nombre = $_POST['user_nombre'];
    $username = $_POST['username'];;
    $db = new Database();
    $link = $db->conectar();
    $usuarios = new Usuarios($link);
    $usuarios->insert($user_nombre, $user_mail, $username);
    header('location: index.php');
} else {
    // echo "no se recibio un id";
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <form method="post" action="nuevo.php">
        <br>
        <label>Correo</label>
        <input type="text" name="user_mail" id="user_mail" placeholder="ingrese un correo electronico">
        <br>
        <label>Nombre y apellido</label>
        <input type="text" name="user_nombre" id="user_nombre" placeholder="ingrese un nombre y apellido">
        <br>
        <label>Nombre de usuario</label>
        <input type="text" name="username" id="username" placeholder="ingrese un nombre de usuario">
        <br>
        <br><button type="submit">Enviar</button><a href="index.php">Volver</a>
    </form>

</body>

</html>