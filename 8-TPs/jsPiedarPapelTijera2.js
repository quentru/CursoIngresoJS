var eleccionMaquina;
var contadorDeEmpates=0;
var contadorDeGanadas=0;
var contadorDePerdidas=0;
var ganadas;
var perdidas;
var empatadas;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina = parseInt(Math.floor(Math.random()*3)+1);
	mostrarResultado();


}//FIN DE LA FUNCIÓN
function piedra()
{
	switch (eleccionMaquina){
		case 1:
			alert("Piedra!! Empatamos");
			contadorDeEmpates++;
			break;
		case 2:
			alert("Papel!! A casa pete");
			contadorDePerdidas++;
			break;
		default:
			alert("Tijera!! Ganaste esta vez");
			contadorDeGanadas++;
			break;
		}
		comenzar();
	}//FIN DE LA FUNCIÓN
function papel()
{
	switch (eleccionMaquina){
		case 1:
			alert("PIEDRA!! ganaste.");
			contadorDeGanadas++;
			break;
		case 2:
			alert("PAPEL!! uh empate");
			contadorDeEmpates++;
			break;
		default:
			alert("TIJERA!! TOMAAAA MUERT@@!!");
			contadorDePerdidas++;
			break;
		}
		comenzar();
}//FIN DE LA FUNCIÓN
function tijera()
{
	switch (eleccionMaquina){
		case 1:
			alert("PIEDRA!! QUE MALO QUE SOOOOS");
			contadorDePerdidas++;
			break;
		case 2:
			alert("PAPEL!! ganaste, te odio.");
			contadorDeGanadas++;
			break;
		default:
			alert("TIJERA!! empate");
			contadorDeEmpates++;
			break;
		}
		comenzar();
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById("ganadas").value = contadorDeGanadas;
	document.getElementById("empatadas").value = contadorDeEmpates;
	document.getElementById("perdidas").value = contadorDePerdidas;
}
