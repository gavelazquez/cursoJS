function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var max = 10;
	var min = 1;
	var num = Math.floor(Math.random()*((max+1)-min)+min);	
	//Math.floor devuelve el valor entero menor
	alert(num);
}//FIN DE LA FUNCIÓN