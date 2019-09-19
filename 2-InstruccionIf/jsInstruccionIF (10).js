function mostrar()
{
	/*Al presionar el Boton, asignar una nota RANDOM al examen y mostrar:
	"EXCELENTE" para notas igual a 9 o 10,
	"APROBÓ" para notas mayores a 4,
	"Vamos, la proxima se puede" para notas menores a 4 */
	//Genero el número RANDOM entre 1 y 10 
	var max = 10;
	var min = 1;
	var num = Math.floor(Math.random()*((max+1)-min)+min);	
	//Math.floor devuelve el valor entero menor

	if(num >8){

		alert('EXCELENTE');
	}
	else{
		if (num < 4){
			alert("Vamos, la proxima se puede");
		}
		else{
			alert("APROBÓ");
		}
	}

}//FIN DE LA FUNCIÓN