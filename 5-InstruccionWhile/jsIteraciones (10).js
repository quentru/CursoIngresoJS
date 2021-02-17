function mostrar()
{
	var sumaPositivo=0;
	var sumaNegativo=0;
	var numeroIngresado;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadCeros=0;
	var promedioPositivos;
	var promedioNegativos;
	var cantidadPares=0;
	var respuesta = "s";
	while(respuesta != "n")
	{
			numeroIngresado = parseInt(prompt("Ingrese un numero"));
			if(numeroIngresado==0)
			{
				cantidadCeros++;
			}
			else if(numeroIngresado*(-1) > 0 )
			{
				sumaNegativo = sumaNegativo + numeroIngresado;
				cantidadNegativos++;
			}else if(numeroIngresado % 2==0)
			{
				cantidadPares++;
			}else
			{
				sumaPositivo = sumaPositivo + numeroIngresado;
				cantidadPositivos++;
			}
			respuesta = prompt("'n' para detenerse");
	}
	promedioNegativos = sumaNegativo / cantidadNegativos;
	promedioPositivos = sumaPositivo / cantidadPositivos;
document.write("Cantidad de ceros "+cantidadCeros);
document.write(", Cantidad de positivos "+cantidadPositivos);
document.write(", Cantidad de negativos "+cantidadNegativos);
document.write(", Suma de los positivos "+sumaPositivo);
document.write(", Suma de los negativos "+sumaNegativo);
document.write(", Promedio de los positivos "+promedioPositivos);
document.write(", Promedio de los negativos "+promedioNegativos);
document.write(", Cantidad de pares "+cantidadPares);
}
