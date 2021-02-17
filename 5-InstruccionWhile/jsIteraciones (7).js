function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado;
	var respuesta = "s";
while(respuesta != "n")
{
		contador ++;
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numeroIngresado;
		respuesta = prompt("'n' para detenerse");
}

document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador/contador;
}//FIN DE LA FUNCIÓN
