var miIntervalo, contador=0;

function inicio()
{
	alert("La aplicacion inicio");
	miIntervalo = setInterval(SegundosEnElAire,2000);
}
function SegundosEnElAire()
{
	contador++;
	alert("Bienvenidos a la UTN FRA");
	alert("Numero de repeticiones "+ contador);
	if(contador==5)
	{
		alert("Parando repetidor");
		clearTimeout(miIntervalo);
	}
}
function fin()
{
	alert("Parando repetidor");
	clearTimeout(miIntervalo);
}
