(function ($) {
    "use strict";

    var menu = '<div class="extra-header">' +
        '<div class="container">' +
        ' <div class="left-part">' +
        ' <div class="extra-item sociable">' +
        ' <ul class="sociable-listing">' +
        '    <li class="sociable-item">' +
        '       <a href="index.html#" class="social-icon"><i class="fa fa-facebook"></i></a>' +
        '    </li>' +

        '    <li class="sociable-item">' +
        '        <a href="https://www.instagram.com/inmobiliaria_uribevelez/" target="_blank" class="social-icon"><i class="fa fa-instagram"></i></a>' +
        '</li>' +
        '    <li class="sociable-item">' +
        '        <a href="https://wa.me/573053593792" target="blank" class="social-icon"><i class="fa fa-whatsapp"></i></a>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        ' <div class="right-part">' +
        ' <div class="extra-item event">' +
        ' <span class="event-entry"><i class="fa fa-clock-o"></i>Lunes a Viernes: de 8:00 a.m. a 12:00 m. y de 2:00 p.m. a 6:00 p.m' +
        '</span>' +
        ' </div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<header class="header">' +
        ' <div class="container">' +
        '<div class="row">' +
        ' <div class="col-sm-3">' +
        '<div class="logo">' +
        ' <a href="index.html"><img src="images/logo/logo-uribev.png" alt=""></a>' +
        ' </div>' +
        '  </div>' +
        ' <div class="col-sm-2">' +
        ' <div class="contact">' +
        '  <div class="icon">' +
        '    <a href="tel:0344407790" target="blank"><i class="fa fa-phone"></i></a>' +
        ' </div>' +
        ' <div class="descr">' +
        '    <span class="box-title">Llamanos:</span>' +
        '    <span class="box-text"><a href="tel:0344407790" target="blank">(034) 4407790</a></span>' +
        ' </div>' +
        ' </div>' +
        '  </div>' +
        '<div class="col-sm-3">' +
        '<div class="contact">' +
        '<div class="icon">' +
        ' <a href="mailto:inmobiliaria@uribevelez.com" target="blank"><i class="fa fa-envelope"></i></a>' +
        ' </div>' +
        ' <div class="descr">' +
        ' <span class="box-title">Correo:</span>' +
        '    <a href="mailto:inmobiliaria@uribevelez.com" target="blank" class="box-text">inmobiliaria@uribevelez.com</a>' +
        '</div>' +
        ' </div>' +
        ' </div>' +
        ' <div class="col-sm-2 col-header"  >' +
        ' <div class="contact">' +
        ' <div class="icon">' +
        '<i class="fa fa-map-marker"></i>' +
        '</div>' +
        '<div class="descr">' +
        ' <span class="box-title">Dirección:</span>' +
        ' <span class="box-text">Transversal 38 # 73A 61, Medellín – Colombia</span>' +
        ' </div>' +
        ' </div>' +
        ' </div>' +

        ' <div class="col-sm-2">' +
        ' <div class="contact">' +
        '<button class="button-pagos" onclick="openModalHome()">Realice Sus Pagos</button>' +
        ' </div>' +
        '</div>' +
        '</div>' +
        '</header>' +
        '<div class="nav-block">' +
        '    <div class="container">' +
        '        <div class="row">' +
        '            <div class="col-sm-12">' +
        '                <nav class="main-navigation">' +
        '                    <ul class="navigation-listing hidden-xs">' +
        '                        <li class="navigation-item">' +
        '                            <a href="index.html">Inicio</a>' +
        '                        </li>' +
        '                        <li class="navigation-item">' +
        '                            <a href="quienes-somos.html">Quienes Somos</a>' +
        '                        </li>' +
        '                        <li class="navigation-item">' +
        '                            <a href="servicios.html">Servicios</a>' +
        '                        </li>' +
        '                        <li class="navigation-item">' +
        '                            <a href="inmuebles.php">Inmuebles</a>' +
        '                        </li>' +
        '                        <li class="navigation-item">' +
        '                            <a href="clientes.html">Clientes</a>' +
        '                        </li>' +
        '                        <li class="navigation-item">' +
        '                            <a href="formularios.html">Formularios</a>' +
        '                        </li>' +
        '                        <li class="navigation-item">' +
        '                            <a href="contactenos.html">Contáctenos</a>' +
        '                        </li>' +
        '                    </ul>' +
        '                    <button class="mobile_menu_btn toggle-nav visible-xs">' +
        '                        <span class="sandwich">' +
        '                            <span class="sw-topper"></span>' +
        '                            <span class="sw-bottom"></span>' +
        '                            <span class="sw-footer"></span>' +
        '                        </span>' +
        '                    </button>' +
        '                </nav>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>' +
        '<div class="mobile-block">' +
        '</div>';

    $(".menu-ppal").html(menu);

    var footer =
        '<div class="container">' +
        '				<div class="row">' +
        '					<div class="col-sm-4 col-md-6">' +
        '						<div class="widget">' +
        '							<div class="logo">' +
        '								<a href="index.html">' +
        '									<img src="images/logo/FONDO_AZUL70.png" alt="">' +
        '								</a>' +
        '							</div>' +
        '							<p class="text">Empresa fundada en agosto de 1976 con sede en la ciudad de Medellín -Colombia-, dedicada a la' +
        '								actividad inmobiliaria desde 1986 con amplia experiencia en la búsqueda, selección y negociación de inmuebles' +
        '								en alquiler y venta</p>' +
        '						</div>' +
        '					</div>' +
        '					<div class="col-sm-4 col-md-6">' +
        '						<div class="widget contact">' +
        '							<span class="widget-title">Información de contacto</span>' +
        '							<ul class="contacts-listing">' +
        '								<li>' +
        '									<div class="icon">' +
        '										<i class="fa fa-map-marker"></i>' +
        '									</div>' +
        '									<div class="descr">' +
        '										<span>Transversal 38 # 73A 61, Medellín – Colombia</span>' +
        '									</div>' +
        '								</li>' +
        '								<li>' +
        '									<div class="icon">' +
        '										<i class="fa fa-phone"></i>' +
        '									</div>' +
        '									<div class="descr">' +
        '										<span><a href="tel:0344407790" target="blank">(034) 4407790</a></span>' +
        '									</div>' +
        '								</li>' +
        '<li>' +
        '									<div class="icon">' +
        '										<i class="fa fa-whatsapp"></i>' +
        '									</div>' +
        '									<div class="descr">' +
        '										<span><a href="https://wa.me/573053593792" target="blank">305 3593 792</a></span>' +
        '									</div>' +
        '								</li>' +
        '								<li>' +
        '									<div class="icon">' +
        '										<i class="fa fa-envelope"></i>' +
        '									</div>' +
        '									<div class="descr">' +
        '										<a href="mailto:inmobiliaria@uribevelez.com" target="blank" class="box-text">inmobiliaria@uribevelez.com</a>' +
        '									</div>' +
        '								</li>' +
        '								<li>' +
        '									<div class="icon">' +
        '										<i class="fa fa-clock-o"></i>' +
        '									</div>' +
        '									<div class="descr">' +
        '										<span>Lunes a Viernes: de 8:00 a.m. a 12:00 m. y de 2:00' +
        '											p.m. a 6:00 p.m</span>' +
        '									</div>' +
        '								</li>' +
        '							</ul>' +
        '						</div>' +
        '				</div>' +
        '				<div class="row">' +
        '					<div class="col-sm-12">' +
        '						<div class="bottom-footer">' +
        '							<span class="copy">Copyright © 2019 <a href="https://www.dexcondigital.com/" target="_blank" style="color: #F38E28;">Dexcon Digital</a>.' +
        '								Todos los derechos reservados.</span>' +
        '						</div>' +
        '					</div>' +
        '				</div>' +
        '			</div>';


    $(".footer-ppal").html(footer);

})
    (jQuery);


