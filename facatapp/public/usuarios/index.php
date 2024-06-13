<?php
require_once("../../conf/database.php");
require_once("../../classes/Usuarios.php");
$db = new Database();
$link = $db->conectar();
$usuarios = new Usuarios($link);
$datos = $usuarios->getAll();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php 
      //  include("../includes/head.php");
    ?>
    <title>Lista de usuarios</title>
</head>

<body>
    <h2>
        Lista de usuarios
    </h2>
    <div>
        <table border="1">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Usuario</th>
                    <th colspan="2"><a href="nuevo.php">Nuevo</a></th>
                </tr>
            </thead>
            <tbody>
                <?php
                while ($r = $datos->fetch_assoc()) {
                    $id= $r['id'];
                    echo "<tr>";
                    echo "<td>" . $r['id'] . "</td>";
                    echo "<td>" . $r['user_nombre'] . "</td>";
                    echo "<td>" . $r['user_mail'] . "</td>";
                    echo "<td>" . $r['username'] . "</td>";
                    echo "<td><a href='editar.php?id=".$r['id']. "'>Editar</a></td>";
                    echo "<td><a href='borrar.php?id=".$r['id']. "'>Borrar</a></td>";
                    echo "</tr>";
                }
                ?>

            </tbody>

        </table>


    </div>
</body>

</html>