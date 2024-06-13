<?php
require_once("../../conf/database.php");
require_once("../../classes/Usuarios.php");
$db = new Database();
$link = $db->conectar();
$usuarios = new Usuarios($link);
if ($_POST) {
    $id = $_POST['id'];
    $user_mail = $_POST['user_mail'];
    $user_nombre = $_POST['user_nombre'];
    $username = $_POST['username'];;
    $usuarios->update($id,$user_nombre, $user_mail, $username);
    header('location: index.php');
} elseif ($_GET) {
    $id = $_GET['id'];
    $dato = $usuarios->getById($id);
    $d = $dato->fetch_assoc();
   // print_r($d);
} else {
    echo "no se recibio un id";
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

    <form method="post" action="editar.php">
        <br>
        <label>Correo</label>
        <input type="hidden" name="id" id="id" value="<?php echo $d["id"];  ?>">
        <input type="text" value="<?php echo $d["user_mail"];  ?>" name="user_mail" id="user_mail" placeholder="ingrese un correo electronico">
        <br>
        <label>Nombre y apellido</label>
        <input type="text" value="<?php echo $d["user_nombre"];  ?>" name="user_nombre" id="user_nombre" placeholder="ingrese un nombre y apellido">
        <br>
        <label>Nombre de usuario</label>
        <input type="text" value="<?php echo $d["username"];  ?>" name="username" id="username" placeholder="ingrese un nombre de usuario">
        <br>
        <br><button type="submit">Enviar</button>
        <a href="index.php">Volver</a>
    </form>

</body>

</html>