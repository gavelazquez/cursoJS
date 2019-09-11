function mostrar()
{
var edad;

edad = parseInt(document.getElementById("edad").value);

//if (edad >=13 && edad <=17) {
if (!(edad <13 || edad >17 || isNaN(edad))) {
    alert("Es adolescente");
}

}//FIN DE LA FUNCIÓN