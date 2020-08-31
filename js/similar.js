setTimeout(function () {
    $.ajax({
        url: 'http://www.simi-api.com/ApiSimiweb/response/v21/filtroInmueble/limite/0/total/200/departamento/0/ciudad/0/zona/0/barrio/0/tipoInm/0/tipOper/0/areamin/0/areamax/0/valmin/0/valmax/0/campo/0/order/0/banios/0/alcobas/0/garajes/0',
        type: 'GET',
        cache: true,
        beforeSend: function (xhr) {
            xhr.setRequestHeader(
                'Authorization',
                'Basic ' + btoa('Authorization:mUwVNQWQnF5lxxC6CSAy9765fYOFB1D99H4VIusO-923'));
        },
        'dataType': "json",
        success: function (data) {
            console.log(data)

            var res = "";
            var nInmb = 0;
            var j = 0;

            for (var i = 0; i < data.totalInmuebles; i++) {
                if (data[i].Codigo_Inmueble != localStorage.codigo) {


                    res += '<div class="single-prop">' +
                        '<div class="preview">';
                    if (data[i].foto1 != "") {
                        res += '<a href="detalle-inmueble.php?dt=' + data[i].Codigo_Inmueble + '"><img src="' + data[i].foto1 + '" alt="" ></a>';
                    } else {
                        res += '<a href="detalle-inmueble.php?dt=' + data[i].Codigo_Inmueble + '"><img src="images/no-image.png" alt="" ></a>';
                    }
                    res += '</div>' +
                        '<div class="descr">' +
                        '<span class="title"><a href="detalle-inmueble.php?dt=' + data[i].Codigo_Inmueble + '">' + data[i].Ciudad + ', ' + data[i].Departamento + '</a></span>';
                    if (data.Inmuebles[pos].Gestion == "Arriendo") {

                        res += '<span class="price">$ <span class="value">' + data.Inmuebles[pos].Canon + '</span></span>';
                    } else if (data.Inmuebles[pos].Gestion == "Arriendo/Venta") {

                        res += '<span class="price">$ <span class="value">' + data.Inmuebles[pos].Venta + '"<br>"' + data[i].Canon + '</span></span>';
                    } else {
                        res += '<span class="price">$ <span class="value">' + data.Inmuebles[pos].Venta + '</span></span>';
                    }
                    '</div>' +
                        '</div>';

                    j++;
                } else {
                    nInmb++;
                }
                if (j > 2) {
                    break;
                }
            }


            if (j == 0) {

                res += '<div class="media feature-item">' +
                    '<div class="title-widget">No hay Propiedades Similares</div>' +
                    '</div>';
                $(".similarListing").append(res);
                return;
            }
            $(".similarListing").append(res);

        }

    });
});

