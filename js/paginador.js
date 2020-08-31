function paginator(actual) {

    let position = 0;
    if (position != 0) {
        position = localStorage.getItem("total");
    }
    var count = localStorage.getItem("count");

    if (actual == 'ant') {
        count--;
        localStorage.setItem("count", count);
        imprimir(count);
    }
    if (actual == 'sig') {
        count++;
        localStorage.setItem("count", count);
        imprimir(count);
    }

}

function imprimir(count) {
    localStorage.setItem("count", count);


    if (localStorage.getItem("gestion") == 0 && localStorage.getItem("ciudad") == 0 && localStorage.getItem("tipo") == 0 && localStorage.getItem("zona") == 0 && localStorage.getItem("precio") == 0 && localStorage.getItem("precio1") == 5000000000) {
        $.ajax({
            url: 'http://www.simi-api.com/ApiSimiweb/response/v2.1.3/filtroInmueble/limite/' + count + '/total/12/departamento/0/ciudad/0/zona/0/barrio/0/tipoInm/0/tipOper/0/areamin/0/areamax/0/valmin/0/valmax/0/campo/fecha/order/desc/banios/0/alcobas/0/garajes/0',
            type: 'GET',
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    'Authorization',
                    'Basic ' + btoa('Authorization:mUwVNQWQnF5lxxC6CSAy9765fYOFB1D99H4VIusO-923'));
            },
            'dataType': "json",
            success: function (data) {
                console.log(data)


                if (data == "Sin resultados") {
                    res += '<div class="alert alert-danger"><h4>No hay Inmuebles </h4></div>';
                    $("#inmb").append(res);
                    return;

                } else {


                    localStorage.setItem("total", data.datosGrales.fin);
                    localStorage.setItem("fin", data.datosGrales.inicio);
                    var res = " ";
                    res='<div class="total-inm"><h4>Se han encontrado '+data.Inmuebles.length+'</h4></div>';
                    for (var pos = 0; pos < data.Inmuebles.length; pos++) {
                        res+='<div class="col-lg-4 col-md-6">'+
                        '<div class="item">'+
                        '<div class="preview">'+
                        '<a href="detalle-inmueble.php?dt=' + data.Inmuebles[pos].Codigo_Inmueble + '"><img src="media/images/object-slider/1.jpg" style=" width: 100%;height: 200px; alt=""></a>';
                        if (data.Inmuebles[pos].foto1 != "") {
                            res += '<a href="detalle-inmueble.php?dt=' + data.Inmuebles[pos].Codigo_Inmueble + '"><img src="' + data.Inmuebles[pos].foto1 + '" style=" width: 100%;height: 200px;" alt=""></a>';
                        } else {
                            res += '<a href="detalle-inmueble.php?dt=' + data.Inmuebles[pos].Codigo_Inmueble + '"><img src="images/no-image.png" style=" width: 100%;height: 200px; alt=""></a>';
                        }
                        res+='</div>'+
                        '<div class="item-thumbnail">'+
                        '<div class="single-thumbnail">'+
                        '<i class="icon bath"></i>'+
                        '<span class="value">' + data.Inmuebles[pos].Alcobas + '</span>'+
                        '</div>'+
                        '<div class="single-thumbnail">'+
                        '<i class="icon sleep"></i>'+
                        '<span class="value">' + data.Inmuebles[pos].banios + '</span>'+
                        '</div>'+
                        '<div class="single-thumbnail">'+
                        '<i class="icon corner"></i>'+
                        '<span class="value">' + data.Inmuebles[pos].AreaConstruida + '</span>'+
                        '</div>'+
                        '</div>'+
                        '<div class="item-entry">'+
                        '<span class="item-title"><a href="detalle-inmueble.php?dt=' + data.Inmuebles[pos].Codigo_Inmueble + '">' + data.Inmuebles[pos].Codigo_Inmueble + '</a></span>'+
                        '<p class="item-text">'+data.Inmuebles[pos].Gestion+'</p>'+
                        '<p class="item-text">'+data.Inmuebles[pos].Tipo_Inmueble+'</p>'+
                        '<div class="item-info">';
                        if (data.Inmuebles[pos].Gestion == "Arriendo") {

                            res +=  '<span class="price">$' + data.Inmuebles[pos].Canon + '</span>';
                        } else if (data.Inmuebles[pos].Gestion == "Arriendo/Venta") {

                            res +=  '<span class="price">$' + data.Inmuebles[pos].Venta + '"<br>"' + data[i].Canon + '</span>';
                        } else {
                            res +=  '<span class="price">$' + data.Inmuebles[pos].Venta + '</span>';
                        }
                        res+='</div>'+
                        '</div>'+
                        '</div>'+
                        '</div>';


                    }

                    
                     $(".pagina").html("pagina "+data.datosGrales.pagina_actual+ " de "+localStorage.getItem("total"));
                }
                $("#inmb").html(res)

            }

        });
        validar()
    } else {

        $.ajax({
            url: 'http://www.simi-api.com/ApiSimiweb/response/v2.1.3/filtroInmueble/limite/' + count + '/total/12/departamento/0/ciudad/' + localStorage.getItem("ciudad") + '/zona/0/barrio/' + localStorage.getItem("zona") + '/tipoInm/' + localStorage.getItem("tipo") + '/tipOper/' + localStorage.getItem("gestion") + '/areamin/0/areamax/0/valmin/' + localStorage.getItem("precio") + '/valmax/' + localStorage.getItem("precio1") + '/campo/fecha/order/desc/banios/0/alcobas/0/garajes/0',
            type: 'GET',
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    'Authorization',
                    'Basic ' + btoa('Authorization:mUwVNQWQnF5lxxC6CSAy9765fYOFB1D99H4VIusO-923'));
            },
            'dataType': "json",
            success: function (data) {
                console.log(data)

                var res = " ";
                if (data == "Sin resultados") {
                    res += '<div class="alert alert-danger"><h4>No hay Inmuebles </h4></div>';
                    $("#siguiente").css("display", "none");
                    $("#anterior").css("display", "none");
                    $("#inmb").append(res);
                    return;

                } else {
                    localStorage.setItem("total", data.datosGrales.fin);
                    res='<div class="total-inm" ><h4>Se han encontrado '+data.datosGrales.totalInmuebles+' inmuebles</h4></div>';
                    for (var pos = 0; pos < (data.Inmuebles.length); pos++) {
                        if (data.Inmuebles[pos].Codigo_Inmueble != undefined) {
                            res+='<div class="col-lg-4 col-md-6">'+
                            '<div class="item">'+
                            '<div class="preview">';
                            if (data.Inmuebles[pos].foto1 != "") {
                                res += '<a href="detalle-inmueble.php?dt=' + data.Inmuebles[pos].Codigo_Inmueble + '"><img src="' + data.Inmuebles[pos].foto1 + '" style=" width: 100%;height: 200px; alt=""></a>';
                            } else {
                                res += '<a href="detalle-inmueble.php?dt=' + data.Inmuebles[pos].Codigo_Inmueble + '"><img src="images/no-image.png" style=" width: 100%;height: 200px; alt=""></a>';
                            }
                            res+='</div>'+
                            '<div class="item-thumbnail">'+
                            '<div class="single-thumbnail">'+
                            '<i class="icon bath"></i>'+
                            '<span class="value">' + data.Inmuebles[pos].Alcobas + '</span>'+
                            '</div>'+
                            '<div class="single-thumbnail">'+
                            '<i class="icon sleep"></i>'+
                            '<span class="value">' + data.Inmuebles[pos].banios + '</span>'+
                            '</div>'+
                            '<div class="single-thumbnail">'+
                            '<i class="icon corner"></i>'+
                            '<span class="value">' + data.Inmuebles[pos].AreaConstruida + '</span>'+
                            '</div>'+
                            '</div>'+
                            '<div class="item-entry">'+
                            '<span class="item-title"><a href="detalle-inmueble.php?dt=' + data.Inmuebles[pos].Codigo_Inmueble + '">' + data.Inmuebles[pos].Codigo_Inmueble + '</a></span>'+
                            '<p class="item-text">'+data.Inmuebles[pos].Gestion+'</p>'+
                            '<p class="item-text">'+data.Inmuebles[pos].Tipo_Inmueble+'</p>'+
                            '<div class="item-info">';
                            if (data.Inmuebles[pos].Gestion == "Arriendo") {

                                res +=  '<span class="price">$' + data.Inmuebles[pos].Canon + '</span>';
                            } else if (data.Inmuebles[pos].Gestion == "Arriendo/Venta") {

                                res +=  '<span class="price">$' + data.Inmuebles[pos].Venta + '"<br>"' + data[i].Canon + '</span>';
                            } else {
                                res +=  '<span class="price">$' + data.Inmuebles[pos].Venta + '</span>';
                            }
                            res+='</div>'+
                            '</div>'+
                            '</div>'+
                            '</div>';

                        }
                    }
                    if (localStorage.getItem("total") == 0) {
                        $(".pagina").html("pagina " + data.datosGrales.pagina_actual + " de 1")
                    } else {
                        $(".pagina").html("pagina " + data.datosGrales.pagina_actual + " de " + localStorage.getItem("total"))
                    }
                    validar();
                }

                $("#inmb").html(res)

            }

        });
       
    }
}

function validar() {
    if (localStorage.getItem("total") == localStorage.getItem("count")) {
        $("#siguiente").css("display", "none");
    } else {
        $("#siguiente").css("display", "inline-flex");
    }

    if (localStorage.getItem("count") == 1) {
        $("#anterior").css("display", "none");
    } else {
        $("#anterior").css("display", "inline-flex");
    }
}


                                  