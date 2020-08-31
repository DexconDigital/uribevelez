$.ajax({
    url: 'js/noticesJSON.php',
    dataType: "json",
    success: function (data) {
        var result = "";
        for (var j in data) {
            result += '<div class="single-blog-item">'+
            '							<div class="preview">'+
            '								<a  href="detalle-noticia.php?codigo=' + data[j].id + '"><img alt="img" src="http://biinyu.com.co/uribevelez/uvelez-noticias/admin/' + data[j].imagen + '" ></a>'+
            '							</div>'+
            '							<div class="descr">'+
            '								<div class="item-thumbnail">'+
            '									<div class="single-item date">'+
            '										<i class="fa fa-calendar"></i>'+
            '										<a class="value" href="detalle-noticia.php?codigo=' + data[j].id + '"> ' + data[j].fecha + '</a>'+
            '									</div>'+
            '								</div>'+
            '								<span class="title"><a  href="detalle-noticia.php?codigo=' + data[j].id + '">' + data[j].titulo + ''+
            '									</a></span>'+
            '								<p>' + data[j].descripcion + '</p>'+
            '							</div>'+
            '						</div>';
            j++;
            if (j == 1) {
                break;
            }
        }
        


        $("#ultima-noticias").append(result);


    },
    error: function (data) {
    }
});





