function alertDismissed() {
// acción, si fracasa
}
//función para mostrar alerta
function showAlert(msj) {
navigator.notification.alert(
    msj, // mensaje
    alertDismissed, // callback
    'Práctica 1', // título
    'Aceptar' // nombre del botón
);
}

$(document).ready(function(e) {

	document.addEventListener("deviceready",function(){
		$('.btn').tap(function(){
			var boton = (($(this).attr('class')).split(' '))[1];
			switch(boton){

			case 'b1':
				navigator.notification.beep(1);
				break;
			case 'b2':
				navigator.notification.beep(2);
				break;			
			case 'v1':
				navigator.notification.vibrate(500);
				break;
			case 'v2':
				navigator.notification.vibrate(300);
				navigator.notification.vibrate(1000);				
				break;
			}
		});
	
	},false);

});
