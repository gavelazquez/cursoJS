function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch(mes){
    case "Enero":
    case "Febrero":
        alert("Verano");
        break;
    case "Marzo":
        alert("A clases");
        break;
    case "Julio":
            alert("Vacaciones");
            break;
    case "Diciembre":
            alert("Felices Fiestas");
            break;
    default:
        alert("Default");

}


}//FIN DE LA FUNCIÓN