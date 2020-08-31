<!DOCTYPE html>
<html>
    <?php
    require_once("js/bd_function.php");
    
    $codigo = $_GET["codigo"];
    
    $link = Conect();
    
        $sql = "SELECT * FROM noticias WHERE id = $codigo";
        $result = mysqli_query($link, $sql) or die(mysqli_error($link));
        while ($field = mysqli_fetch_array($result)) {
            $nombre = $field['nombre'];
            $id = $field['id'];
            $descripcion = $field['descripcion'];
            $imagen = $field['imagen'];
            $noticia = $field['noticia'];
            $fecha_complete = strtotime($field['fecha']);
        }
    
    ?>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <meta name="format-detection" content="telephone=no" />
    <link rel="shortcut icon" type="image/x-icon" href="images/favicon/favicon.png" />
    <title>Detalle Noticias</title>
    <link rel="stylesheet" type="text/css" media="screen" href="css/lib/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" media="screen" href="fonts/font-awesome-4.4.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" media="screen" href="vendors/jquery-ui-1.11.4/jquery-ui.min.css">
    <link rel="stylesheet" type="text/css" media="screen" href="vendors/jcarousel/css/jquery.jcarousel.css">
    <link href="vendors/video-js/video-js.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" media="screen" href="css/style.css" />
</head>

<body>
    <div class="loader">
        <div class="loader_inner"></div>
    </div>
    <div class="menu-fijo menu-ppal">

    </div>
    <div class="home-banner style-4" id="margin-menu" style="background: url(images/banners/noticias_banner.jpg) no-repeat center;background-size: 100% 100%;">
        <div class="container">
            <div class="banner-content">
                <div class="banner-message">
                    <div class="banner-entry">
                        <span class="entry-title">Detalle Noticia</span>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="content" class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="breadcrumbs">
                        <span class="clickable"><a href="index.html">Inicio</a></span>
                        <span class="delimiter">/</span>
                        <span class="active-page">Detalle Noticia</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <div class="blog-content column-3">
                        <div class="row" id="notice-info">
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="scroll-container">
        <div class="container">
            <a href="noticias.html#" class="scroll-top-btn"><i class="fa fa-angle-double-up"></i></a>
        </div>
    </div>
    <footer class="footer footer-ppal">

    </footer>
    <script type="text/javascript" src="js/libs/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
        crossorigin="anonymous"></script>
    <script type="text/javascript" src="vendors/jquery-ui-1.11.4/jquery-ui.min.js"></script>
    <script type="text/javascript" src="vendors/languageswitcher/languageswitcher.js"></script>
    <script type="text/javascript" src="vendors/jcarousel/js/jquery.jcarousel.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
    <script type="text/javascript" src="vendors/video-js/video.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    <script type="text/javascript" src="js/menu.js"></script>
    <?php echo "<script>var titulo =' " . $nombre . "'</script>"; ?>
    <?php echo "<script>var id =' " . $id . "'</script>"; ?>
    <?php echo "<script>var descripcion =' " . $descripcion . "'</script>"; ?>
    <?php echo "<script>var imagen ='" . $imagen . "'</script>"; ?>
    <?php echo "<script>var noticia =` " . $noticia . "`</script>"; ?>
    <?php echo "<script> var anio = ".date('Y', $fecha_complete)."</script>";?>
    <?php echo "<script> var mes = ".date('m', $fecha_complete)."</script>";?>
    <?php echo "<script> var dia = ".date('d', $fecha_complete)."</script>";?>
    <script>
        var imagen = 'http://biinyu.com.co/uribevelez/uvelez-noticias/admin/'+imagen+'';

        imagen = imagen.replace(/\s/g, '');

        var noticia =    '<div class="single-blog-item">'+
 '                                   <div class="preview">'+
 '                                       <img alt="img" src="'+imagen+'" data-original="'+imagen+'">'+
 '                                   </div>'+
 '                                   <div class="descr">'+
 '                                       <div class="item-thumbnail">'+
 '                                           <div class="single-item date">'+
 '                                               <i class="fa fa-calendar"></i>'+
 '                                               <a class="value" href="">'+dia+'/'+mes+'/'+anio+'</a>'+
 '                                           </div>'+
 '                                       </div>'+
 '                                       <span class="title"><a >'+titulo+'</a></span>'+
 '                                       <p>'+descripcion+'</p>'+
 '                                   </div>'+
 '                               </div>';
        $("#notice-info").html(noticia);
    </script>

</body>

</html>
