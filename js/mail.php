<?php
if (isset($_POST['email'])) {

	$nombre = $_POST['name'];
    $email = $_POST['email'];
    $telefono = $_POST['phone'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['message'];
    
	$email_from = "noreply@uribevelez.com";
	$email_to = "inmobiliaria@uribevelez.com";

	$message = '<html>'.
	'<head><meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">'.
	'<title>Correo desde la Web de Uribe Vélez</title>'.
	'</head>'.
	'<body>'.
	'<p>Este correo se ha inscrito desde la Web de Uribe Vélez:</p>'.
        '<p>'.'Nombre: ' . $nombre .'</p>'.
         '<p>'.'Telefono : ' . $telefono . '</p>'.
        '<p>'.'Email : ' . $email . '</p>'.
        '<p>'.'Asunto : ' . $asunto . '</p>'.
         '<p>'.'Mensaje : ' . $mensaje .'</p>'.
	'</body>'.
	'</html>';
	

	
	// create email headers
	$headers = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n".
			'Reply-To:'. $email_from . "\r\n" .
			'From:' . $email_from . "\r\n" .
			'X-Mailer: PHP/' . phpversion();
	$email = @mail($email_to, $asunto, wordwrap($message), $headers);

	if ($email) {
			echo'<script type="text/javascript">
    alert("Correo Enviado");
    window.location.href="../contactenos.html";
    </script>';
	} else {
			echo 2;
	}
} else {
	echo 2;
}
?>