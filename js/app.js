//*Asignación de variables*//
function mostraNom()
{
  var txtNom;
  txtNom=document.getElementById("nom").value;
  alert(txtNom);
}
//*Asignacion de funciones*//
function sumaAsignacion()
{
 
  var op1=parseInt(document.getElementById("op1").value);
  var op2=parseInt(document.getElementById("op2").value);
  var res=op1+op2;
  document.getElementById("resultat").innerHTML=op1+"+"+op2+"="+res;
}

function restaAsignacion()
{
 
  var op1=parseInt(document.getElementById("op1").value);
  var op2=parseInt(document.getElementById("op2").value);
  var res=op1-op2;
  document.getElementById("resultat").innerHTML=op1+"-"+op2+"="+res;
}

function multiplicacionAsignacion()
{
 
  var op1=parseInt(document.getElementById("op1").value);
  var op2=parseInt(document.getElementById("op2").value);
  var res=op1*op2;
  document.getElementById("resultat").innerHTML=op1+"*"+op2+"="+res;
}

function divisionAsignacio()
{
 
  var op1=parseInt(document.getElementById("op1").value);
  var op2=parseInt(document.getElementById("op2").value);
  var res=op1/op2;
  document.getElementById("resultat").innerHTML=op1+"/"+op2+"="+res;
}
//*Funcionamiento de los calculos*//
var cop1,cop2,cop;
var insignia = document.getElementById("insignia")

function ndigit(d)
{
  var n;
  n=parseInt(document.getElementById("scr").value);
  n=10*n+d;
  document.getElementById("scr").value=n;
}

function clearScreen()
{
  document.getElementById("scr").value=0;
}
function calc(op)
{
  cop1=parseInt(document.getElementById("scr").value);
  cop=op;
  insignia.innerHTML=cop
  clearScreen();
  
}

function calcula()
{
  cop2=parseInt(document.getElementById("scr").value);
  var res;
  if (cop=='+')
    {
      res=cop1+cop2;
    }
  else if (cop=='-')
    {
      res=cop1-cop2;
    }
  else if (cop=='*')
    {
      res=cop1*cop2
    }
  else if (cop=='/')
    {
      res=cop1/cop2
    }
  document.getElementById("scr").value=res;
}