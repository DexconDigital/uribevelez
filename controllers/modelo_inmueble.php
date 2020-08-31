<?php

// modelo inmueble propiedades destacadas
function modelo_inmueble($r, $cantidad_inmuebles)
{
    for ($i = 0; $i < $cantidad_inmuebles; $i++) {
        $imagen = existeImagen(($r[$i]['foto1']));
        $codigo = str_ireplace("923-", "", $r[$i]['Codigo_Inmueble']);
        $api = $r[$i];

        echo '
        <li>
        <div class="item">
            <div class="preview">
            <a href="./detalle-inmueble.php?dt=' . $codigo . '">
                <img src="' . $imagen . '" style="
                width: 100%;
                height: 200px;" alt="">
                </a>
                <span class="like">
                    <i class="fa fa-heart"></i>
                </span>
            </div>
            <div class="item-thumbnail">
                <div class="single-thumbnail">
                    <i class="icon bath"></i>
                    <span class="value">' . $api['banios'] . '</span>
                </div>
                <div class="single-thumbnail">
                    <i class="icon sleep"></i>
                    <span class="value">' . $api['Alcobas'] . '</span>
                </div>
                <div class="single-thumbnail">
                    <i class="icon corner"></i>
                    <span class="value">' . $api['AreaConstruida'] . 'm<sup>2</sup></span>
                </div>
            </div>
            <div class="item-entry">
                <span class="item-title">  <a href="./detalle-inmueble.php?dt=' . $codigo . '">' . $codigo . '</a></span>
                <p class="item-text">' . $api['Gestion'] . '</p>
                <p class="item-text">' . $api['Tipo_Inmueble'] . '</p>
                <div class="item-info">
                    <span class="price">';
                    if ($api['Gestion'] == 'Arriendo/venta') {
                        echo '$' . $api['Canon'] . ' <br>$' . $api['Venta'];
                    } else if ($api['Gestion'] == 'Arriendo') {
                        echo '$' . $api['Canon'];
                    } else {
                        echo '$' . $api['Venta'];
                    }
                    echo '</span>

                </div>
            </div>
        </div>
    </li>
    

                     
            ';
    }
}


// Funciones para los modelos de propiedades
function existeImagen($r)
{
    if ($r == "") {
        $r = "images/no-image.png";
    }
    return $r;
}
