// JavaScript Document
//deviceready espera a que el deispositivo este listo
$(document).ready(function(e) {
   /* $('.btn').tap(function(){	
     var boton = (($(this).attr('class')).split(' '))[1];
     switch (boton){
     
	 case 'b1':
	  navigator.notification.beep(1);
	 break;
	 case 'b2':
	  navigator.notification.beep(2);
	 break;
	 case 'b3':
	  navigator.notification.beep(5);
	 break;
	 
	 
}*/

$('#alert  input [type=range]').swiperight(function(){
	alert ('deslizo a la derecha');
});

	 	});
document.addEventListener("deviceready",function(){
//	 navigator.notification.beep();
    $('.btn').tap(function(){	
     var boton = (($(this).attr('class')).split(' '))[1];
     switch (boton){
     
	 case 'b1':
	  navigator.notification.beep(1);
	 break;
	 case 'b2':
	  navigator.notification.beep(2);
	 break;
	 case 'b3':
	  navigator.notification.beep(5);
	 break;
	 case 'v1':
	  navigator.notification.vibrate(500);
	 break;
	 case 'v2':
  	  navigator.notification.vibrate(300);
	  navigator.notification.vibrate(1000);	  
	 break;
	 
	 }

$('#alert').swiperight(function(){
	navigator.notification.alert("deslizó a la derecha", function (){}, "Practica 1", "Aceptar");
	
});


$('#alert').swipeleft(function(){
	navigator.notification.confirm("¿Que desea hacer?",	function(boton){
		switch (boton)
		{
		case '0':
			  navigator.notification.beep(1);
		break;
		case '1':
			  navigator.notification.vibrate(500);
		break;
		}
		}, "Practica 1", "Beep, Vibrar, Cancelar");
});

	},fasle);
});	

