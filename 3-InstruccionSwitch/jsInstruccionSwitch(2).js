function mostrar()
{
//tomo la edad
var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño)
{
  case "Junio":
  case "Julio":
  case "Agosto":
  alert("Abrigate que hace frio.");
  break;
  case "Septiembre":
  case "Octubre":
  case "Noviembre":
  case "Diciembre":
  alert("Ya pasamos el frio, ahora calor!!!.");
  case "Enero":
  case "Febrero":
  case "Marzo":
  case "Abril":
  case "Mayo":
  alert("Falta para el invierno.");
  break;
}


}//FIN DE LA FUNCIÓN
