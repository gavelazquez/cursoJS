<?php
    $nombre = $_GET['nombre'];
    $edad = $_GET['edad'];
    $respuesta = $nombre." ".$edad;
    sleep(4);
    echo $respuesta;
?>