function openModalHome() {
    $("body").append('<div class="modal fade" id="myModalHome" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
        '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>' +
        '<h4 class="modal-title" id="myModalLabel">Pagos en Línea</h4>' +
        '</div>' +
        '<div class="modal-body">' +
        '<div class="row text-center">                       ' +
        ' <div class="col-sm-6">' +
        '  <div class="contact">' +
        ' <a href="https://gateway2.tucompra.com.co/sites/uribevelezycia" target="_blank"><img src="images/pse.png"></a>' +
        '<h5 style="margin-bottom: 0px;">Pagos PSE</h5>' +
         '<p ><a href="images/MANUAL DE PAGOS PSE.PDF" target="_blank" class="a-modal">Descargue el Manual de Pagos de Pse</a></p>' +
        ' </div>' +
        ' </div>' +
        ' <div class="col-sm-6">' +
        '  <div class="contact">' +
        '<a href="arrendatarios.html" ><img src="images/Icono2.png"></a>' +
        '<h5 style="margin-bottom: 0px;">Cupón de Pagos</h5>' +
        '<p style="margin-bottom: 0px;">Descargue e imprima su cupon de pagos, debe ser con una impresora laser</p>' +
         '<p><a href="images/MANUAL DE PAGOS CUPON DE PAGOS.PDF" target="_blank" class="a-modal">Descargue el Manual de Pagos con Cupón de Pagos</a></p>' +
        ' </div>' +
        ' </div>' +
        '</div>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-default" data-dismiss="modal" onclick="redirect()">Cerrar</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>');
    $("#myModalHome").modal('show');
}


