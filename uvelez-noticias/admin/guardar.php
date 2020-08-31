<?php
require_once 'conexion.php';
define ('SITE_ROOT', realpath(dirname(__FILE__)));

$nombre=$_REQUEST["titulo"];
$descripcion=$_REQUEST["descripcion"];
$fecha=$_REQUEST["fecha"];
$noticia=$_POST["noticia"];
$foto=$_FILES["imagen"]["name"];
$noticias = str_replace("'",'"',$noticia);
$ruta=$_FILES["imagen"]["tmp_name"];
$nombre_foto = str_replace(" ","",$foto);
$destino="fotos/".$nombre_foto;

    $con = Conect();
$copied = move_uploaded_file($ruta,  $destino);
//    copy($ruta,$destino);
    
    mysqli_query($con, "insert into noticias (nombre,descripcion,imagen,noticia,fecha) values('$nombre','$descripcion','$destino','$noticias','$fecha')");
    //header("Location: noticias.php");
?>