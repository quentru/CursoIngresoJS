function mostrar()
{
	var positivo=0;
	var negativo=1;
	var numeroIngresado;
	var respuesta = "s";
	while(respuesta != "n")
	{
			numeroIngresado = parseInt(prompt("Ingrese un numero"));
			if(numeroIngresado*(-1) > 0 )
			{
				negativo = negativo * numeroIngresado;
			}else
			{
				positivo = positivo + numeroIngresado;
			}
			respuesta = prompt("'n' para detenerse");
	}
document.getElementById('suma').value = positivo;
document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN
