function mostrar()
{
//tomo la edad
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch (mesDelAño) {
	case "Junio":
  case "Septiembre":
  case "Noviembre":
  case "Diciembre":
  case "Abril":
  alert("Este mes tiene 30 dias");
	break;
	case "Febrero":
	alert("Este mes tiene 29 o 28 dias");
  break;
	default:
	alert("Este mes tiene 31 dias");
	break;

}


}//FIN DE LA FUNCIÓN
