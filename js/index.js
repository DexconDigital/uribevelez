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
            // console.log(data)

            var res = "";
            if (data == "Sin resultados") {
                res += ' <h3> No hay inmuebles destacados</h3>';
                $("#propiedades").append(res);
                return;

            } else {
                // var j = 0;

                for (var i = 0; i < data.infoAdd.totalInmuebles; i++) {

                    res += '<li>' +
                    '<div class="item">' +
                    '<div class="preview">' +
                    '<a href="./detalle-inmueble.php?dt=' + data[i].Codigo_Inmueble + '">'+
                    '<img class="tam_img" id="foto-prop" src="' + data[i].foto1 + '" alt="">' +
                    '</a>'+
                    '<span class="like">' +
                    '<i class="fa fa-heart"></i>' +
                    '</span>' +
                    '</div>' +
                    '<div class="item-thumbnail">' +
                    '<div class="single-thumbnail">' +
                    '<i class="icon bath"></i>' +
                    '<span class="value">' + data[i].banios + '</span>' +
                    '</div>' +
                    '<div class="single-thumbnail">' +
                    '<i class="icon sleep"></i>' +
                    '<span class="value">' + data[i].Alcobas + '</span>' +
                    '</div>' +
                    '<div class="single-thumbnail">' +
                    '<i class="icon corner"></i>' +
                    '<span class="value">' + data[i].AreaConstruida + 'mt²</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="item-entry">' +
                    '<span class="item-title"><a href="./detalle-inmueble.php?dt=' + data[i].Codigo_Inmueble + '">' + data[i].Codigo_Inmueble + '</a></span>' +
                    '<p class="item-text">' + data[i].Gestion + '</p>' +
                    '<p class="item-text">' + data[i].Tipo_Inmueble + '</p>' +
                    '<div class="item-info">' +
                    '<span id="precio-prop" class="price">$' + data[i].Canon + '</span>' +

                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</li>'; 

                    // j++;
                    // if (j > 20) {
                    //     break;
                //     }

                }


            }
            $("#propiedades").append(res);

        }

    });
});
