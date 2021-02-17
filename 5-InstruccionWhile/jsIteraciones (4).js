var numero;
function mostrar()
{
	numero = prompt("ingrese un número entre 0 y 10.");
	while(numero <0 || numero > 9)
	{
			numero = prompt("ingrese un número entre 0 y 10.");
	}
	alert("Usted por fin entendio que debe hacer");
}//FIN DE LA FUNCIÓN
