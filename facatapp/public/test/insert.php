<?php
$host = "127.0.0.1";
$db = "dw2_actas";
$user = "root";
$password = "";

$link = new mysqli($host, $user, $password, $db);
if ($link->connect_error) {
    echo "la conexion fallo" . "<br>";
}
if ($_POST) {
    // print_r($_POST);
    $user_mail = $_POST['user_mail'];
    $user_nombre = $_POST['user_nombre'];
    $password = $_POST['password'];
    $username = $_POST['username'];;
    echo "<br>";
    echo $sql2 = "INSERT INTO `usuarios` ( 
        `user_mail`, `user_nombre`, `password`, 
        `username`) 
        VALUES ('" . $user_mail . "','" . $user_nombre . "',SHA1('" . $password . "'),'" . $username . "');";
    echo "<br>";
    $link->query($sql2);
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
    <!-- `user_mail`, `user_nombre`, `password`,
    `username` -->
    <form method="post" action="insert.php">
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
        <label>Password</label>
        <input type="password" name="password" id="password" placeholder="ingrese un correo electronico">
        <br><button type="submit">Enviar</button>
    </form>
</body>

</html>