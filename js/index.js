setTimeout(function () {
    $.ajax({
        url: 'http://www.simi-api.com/ApiSimiweb/response/v21/inmueblesDestacados/total/50/limit/50',
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
            if (data == "Sin resultados") {
                res += ' <h3> No hay inmuebles destacados</h3>';
                $("#propiedades").append(res);
                return;

            } else {
                var j = 0;

                for (var i = 0; i < data.infoAdd.totalInmuebles; i++) {


                    $("#foto-prop" + i + "").attr("src", data[i].foto1);


                    $("#precio-prop" + i + "").text("$ " + data[i].Canon);

                    $("#barrio-prop" + i + "").text(" " + data[i].Barrio + "  " + data[i].Codigo_Inmueble);
                    $("#ubicacion-prop" + i + "").text(" " + data[i].Ciudad + ", " + data[i].Departamento);
                    $("#alcobas-prop" + i + "").text(data[i].Alcobas);
                    $("#banios-prop" + i + "").text(data[i].banios);
                    $("#area-prop" + i + "").text(data[i].AreaConstruida + " mts");
                    $("#code-prop" + i + "").text(data[i].Codigo_Inmueble);
                    $("#descripcion-prop" + i + "").text(data[i].descripcionlarga);
                    $("#gestion-prop" + i + "").text(data[i].Gestion);
                    $("#inmueble-prop" + i + "").text(data[i].Tipo_Inmueble);
                    $(".direccion-prop" + i + "").attr("href", "detalle-inmueble.php?dt=" + data[i].Codigo_Inmueble);
                    j++;
                    if (j > 20) {
                        break;
                    }

                }


            }


        }

    });
});
