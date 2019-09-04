/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var nombre;
    var edad;
    nombre = document.getElementById("elNombre").value;
    edad = document.getElementById("laEdad").value;
    alert("Usted se llama " + nombre + " y tiene " + edad + " años");
    
    //alt + up o down (subo o bajo la linea de codigo)
    //shift + alt + up o down (copio y pego la linea de codigo arriba o abajo)
    //alt + shift + F (da formato)
}

