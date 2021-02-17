/*Al comenzar el juego generaremos un número
RANDOM del 1 al 3 para la selección de la máquina,
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente
a su opción  y le informaremos si ganó, empató o perdió.
*/
///1-piedra
///2-papel
///3-tijera
var eleccionMaquina;

function comenzar()
{
	eleccionMaquina = parseInt(Math.floor(Math.random()*3)+1);
}//FIN DE LA FUNCIÓN
function piedra()
{
	switch (eleccionMaquina){
		case 1:
			alert("Piedra!! Empatamos");
			break;
		case 2:
			alert("Papel!! A casa pete");
			break;
		default:
			alert("Tijera!! Ganaste esta vez");
			break;
	}
}//FIN DE LA FUNCIÓN
function papel()
{
	switch (eleccionMaquina){
		case 1:
			alert("PIEDRA!! ganaste.");
			break;
		case 2:
			alert("PAPEL!! uh empate");
			break;
		default:
			alert("TIJERA!! TOMAAAA MUERT@@!!");
			break;
		}
}//FIN DE LA FUNCIÓN
function tijera()
{
	switch (eleccionMaquina){
		case 1:
			alert("PIEDRA!! QUE MALO QUE SOOOOS");
			break;
		case 2:
			alert("PAPEL!! ganaste, te odio.");
			break;
		default:
			alert("TIJERA!! empate");
			break;
		}
}//FIN DE LA FUNCIÓN
