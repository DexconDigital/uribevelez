$(document).ready(function () {
    //guarda el id de los departamentos
    var res = new Array();

    //peticion departamentos
    $.ajax({
        url: "http://www.simi-api.com/ApiSimiweb/response/v2/departamento",
        type: "GET",
        beforeSend: function (xhr) {
            xhr.setRequestHeader(
                "Authorization",
                "Basic " +
                btoa("Authorization:mUwVNQWQnF5lxxC6CSAy9765fYOFB1D99H4VIusO-923")
            );
        },
        dataType: "json",
        success: function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                //peticion ciudades
                $.ajax({
                    url: "http://www.simi-api.com/ApiSimiweb/response/v2/ciudad/idDepartamento/" + data[i].id + "",
                    type: "GET",
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader(
                            "Authorization",
                            "Basic " +
                            btoa("Authorization:mUwVNQWQnF5lxxC6CSAy9765fYOFB1D99H4VIusO-923")
                        );
                    },
                    dataType: "json",
                    success: function (data) {
                        var resultado = '';
                        var informacion = (data);
                        for (var i = 0; i < informacion.length; i++) {
                            resultado += '<option value="' +
                                informacion[i].id +
                                '">' +
                                informacion[i].nombre +
                                "</option>";
                        }
                        $(".ciudad").append(resultado);
                    }
                });
            }
        }, error: function (data) {
            console.log(data);
        }
    });


    $(".ciudad").change(function () {
        console.log(1)
        var res_ciudad = $(".ciudad option:selected").val();
        console.log(res_ciudad)
        $.ajax({
            url: "http://www.simi-api.com/ApiSimiweb/response/v2/barrios/idCiudad/" +
                res_ciudad +
                "",
            type: "GET",
            beforeSend: function (xhr) {
                xhr.setRequestHeader(
                    "Authorization",
                    "Basic " +
                    btoa("Authorization:mUwVNQWQnF5lxxC6CSAy9765fYOFB1D99H4VIusO-923")
                );
            },
            dataType: "json",
            success: function (data) {
                console.log(data)
                var resultado = '<option class="bs-title-option"  value="0">Barrio</option>';
                var informacion = data;

                for (var i = 0; i < informacion.length; i++) {
                    resultado += '<option value="' + informacion[i].id + '">' +
                        informacion[i].nombre +
                        "</option>";
                }

                $(".barrio").append("");
                $(".barrio").html(resultado);
            }
        });
    });


    $.ajax({
        url: "http://www.simi-api.com/ApiSimiweb/response/tipoInmuebles/",
        type: "GET",
        beforeSend: function (xhr) {
            xhr.setRequestHeader(
                "Authorization",
                "Basic " +
                btoa("Authorization:mUwVNQWQnF5lxxC6CSAy9765fYOFB1D99H4VIusO-923")
            );
        },
        dataType: "json",
        success: function (data) {

            var resultado = '<option class="bs-title-option" value="0">Tipo de Inmueble</option>';
            var informacion = (data);
            for (var i = 0; i < informacion.length; i++) {
                resultado +=
                    '<option value="' +
                    informacion[i].idTipoInm + '">' +
                    informacion[i].Nombre +
                    "</option>";
            }
            $(".inmueble").html(resultado);
        }
    });

    //get list of the transactions
    $.ajax({
        url: "http://www.simi-api.com/ApiSimiweb/response/gestion/",
        type: "GET",
        beforeSend: function (xhr) {
            xhr.setRequestHeader(
                "Authorization",
                "Basic " +
                btoa("Authorization:mUwVNQWQnF5lxxC6CSAy9765fYOFB1D99H4VIusO-923")
            );
        },
        dataType: "json",
        success: function (data) {
            var resultado = '<option class="bs-title-option" value="0">Operacion</option>';
            for (var i = 0; i < data.length; i++) {
                resultado += '<option value="' +
                    data[i].idGestion + '">' +
                    data[i].Nombre +
                    "</option>";
            }
            $(".operacion").html(resultado);

        }
    });

    $(".operacion").change(function () {
        var operacion = $(".operacion option:selected").val();
        console.log(operacion)

        if (operacion == 1) {
            function addCommas(nStr) {
                var x, x1, x2;
                nStr += '';
                x = nStr.split('.');
                x1 = x[0];
                x2 = x.length > 1 ? '.' + x[1] : '';
                var rgx = /(\d+)(\d{3})/;
                while (rgx.test(x1)) {
                    x1 = x1.replace(rgx, '$1' + ',' + '$2');
                }
                return x1 + x2;
            }

            $(".slider").slider({
                min: 50000,
                max: 15000000,
                step: 10000,
                values: [0, 15000000],
                range: true,
                stop: function (event, ui) {
                    $("input#min-field").val("$" + addCommas(ui.values[0].toString()));
                    $("input#max-field").val("$" + addCommas(ui.values[1]));
                },
                slide: function (event, ui) {
                    $("input#min-field").val("$" + addCommas(ui.values[0].toString()));
                    $("input#max-field").val("$" + addCommas(ui.values[1]));
                }
            });
            $('.range-wrap').each(function () {
                $("input#min-field").val("$" + addCommas($(".slider").slider("values", 0)));
                $("input#max-field").val("$" + addCommas($(".slider").slider("values", 1)));
                $('.min-value').text($('.slider').slider('option', 'min'));
                $('.max-value').text($('.slider').slider('option', 'max'));


                $("input#min-field").change(function () {
                    var value1 = $("input#min-field").val().replace(/\D/g, '');
                    var value2 = $("input#max-field").val().replace(/\D/g, '');

                    if (parseInt(value1, 10) > parseInt(value2, 10)) {
                        value1 = value2;
                        $("input#min-field").val(value1);
                    }
                    $(".slider").slider("values", 0, value1);
                });


                $("input#max-field").change(function () {
                    var value1 = $("input#min-field").val().replace(/\D/g, '');
                    var value2 = $("input#max-field").val().replace(/\D/g, '');

                    if (value2 > 15000000) { value2 = 15000000; jQuery("input#max-field").val(15000000) }

                    if (parseInt(value1, 10) > parseInt(value2, 10)) {
                        value2 = value1;
                        $("input#max-field").val(value2);
                    }
                    $(".slider").slider("values", 1, value2);
                });
            });
        }
        else if (operacion == 2) {

            function addCommas(nStr) {
                var x, x1, x2;
                nStr += '';
                x = nStr.split('.');
                x1 = x[0];
                x2 = x.length > 1 ? '.' + x[1] : '';
                var rgx = /(\d+)(\d{3})/;
                while (rgx.test(x1)) {
                    x1 = x1.replace(rgx, '$1' + ',' + '$2');
                }
                return x1 + x2;
            }

            $(".slider").slider({
                min: 0,
                max: 1500000000,
                step: 10000000,
                values: [0, 1500000000],
                range: true,
                stop: function (event, ui) {
                    $("input#min-field").val("$" + addCommas(ui.values[0].toString()));
                    $("input#max-field").val("$" + addCommas(ui.values[1]));
                },
                slide: function (event, ui) {
                    $("input#min-field").val("$" + addCommas(ui.values[0].toString()));
                    $("input#max-field").val("$" + addCommas(ui.values[1]));
                }
            });
            $('.range-wrap').each(function () {
                $("input#min-field").val("$" + addCommas($(".slider").slider("values", 0)));
                $("input#max-field").val("$" + addCommas($(".slider").slider("values", 1)));
                $('.min-value').text($('.slider').slider('option', 'min'));
                $('.max-value').text($('.slider').slider('option', 'max'));


                $("input#min-field").change(function () {
                    var value1 = $("input#min-field").val().replace(/\D/g, '');
                    var value2 = $("input#max-field").val().replace(/\D/g, '');

                    if (parseInt(value1, 10) > parseInt(value2, 10)) {
                        value1 = value2;
                        $("input#min-field").val(value1);
                    }
                    $(".slider").slider("values", 0, value1);
                });


                $("input#max-field").change(function () {
                    var value1 = $("input#min-field").val().replace(/\D/g, '');
                    var value2 = $("input#max-field").val().replace(/\D/g, '');

                    if (value2 > 15000000) { value2 = 15000000; jQuery("input#max-field").val(15000000) }

                    if (parseInt(value1, 10) > parseInt(value2, 10)) {
                        value2 = value1;
                        $("input#max-field").val(value2);
                    }
                    $(".slider").slider("values", 1, value2);
                });
            });

        }
        else if (operacion == 5) {

            function addCommas(nStr) {
                var x, x1, x2;
                nStr += '';
                x = nStr.split('.');
                x1 = x[0];
                x2 = x.length > 1 ? '.' + x[1] : '';
                var rgx = /(\d+)(\d{3})/;
                while (rgx.test(x1)) {
                    x1 = x1.replace(rgx, '$1' + ',' + '$2');
                }
                return x1 + x2;
            }

            $(".slider").slider({
                min: 50000000,
                max: 1500000000,
                step: 1000000,
                values: [0, 1500000000],
                range: true,
                stop: function (event, ui) {
                    $("input#min-field").val("$" + addCommas(ui.values[0].toString()));
                    $("input#max-field").val("$" + addCommas(ui.values[1]));
                },
                slide: function (event, ui) {
                    $("input#min-field").val("$" + addCommas(ui.values[0].toString()));
                    $("input#max-field").val("$" + addCommas(ui.values[1]));
                }
            });
            $('.range-wrap').each(function () {
                $("input#min-field").val("$" + addCommas($(".slider").slider("values", 0)));
                $("input#max-field").val("$" + addCommas($(".slider").slider("values", 1)));
                $('.min-value').text($('.slider').slider('option', 'min'));
                $('.max-value').text($('.slider').slider('option', 'max'));


                $("input#min-field").change(function () {
                    var value1 = $("input#min-field").val().replace(/\D/g, '');
                    var value2 = $("input#max-field").val().replace(/\D/g, '');

                    if (parseInt(value1, 10) > parseInt(value2, 10)) {
                        value1 = value2;
                        $("input#min-field").val(value1);
                    }
                    $(".slider").slider("values", 0, value1);
                });


                $("input#max-field").change(function () {
                    var value1 = $("input#min-field").val().replace(/\D/g, '');
                    var value2 = $("input#max-field").val().replace(/\D/g, '');

                    if (value2 > 15000000) { value2 = 15000000; jQuery("input#max-field").val(15000000) }

                    if (parseInt(value1, 10) > parseInt(value2, 10)) {
                        value2 = value1;
                        $("input#max-field").val(value2);
                    }
                    $(".slider").slider("values", 1, value2);
                });
            });

        }

    });



    var cuidad, inmueble, operacion, zona;

    $(".search-1").click(function () {
        zona = $(".zona option:selected").val();
        inmueble = $(".inmueble option:selected").val();
        ciudad = $(".ciudad option:selected").val();
        operacion = $(".operacion option:selected").val();
        var code = $(".codeInm").val();
        var precio = $("input#min-field").val().replace(/\D/g, '');
        var precio1 = $("input#max-field").val().replace(/\D/g, '');
        localStorage.setItem("precio", precio);
        localStorage.setItem("precio1", precio1);

        if (code !== "") {
            window.location.href = 'detalle-inmueble.php?dt=923-' + code + '';
        } else {
            window.location.href = 'inmuebles.php?gs=' + operacion + '&&ti=' + inmueble + '&&ci=' + ciudad + '&&zo=' + zona + '&&pre=' + precio + '&&pre1=' + precio1 + '';
        }

    });



});