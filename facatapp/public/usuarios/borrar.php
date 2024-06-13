<?php
require_once("../../conf/database.php");
require_once("../../classes/Usuarios.php");
if ($_GET) 
{
    $id=$_GET['id'];
    $db = new Database();
    $link = $db->conectar();
    $usuarios = new Usuarios($link);
    $usuarios->deleteById($id);
    header('location: index.php');
} else {
    echo "no se recibio un id";
}

?>