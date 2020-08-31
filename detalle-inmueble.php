<!DOCTYPE html>
<html>
<?php
		$codigo = $_GET["dt"];
	?>

<?php    
	$ch = curl_init();
	$headers =  'Authorization:mUwVNQWQnF5lxxC6CSAy9765fYOFB1D99H4VIusO-923';
	curl_setopt($ch, CURLOPT_URL, 'http://www.simi-api.com/ApiSimiweb/response/v2/inmueble/codInmueble/' . $codigo . '');
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
	curl_setopt($ch, CURLOPT_USERPWD, $headers);
	$result = curl_exec($ch);
	curl_close($ch);
	$r = json_decode($result, true); 
	?>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no">
	<meta name="format-detection" content="telephone=no" />
	<meta property="title" content="Inmueble <?php echo $codigo;?> de Uribe Velez" />
	<meta property="og:site_name" content="Uribe Velez" />
	<link rel="shortcut icon" type="image/x-icon" href="images/favicon/favicon.png" />
	<title>Detalle Inmueble
		<?php echo $codigo;?>
	</title>
	<link rel="stylesheet" type="text/css" media="screen" href="css/lib/bootstrap/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" media="screen" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" media="screen" href="fonts/font-awesome-4.4.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" media="screen" href="vendors/jquery-ui-1.11.4/jquery-ui.min.css">
	<link rel="stylesheet" type="text/css" media="screen" href="vendors/jcarousel/css/jquery.jcarousel.css">
	<link href="vendors/video-js/video-js.css" rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="css/owl.carousel.min.css">
	<link rel="stylesheet" href="css/owl.carousel.css">
	<link rel="stylesheet" type="text/css" media="screen" href="css/style.css" />
</head>

