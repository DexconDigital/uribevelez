<?php
// require_once 'variables/config.php';
require 'modelo_inmueble.php';

// $ch = curl_init();
//     $headers =  'Authorization:mUwVNQWQnF5lxxC6CSAy9765fYOFB1D99H4VIusO-923';
//     curl_setopt($ch, CURLOPT_URL,'http://www.simi-api.com/ApiSimiweb/response/v21/inmueblesDestacados/total/12');
//     curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
//     curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//     curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
//     curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
//     curl_setopt($ch, CURLOPT_USERPWD, $headers);
//     $result = curl_exec($ch);
//     curl_close($ch);
//     $api = json_decode($result, true);
    


function inmuebles_destacados($r)
{
    if (is_array($r)) {
            $cantidad_inmuebles= count($r)-1;
            modelo_inmueble($r, $cantidad_inmuebles);
    } else {
        echo '<h2 class="text-center" >No tiene Inmuebles Destacados</h2>';
    }
}
