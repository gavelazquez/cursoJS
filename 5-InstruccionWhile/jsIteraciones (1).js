function mostrar()
{
	var i=0;
	
	while(i < 10){
		i++; //suma 1
		if(i % 2){ //cuando devuelve cero equivale a false
			//muestro los pares
			continue;
		}

		console.log("Cont: " + i);
		//uso de break con if
		//uso de continue
	}
	//console.log("Afuera Cont: " + i);
}//FIN DE LA FUNCIÓN