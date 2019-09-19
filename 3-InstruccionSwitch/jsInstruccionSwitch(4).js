function mostrar()
{
/* al seleccionar un mes  informar.
	si tiene 28 días.
	si tiene 30 días.
	si tiene 31 días.*/ 
var mesDelAño = document.getElementById('mes').value;

switch(mes){
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
        alert("Falta para el invierno.");
        break;
    case "Julio":
    case "Agosto":
        alert("Abrigate que hace frio.");
        break;
    default:
        alert("Ya pasamos el frio, ahora calor!!!.");

}

}//FIN DE LA FUNCIÓN