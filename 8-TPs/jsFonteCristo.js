/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
var cantidadPares=0;
var cantidadImpares=0;
var cantidadDivisibles=0;
var	numeroObtenido;
function ComenzarIngreso()
{
	numeroObtenido = parseInt(document.getElementById("numero").value);
}

function NumerosPares()
{
	ComenzarIngreso();
  var i;
  for(i = numeroObtenido; i!=0; i--)
  {
    if(i % 2 == 0)
    {
      cantidadPares++;
      alert(i);
    }
  }
  alert("Hay "+cantidadPares+" pares, entre el numero ingresado y el 0");
}
function NumerosImpares()
{
	ComenzarIngreso();
	var i;
	for(i = numeroObtenido; i!=0; i--)
	{
		if(i % 2 != 0)
		{
			cantidadImpares++;
			alert(i);
		}
	}
  alert("Hay "+cantidadImpares+" impares, entre el numero ingresado y el 0");
}
function NumerosDivisibles()
{
		ComenzarIngreso();
		var i;
		for(i = numeroObtenido; i!=0; i--)
		{
			if(numeroObtenido % i == 0)
			{
				cantidadDivisibles++;
				alert(i);
			}
		}
	  alert("Hay "+cantidadDivisibles+" divisibles, entre 100 y el 0");
}

function 	VerificarPrimo()
{
		var contadorDivisibles=0;
		ComenzarIngreso();
		var i;
		for(i = numeroObtenido; i!=0; i--)
		{
			if(numeroObtenido % i == 0)
			{
				contadorDivisibles++;
				//alert(i);
			}
		}
		if(contadorDivisibles==2)
		{
			alert(numeroObtenido+ " es primo");
		}else
		{
			alert(numeroObtenido +" no es primo");
		}
}
function 	NumerosPrimos()
{
		var contadorPrimos=0;
		ComenzarIngreso();
		var i;
		var j;
		for(i = numeroObtenido; i!=0; i--)
		{
			if (contadorDivisibles==2)
			{
				contadorPrimos++;
			}else("no es primo");
			var contadorDivisibles=0;
			for(j=i; j!=0;j--)
			{
				if(i % j == 0)
				{
					//alert(j);
					contadorDivisibles++;
				}
			}
		}
		alert("primos "+contadorPrimos);
}
