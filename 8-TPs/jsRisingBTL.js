/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos.
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */


//vava==variable A validar


function ComenzarIngreso ()
{
  var edad;
  var sexo;
  var estadoCivil;
  var sueldoBruto;
  var legajo;
  var nacionalidad;
  var flagMasculino=0;
  ValidarNumeros(edad, 18, 90,"Ingrese una edad", "Reingrese la edad, tiene que ser entre 18 y 90 años", "Edad");
  sexo = prompt("Ingrese su sexo");
  while(sexo != "F" && sexo != "M")
  {
    sexo = prompt("Reingrese su sexo, solo puede ser 'M' o 'F'");
  }
  if(sexo=="M")
  {
    flagMasculino=1;
    document.getElementById("Sexo").value = "Masculino";
  }else
  {
    flagMasculino=0;
    document.getElementById("Sexo").value = "Femenino";
  }
  ValidarNumeros(sueldoBruto, 8000, 1000000,"Ingrese su sueldo bruto", "Reingrese su sueldo bruto, tiene que ser entre 8000 y 1000000 años","Sueldo");
  ValidarNumeros(estadoCivil, 1, 4,"Ingrese 1_Soltero, 2_Casado, 3_ divorciado, 4_Viudo", "Reingrese su estadoCivil, 1_Soltero, 2_Casado, 3_ divorciado, 4_Viudo","EstadoCivil");
  switch (estadoCivil) {
    case 1:
      if(flagMasculino==1)
      {
        document.getElementById("EstadoCivil").value = "Soltero";
      }else
      {
        document.getElementById("EstadoCivil").value = "Soltera";
      }
      break;
    case 2:
        if(flagMasculino==1)
        {
          document.getElementById("EstadoCivil").value = "Casado";
        }else
        {
          document.getElementById("EstadoCivil").value = "Casada";
        }
        break;
    case 3:
        if(flagMasculino==1)
        {
          document.getElementById("EstadoCivil").value = "Diverciado";
        }else
        {
          document.getElementById("EstadoCivil").value = "Divorciada";
        }
        break;
    default:
      if(flagMasculino==1)
      {
        document.getElementById("EstadoCivil").value = "Viudo";
      }else
      {
        document.getElementById("EstadoCivil").value = "Viuda";
      }
      break;
  }
  ValidarNumeros(legajo, 1, 9000,"Ingrese su legajo", "Reingrese su legajo, tiene que ser entre 1 y 9000", "Legajo");
  nacionalidad = prompt("Ingrese su nacionalidad");
  while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
  {
    nacionalidad = prompt("Reingrese su nacionalidad, A_Argentino, E_Extranjeros, N_Nacionalizados");
  }
  switch (nacionalidad) {
    case "A":
      if(flagMasculino==1)
      {
        document.getElementById("Nacionalidad").value = "argentino";
      }else
      {
        document.getElementById("Nacionalidad").value = "Argentina";
      }
      break;
    case "E":
        if(flagMasculino==1)
        {
          document.getElementById("Nacionalidad").value = "Extranjero";
        }else
        {
          document.getElementById("Nacionalidad").value = "Extranjera";
        }
        break;
    default:
      if(flagMasculino==1)
      {
        document.getElementById("Nacionalidad").value = "Nacionalizado";
      }else
      {
        document.getElementById("Nacionalidad").value = "Nacionalizada";
      }
      break;
  }
}

function ValidarNumeros(vava, num1, num2, mensaje, mensajeError, id)
{
vava = prompt(mensaje);
while (vava <num1 || vava >num2)
{
  vava = prompt(mensajeError);
}
document.getElementById(id).value = vava;
}