<body>
	<div class="loader">
		<div class="loader_inner"></div>
	</div>
	<div class="menu-fijo menu-ppal">

	</div>
	<div class="home-banner style-4" id="margin-menu">
		<div class="container">
			<div class="banner-content">
				<div class="banner-message">
					<div class="banner-entry">
						<span class="entry-title">Detalle de</span>
						<span class="entry-message">Inmueble
							<?php echo $codigo;?></span>
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
						<span class="active-page">Detalle de Inmueble
							<?php echo $codigo;?></span>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-md-9 col-sm-12">
					<div class="single-item-page">
						<div class="row">
							<div class="col-sm-12">
								<h3 class="section-title" id="ubicacion"> <span class="price">$ <span class="value" id="precio-titulo"></span></span></h3>
								<div class="item-photos">
									<div class="owl-carousel" id="mycarousel"></div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-12">
								<h4 class="small-section-title">Descripción</h4>
								<p class="text" id="descripcion"></p>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-12">
								<h4 class="small-section-title">Características</h4>
								<div class="detail-info-block">

									<div class="column-3 ">
										<div class="info-item">
											<span class="label-item">Código:</span>
											<span class="value">
												<?php echo $codigo;?></span>
										</div>
										<div class="info-item">
											<span class="label-item"><i class="fa fa-compress"></i> Área:</span>
											<span class="value" id="area"> </span>
										</div>

									</div>
									<div class="column-3 ">
										<div class="info-item">
											<span class="label-item"><i class="fa fa-bed"></i> Alcobas:</span>
											<span class="value" id="alcobas"> </span>
										</div>
										<div class="info-item">
											<span class="label-item"><i class="fa fa-bath"></i> Baños:</span>
											<span class="value" id="banios"> </span>
										</div>
										<div class="info-item">
											<span class="label-item"><i class="fa fa-car"></i> Garage:</span>
											<span class="value" id="garajes"> </span>
										</div>
									</div>
									<div class="column-3 ">
										<div class="info-item">
											<span class="label-item"><i class="fa fa-dollar"></i> Precio:</span>
											<span class="value" id="precio"></span>
										</div>
										<div class="info-item">
											<span class="label-item"><i class="fa fa-home"></i> Tipo Inmueble:</span>
											<span class="value" id="tipo"> </span>
										</div>
										<div class="info-item">
											<span class="label-item"><i class="fa fa-bullseye"></i> Gestión:</span>
											<span class="value" id="gestion"> </span>
										</div>
									</div>

								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-12">
								<h4 class="small-section-title">Características internas</h4>
								<div class="features-info-block" id="details-1">

								</div>
							</div>
							<div class="col-sm-12">
								<h4 class="small-section-title">Características externas</h4>
								<div class="features-info-block" id="details-2">

								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-12">
								<h4 class="small-section-title">Mapa de Ubicacion</h4>
							</div>
							<div class="col-sm-12">

								<div id="map" style="height:300px"></div>

							</div>

						</div>

					</div>
				</div>
				<div class="col-sm-12 col-md-3">
					<aside class="sidebar main-sidebar">
						<div class="widget main-filter-widget gray-bg">
							<div class="widget-entry">
								<div class="filter-label-block">
									<span class="filter-label">Buscador de Inmuebles</span>
								</div>
								<div class="filter-form">
									<div class="row">
										<div class="col-sm-12">
											<span class="item-label">Operación</span>
											<select class=" select-api operacion">
												<option>Operación</option>

											</select>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-12">
											<span class="item-label">Tipo de Inmueble</span>
											<select class=" select-api inmueble">
												<option>Inmueble</option>

											</select>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-12">
											<span class="item-label">Ciudad</span>
											<div>
												<select class=" select-api ciudad">
													<option>Ciudad</option>

												</select>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-12">
											<span class="item-label">Barrio</span>
											<div>
												<select class=" select-api barrio">
													<option>Barrio</option>

												</select>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-12">
											<span class="item-label">Código</span>
											<div class="ui-front">
												<input class="codigo-input codeInm">

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
						<div class="widget featured-properties">
							<div class="heading">
								<span class="widget-title">Propiedades Similares</span>
							</div>
							<div class="widget-entry similarListing">

							</div>
						</div>
						<div class="widget featured-properties">
							<div class="heading">
								<span class="widget-title">Datos del Asesor</span>
							</div>
							<div class="widget-entry">


								<div class="item" id="detalle-asesor">




								</div>
							</div>


					</aside>
				</div>
			</div>
		</div>
	</div>
	<div class="scroll-container">
		<div class="container">
			<a href="detalle-inmueble.php#" class="scroll-top-btn"><i class="fa fa-angle-double-up"></i></a>
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
	<script src="js/owl.carousel.min.js"></script>
	<script src="js/owl.carousel.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
	<script type="text/javascript" src="js/menu.js"></script>
	<script type="text/javascript" src="js/search.js"></script>
	<script type="text/javascript" src="js/similar.js"></script>
	<script type="text/javascript" src="js/pop-up.js"></script>
	<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCmu-UkTcheWni6_HMOKYU9x3AYP571e5s&callback=initMap"></script>
	<?php echo "<script> var codeInm ='" . $codigo . "';</script>"; ?>
	<script type="text/javascript">

		var latitud = 0;
		var longitud = 0;
		$.ajax({
			url: "http://www.simi-api.com/ApiSimiweb/response/v2/inmueble/codInmueble/" + codeInm + "",
			async: true,
			type: "GET",
			dataType: "json",
			beforeSend: function (xhr) {
				xhr.setRequestHeader(
					"Authorization",
					'Basic ' + btoa('Authorization:mUwVNQWQnF5lxxC6CSAy9765fYOFB1D99H4VIusO-923')
				);
			},
			success: function (data) {
				if (data.msn == "Inmueble NO Disponible") {
					openModal();
					return;
				}
				var j = 1;
				var carrousel = '';
				if (data.fotos == undefined) {
					carrousel += '<div class="item active">' +
						'<img src="images/no-image.png" alt=""  id="tam-img" />' +
						'</div>';
				} else {
					carrousel += '<div class="item active">' +
						'<img src="' + data.fotos[0].foto + '" alt=""  id="tam-img" />' +
						'</div>';

					for (var y = 1; y < Object.keys(data.fotos).length - 1; y++) {
						if (data.fotos[y].foto != undefined) {
							carrousel += '<div class="item">' +
								'<img src="' + data.fotos[y].foto + '" alt=""  id="tam-img" />' +
								'</div>';
							j++;
						}
					}
				}

				$("#mycarousel").html(carrousel);
				setTimeout(() => {
					$('#mycarousel').owlCarousel({
						items: 1,
						loop: true,
						nav: true,
						autoplay: true,
						autoplayTimeout: 3000
					});
				}, 000);
				$("#precio-titulo").append(data.precio);
				$("#precio").append("$ " + data.precio);

				$("#alcobas").append(data.alcobas);
				$("#banios").append(data.banos);
				$("#garajes").append(data.garaje);
				$("#area").append(data.AreaConstruida + " mts<sup>2</sup>");
				$("#code").append(data.idInm);
				$("#estrato").append(data.Estrato);
				$("#administracion").append(data.Administracion);
				$("#venta").append("$ " + data.ValorVenta);
				$("#descripcion").text(data.descripcionlarga);
				$("#barrio").append(data.barrio);
				$("#ciudad").append(data.ciudad);
				$("#gestion").html('<a title="' + data.Gestion + '" >' + data.Gestion + '</a>');
				$("#tipo").append('<a title="' + data.Tipo_Inmueble + '" style="color:#424242;">' + data.Tipo_Inmueble + '</a>');
				//$('#mycarousel').owlCarousel();
				var res = '';
				if ((data.caracteristicasExternas != undefined)) {
					for (var x = 0; x < Object.keys(data.caracteristicasExternas).length; x++) {
						res += '<li class="detalle-caracteristicas"><i class="jfont"></i>' + data.caracteristicasExternas[x].Descripcion + '</li>';
					}
				}
				if (Object.keys(data.caracteristicasExternas).length == 0) {
					res += '<li class="detalle-caracteristicas">Garaje: ' + data.garaje + '</li>';
				}
				var res1 = '';
				if (Object.keys(data.caracteristicasInternas).length == 0) {
					res1 += '<li class="detalle-caracteristicas">Estrato del Barrio: ' + data.Estrato + '</li>';
				}
				else {
					for (var x = 0; x < Object.keys(data.caracteristicasInternas).length; x++) {
						res1 += '<li class="detalle-caracteristicas"><i class="jfont"></i>' + data.caracteristicasInternas[x].Descripcion + '</li>';

					}
				}
				$("#details-1").append(res);
				$("#details-2").append(res1);
				var detallea = '';
				if (Object.keys(data.caracteristicasExternas).length == 0) {
					detallea = '<div class="item-heading">' +

						'	<div class="descr">' +
						'		<span class="name">Inmobiliaria Uribe Velez</span>' +

						'	</div>' +
						'</div>' +
						'<ul class="contact-listing">' +
						'	<li>' +
						'		<span class="icon"><i class="fa fa-phone"></i></span>' +
						'		<span class="phone"><a href="tel:' + data.inmobiliaria.telefono + '" target="_blank">' + data.inmobiliaria.telefono + '</a></span>' +
						'	</li>' +
						'	<li>' +
						'		<span class="icon"><i class="fa fa-envelope"></i></span>' +
						'		<a href="mailto:' + data.inmobiliaria.correo + '" target="_blank" >' + data.inmobiliaria.correo + '</a>' +

						'	</li>' +

						'</ul>';

				}
				else {
					detallea += '<div class="item-heading">' +

						'	<div class="descr">' +
						'		<span class="name">' + data.asesor[0].ntercero + '</span>' +

						'	</div>' +
						'</div>' +
						'<ul class="contact-listing">' +
						'	<li>' +
						'		<span class="icon"><i class="fa fa-phone"></i></span>' +
						'		<span class="phone"><a href="tel:' + data.asesor[0].celular + '" target="_blank">' + data.asesor[0].celular + '</a></span>' +
						'	</li>' +
						'	<li>' +
						'		<span class="icon"><i class="fa fa-envelope"></i></span>' +
						'		<a href="mailto:' + data.asesor[0].correo + '" target="_blank" >' + data.asesor[0].correo + '</a>' +
						'	</li>' +

						'</ul>';

				}

				$("#detalle-asesor").append(detallea);
				window.localStorage.setItem("codigo", data.idInm)
				window.localStorage.setItem("gestion", data.Tipo_Inmueble)
				window.localStorage.setItem("ciudad", data.ciudad)


				latitud = data.latitud;
				longitud = data.longitud;
				$("#ubicacion").append(data.ciudad + ", " + data.depto);
				$("#ubicacion2").append(data.barrio + ", " + data.ciudad);
				console.log(data)
				console.log("lat: " + latitud)
				console.log("long: " + longitud)

				initMap(latitud, longitud);
			},
			error: function (data) {
				console.log("Fail");
			}
		});

		function initMap(latitud, longitud) {
			var uluru = {
				lat: parseFloat(latitud),
				lng: parseFloat(longitud)
			};
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 17,
				center: uluru
			});
			var marker = new google.maps.Marker({
				position: uluru,
				map: map
			});
		}

		function openModal() {
			$("body").append('<div class="pop-up">' +
				'  <span class="span-pop-up">x</span>' +
				'  <div class="pop-up-text">' +
				'    <h1>Descripción del inmueble</h1>' +
				'    <p>El inmueble no existe en Uribe Velez</p>' +
				'  </div>' +
				'</div>' +
				'<div class="pop-up-container">' +
				'</div>');


			setTimeout(() => {
				redirect();
			}, 3000);
		}
		function redirect() {
			window.history.back();
		}


	</script>
</body>

</html>