<?php
require_once("../../conf/database.php");
require_once("../../classes/Usuarios.php");
$db= new Database();
$link=$db->conectar();
$usuarios= new Usuarios($link);
$datos=$usuarios->getAll();
//print_r($datos);
//echo "<pre>";


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de usuarios</title>
</head>
<body>
    <h2>
        Lista de usuarios
    </h2>
    <div>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Usuario</th>
                </tr>
            </thead>
            <tbody>
                <?php
                while ($r = $datos->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td>".$r['id']. "</td>";
                    echo "<td>" . $r['user_nombre'] . "</td>";
                    echo "<td>" . $r['user_mail'] . "</td>";
                    echo "<td>" . $r['username'] . "</td>";
                    echo "</tr>";
                }
                
                
                ?>

            </tbody>

        </table>


    </div>
</body>
</html>