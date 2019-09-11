function mostrar() {
    var edad;

    edad = parseInt(document.getElementById("edad").value);
    if (!isNaN(edad)) {
        if (edad < 13) {
            alert("Es niño");
        }
        else if (edad <= 17) { //ya descarte que no sea menor a 13 en el 1er IF
            alert("Es adolescente");
        }
        else {
            
            alert("Es adulto");
        }
    }
    else{
        alert("No es un numero valido");
    }
}//FIN DE LA FUNCIÓN