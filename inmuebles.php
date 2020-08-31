<!DOCTYPE html>
<html>
<?php
		$gs = 0;
		$ti = 0;
		$ci = 0;
		$zo = 0;
		if (isset($_GET["gs"]) && isset($_GET["ti"]) && isset($_GET["ci"]) && isset($_GET["zo"])) {
			$gs = $_GET["gs"];
			$ti = $_GET["ti"];
			$ci = $_GET["ci"];
			$zo = $_GET["zo"];
		}
?>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no">
	<meta name="format-detection" content="telephone=no" />
	<link rel="shortcut icon" type="image/x-icon" href="images/favicon/favicon.png" />
	<title>Inmuebles</title>
	<link rel="stylesheet" type="text/css" media="screen" href="css/lib/bootstrap/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" media="screen" href="fonts/font-awesome-4.4.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" media="screen" href="vendors/jquery-ui-1.11.4/jquery-ui.min.css">
	<link rel="stylesheet" type="text/css" media="screen" href="vendors/jcarousel/css/jquery.jcarousel.css">
	<link rel="stylesheet" type="text/css" media="screen" href="css/style.css" />
</head>

<body onload="imprimir(1)">
	<div class="loader">
		<div class="loader_inner"></div>
	</div>
	<div class="menu-fijo menu-ppal">

	</div>
	<div class="home-banner style-4" id="margin-menu" style="background: url(images/banners/inmueble_banner.jpg) no-repeat center;background-size: 100% 100%;">
		<div class="container">
			<div class="banner-content">
				<div class="banner-message">
					<div class="banner-entry">
						<span class="entry-title">Nuestros</span>
						<span class="entry-message">Inmuebles</span>
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
						<span class="active-page">Nuestros Inmuebles</span>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-sm-4 col-md-3">
					<aside class="sidebar main-sidebar" style="padding-top:6px">
						<div class="widget main-filter-widget gray-bg">
							<div class="widget-entry">
								<div class="filter-label-block">
									<span class="filter-label">Buscador de Inmuebles</span>
								</div>
								<div class="filter-form">
									<div class="row">
										<div class="col-sm-12">
											<span class="item-label">Operación</span>
											<select  class=" select-api operacion">
												<option >Operación</option>
												
											</select>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-12">
											<span class="item-label">Tipo de Inmueble</span>
											<select class=" select-api inmueble">
												<option >Inmueble</option>
												
											</select>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-12">
											<span class="item-label">Ciudad</span>
											<div  >
												<select class=" select-api ciudad">
													<option >Ciudad</option>
													
												</select>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-12">
											<span class="item-label">Barrio</span>
											<div  >
												<select  class=" select-api barrio">
													<option >Barrio</option>
												
												</select>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-12">
											<span class="item-label">Codigo</span>
											<div class="ui-front">
												<input class="codigo-input codeInm" >

											</div>
										</div>

									</div>
									<div class="row">
										<div class="col-sm-12">
											<span class="item-label">Precio</span>
											<div class="range-wrap">
												<div class="range-fields">
													<input type="text" id="min-field" />
													<span class="delimiter"></span>
													<input type="text" id="max-field" />
												</div>
												<div class="slider"></div>
												<div class="scale">
													<span class="min-value"></span>
													<span class="max-value"></span>
												</div>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-12">
											
												<button class="find-now-btn search-1">Buscar</button>
										
										</div>
									</div>
								</div>
							</div>
						</div>

					</aside>
				</div>
				<div class="col-md-9 col-sm-8">
					<div class="objects-block with-sidebar">

						<div class="row">
							<div class="col-sm-12">
								<div class="empty-space-30"></div>
							</div>
						</div>
						<div class="row" id="inmb">


						</div>
						<div class="row">
							<div class="col-xs-12">
								<div class="objects-pagination ">
									<ul class="pages-listing">
										<div class="pagina" style="color:black;"></div>
										<li id="anterior">
											<a href="#" id="banterior" onclick="paginator('ant')">
												<i class="fa fa-angle-left" aria-hidden="true" id="flechas"></i>
											</a>
										</li>
										<li id="siguiente">
											<a href="#" id="bsiguiente" onclick="paginator('sig')">
												<i class="fa fa-angle-right" aria-hidden="true" id="flechas"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>

						</div>
						<div class="row">
							<div class="col-sm-12">
								<div class="empty-space"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="scroll-container">
		<div class="container">
			<a href="inmuebles.php" class="scroll-top-btn"><i class="fa fa-angle-double-up"></i></a>
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
	<script type="text/javascript" src="js/main.js"></script>
	<script type="text/javascript" src="js/menu.js"></script>
	<script type="text/javascript" src="js/paginador.js"></script>
	<script type="text/javascript" src="js/search.js"></script>
	<?php echo '<script>var gs = ' . $gs . '</script>'; ?>
  <?php echo '<script>var ti = ' . $ti . '</script>'; ?>
  <?php echo '<script>var ci = ' . $ci . '</script>'; ?>
  <?php echo '<script>var zo = ' . $zo . '</script>'; ?>


  <script>
    if (typeof (Storage) !== "undefined") {
      // Store
      localStorage.setItem("gestion", gs);
      localStorage.setItem("ciudad", ci);
      localStorage.setItem("tipo", ti);
      localStorage.setItem("zona", zo);

    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
  </script>
</body>

</html>