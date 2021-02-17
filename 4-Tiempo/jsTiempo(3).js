var miIntervalo, contador=0;

function inicio()
{
	alert("La aplicacion inicio");
	miIntervalo = setInterval(SegundosEnElAire,2000);
}
function SegundosEnElAire()
{
	alert("Bienvenidos a la UTN FRA");
	contador++;
	alert("Numero de repeticiones "+ contador);
}
function fin()
{
	alert("Parando repetidor");
	clearTimeout(miIntervalo);
}
