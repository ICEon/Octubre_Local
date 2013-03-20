$(document).ready(function(e) {

 document.addEventListener("deviceready", function() {
	 $('.btn').tap(function() {
		 var boton = (($(this).attr('class')).split(' '))[1];                 
		 switch(boton)
		{
		alert (boton);	
			case 'b1':
				navigator.notification.beep(1);
			break;
			case 'b2':
				navigator.notification.beep(2);
			break;
			case 'b3':
				navigator.notification.beep(3);
			break;
			case 'v1':
				navigator.notification.vibrate(500);
			break;
			case 'v2':
				navigator.notification.vibrate(500);
				navigator.notification.vibrate(1000);
			break;
		}
	 });
 },false);	

});
