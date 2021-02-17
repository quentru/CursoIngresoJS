/*En la pantalla se mostrarán 6 botones de
distintos colores,  al comenzar el juego se
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar
 el botón correcto se informara cuanto tiempo tardo.
*/
///1-Azul
///2-Amarillo
///3-Marron
///4-verde
///5-Celeste
///6-Rojo
var colorSecreto;
var color;
var tiempoInicio;
var segundos=0;
function SegundosEnElAire()
{
	segundos=segundos+1;
}
function comenzar()
{
	colorSecreto=parseInt(Math.floor(Math.random()*6)+1);
	document.getElementById("ColorElejido").value = "TEXTO";
	switch (colorSecreto) {
		case 1:
		document.getElementById("ColorElejido").style.color = "#0000FF";
		color="azul";
		break;
		case 2:
		document.getElementById("ColorElejido").style.color = "gold";
		color="amarillo";
		break;
		case 3:
		document.getElementById("ColorElejido").style.color = "brown";
		color="marron";
		break;
		case 4:
		document.getElementById("ColorElejido").style.color = "chartreuse";
		color="verde";
		break;
		case 5:
		document.getElementById("ColorElejido").style.color = "cyan";
		color="celeste";
		break;
		default:
		document.getElementById("ColorElejido").style.color = "orangered";
		color="rojo";
		break;
	}
	tiempoInicio = setInterval(SegundosEnElAire, 1000);
}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
	clearInterval(tiempoInicio);
	if(color==colorParametro)
	{
		alert("Su respuesta fue correcta, usted tardo ");
		alert("su tiempo fue: "+segundos+" segundos");
	}
}//FIN DE LA FUNCIÓN
