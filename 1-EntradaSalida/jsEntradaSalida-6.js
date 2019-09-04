/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
    var numUno;
    var numDos;
    var suma;
    numUno = parseInt(document.getElementById("numeroUno").value);
    numDos = parseInt(document.getElementById("numeroDos").value);
    suma = numUno + numDos;
    alert("La suma es " + suma);
}

