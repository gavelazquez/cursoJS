/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numUno;
    var numDos;
    var suma;
    numUno = parseInt(document.getElementById("numeroUno").value);
    numDos = parseInt(document.getElementById("numeroDos").value);
    suma = numUno + numDos;
    alert("La suma es " + suma);
}

function restar()
{
	var numUno;
    var numDos;
    var resta;
    numUno = parseInt(document.getElementById("numeroUno").value);
    numDos = parseInt(document.getElementById("numeroDos").value);
    resta = numUno - numDos;
    alert("La Resta es " + resta);
}

function multiplicar()
{ 
    var numUno;
    var numDos;
    var mult;
    numUno = parseInt(document.getElementById("numeroUno").value);
    numDos = parseInt(document.getElementById("numeroDos").value);
    mult = numUno * numDos;
    alert("La multiplicación es " + mult);
    
}

function dividir()
{
    var numUno;
    var numDos;
    var div;
    numUno = parseInt(document.getElementById("numeroUno").value);
    numDos = parseInt(document.getElementById("numeroDos").value);
    div = numUno / numDos;
    alert("La división es " + div);
    

}

