var sexo;
function mostrar()
{
  sexo = prompt("ingrese f ó m .");
  while(sexo != 'f' && sexo != 'm')
  {
    sexo = prompt("ingrese f ó m .");
  }
  alert("Usted entendio la pregunta");
}//FIN DE LA FUNCIÓN
