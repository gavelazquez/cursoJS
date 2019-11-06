<?php
    $nombre = $_POST['nombre'];
    $edad = $_POST['edad'];
    $respuesta = $nombre." ".$edad;
    sleep(4);
    echo $respuesta;
?>