$(document).ready(function(){
	$('.contenedor a:first').addClass('active');
	$('.secciones article').hide();
	$('.secciones article:first').show();

	$('.contenedor  a').click(function(){
		$('.contenedor a').removeClass('active');
		$(this).addClass('active');
		$('.secciones article').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;

$(body.style.zoom = "70%");

	});
});