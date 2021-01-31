function mostrar()
{
//tomo la edad
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);


switch(mesDelAño) {
	case "Febrero":
		alert("Este mes no tiene 29");
		break;
	default:
		alert("Este mes tiene 30 dias o mas");
		break;
}

}//FIN DE LA FUNCIÓN
