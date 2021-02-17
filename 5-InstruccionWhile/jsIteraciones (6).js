function mostrar()
{
	var contador=0;
	var acumulador=0;
	var numeroIngresado;
	while(contador!=5)
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numeroIngresado;
		contador++;
	}
alert("Finalizando");


document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador/5;

}//FIN DE LA FUNCIÓN