var initResponsiveNav = function () {
    var navTree = $('.nav-block .main-navigation .navigation-listing');
    var submitBtn = $('.nav-block .submit-nav');
    var navClone = navTree.clone().addClass('mobile-nav').removeClass('visible-md visible-lg hidden-xs');
    var submitClone = submitBtn.clone().removeClass('hidden-xs').hide();
    $('.mobile-block').append(navClone);
    $('.mobile-block').append(submitClone);
    $(navClone).toggleClass('collapse');
    // $(submitClone).addClass('hidden-xs');

    $('.mobile_menu_btn').on('click', function () {
        $(".sandwich").toggleClass('active');
        navClone.toggleClass('collapse');
        submitClone.toggle();
        $('.mobile-block').toggleClass('active');
    });
    $(window).resize(function () {
        if ($(window).width() > 767) {
            if (navClone.css('display') == 'block') {
                navClone.addClass('collapse');
                // submitClone.removeClass('hidden-xs').addClass('visible-xs');
                $('.mobile-block').toggleClass('active');
            }

            $(".sandwich").removeClass('active');
        } else if ($(window).width() < 767) {
            navClone.addClass('collapse');
            // submitClone.addClass('hidden-xs').removeClass('visible-xs');
            $('.mobile-block').removeClass('active');
        }
    });
};
initResponsiveNav();

$.ajax({
    url: 'js/noticesJSON.php',
    dataType: "json",
    success: function (data) {
        var result = "";
        var j = 0;
        for (var i in data) {
            $("#titulo" + i + "").text(data[i].titulo);
            $("#foto" + i + "").attr("src", "http://biinyu.com.co/uribevelez/uvelez-noticias/admin/"+data[i].imagen+"");
            $("#descripcion" + i + "").text(data[i].descripcion);
            $("#direccion" + i + "").attr("href", "detalle-noticia.php?codigo=" + data[i].id);
            $("#fecha" + i + "").text( data[i].fecha);
           
            j++;
            if (j > 1) {
                break;
            }
        }
    },
    error: function (data) {
    }
});
