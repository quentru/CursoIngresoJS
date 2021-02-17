function mostrar()
{
	var maximo=0;
	var minimo=0;
	var numeroIngresado;
	var respuesta = "s";
	while(respuesta != "n")
	{
			numeroIngresado = parseInt(prompt("Ingrese un numero"));
			if(numeroIngresado > maximo)
			{
				maximo=numeroIngresado;
			}else if(numeroIngresado < minimo)
			{
				minimo = numeroIngresado;
			}
			respuesta = prompt("'n' para detenerse");
	}
document.getElementById("maximo").value = maximo;
document.getElementById("minimo").value = minimo;

}
