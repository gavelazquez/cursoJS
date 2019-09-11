function mostrar()
{
    var edad;
    //Descargar live server
    //descargar carpeta de laboratorio
    //operadores logicos || (or)  && (and) ! (NOT)
    //Operadores relacionales (== ==== != > < >= <=)
    //castear (convierto el tipo dentro del mismo tipo de dato, x ej. paso de float a un Int)
    //parsear (convierto un tipo de datos en otro diferente)
//tomo la edad
edad = parseInt(document.getElementById("edad").value);
console.log(typeof edad);
if (edad === 15) //mismo valor y tipo ===
{
    alert("Niña Bonita");
}
}//FIN DE LA FUNCIÓN