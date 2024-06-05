<?php
require_once("includes/funciones.php");

echo $_GET['valor1']."<br>";

echo $_POST['info'];
?>



<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>

<body>
    <div>
        <?php include("includes/header.php"); ?>
    </div>
    <div>
        <h1> <?php saludo(" valor "); ?></h1>
    </div>
    <form method="POST">
        <input type="text" name="info" id="">

        <button type="submit">enviar</button>
    </form>
</body>

</html>