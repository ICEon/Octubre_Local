
$(function() {


$('.btn').bind('tap',function(event) {
	     var boton = (($(this).attr('class')).split(' '))[1];
    alert (boton);
    });




});
