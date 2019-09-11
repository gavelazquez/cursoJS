function mostrar()
{
//tomo la edad  
 
    var edad;

    edad = parseInt(document.getElementById("edad").value);

    if (edad >= 18) {
        alert("Es mayor de edad");
    }
    else {
        alert("Es menor de edad");
    }

}//FIN DE LA FUNCIÓN