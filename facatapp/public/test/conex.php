<?php
$host="127.0.0.1";
$db="dw2_actas";
$user="root";
$password="";

$link= new mysqli($host,$user,$password,$db);
if ($link->connect_error)
    {
        echo "la conexion fallo". "<br>";
    }
    else
    {
        echo "se conecto". "<br>";
    }
$userid=2;    
echo $sql="select * from usuarios ";
$resultado=$link->query($sql);
if ($resultado->num_rows>0) 
    {
        echo "se devolvieron ". $resultado->num_rows." registros "."<br>";
        while ($reg=$resultado->fetch_assoc())
        {
            echo "Nombre: ".$reg['user_nombre']." Correo: ". $reg['user_mail']."<br>";
        }
    
    } else {  echo "no se devolvieron registros "; }

    // INSERT INTO `usuarios` (
        // `user_activo`, `created_date_time`, 
        // `user_mail`, `user_nombre`, `password`, 
        // `updated_date_time`, `username`) 
        // VALUES ('1', 
        // '2024-06-26 20:17:44.000000', 'correo@correo.com', 
        // 'Usuario Nuevo', SHA1('password'), NULL, 'usuario');  
$uid=4;        
$user_activo ="";
$user_mail = "alejandrodutil969@gmail.com";
$user_nombre = "Alejandro Dutil";
$password = "alegato123";
$updated_date_time = "";
$username = "ale_dutil9";
echo "<br>";
echo $sql2="INSERT INTO `usuarios` ( 
        `user_mail`, `user_nombre`, `password`, 
        `username`) 
        VALUES ('".$user_mail."','". $user_nombre."',SHA1('". $password."'),'". $username."');";
echo "<br>";
//$link->query($sql2);

// UPDATE `usuarios`
//  SET `user_mail` = 'email@', 
//  `user_nombre` = 'nombre y apellido@', 
//  `password` = MD5('contraseñáx'), 
//  `username` = 'usuarionewxx'
//   WHERE `usuarios`.`id` = 4
$uid=3;
echo $sql3="UPDATE `usuarios` SET ".
      "`user_mail` = ' ". $user_mail.
      "', user_nombre ='" .$user_nombre.
      "',password = SHA1('".$password.
      "'), `username` = '".$username."' WHERE `usuarios`.`id` =".$uid;
//$link->query($sql3);
echo "<br>";
echo $sql4="delete from usuarios where id=".$uid;
$link->query($sql4);
?>
