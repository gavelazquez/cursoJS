//console.log(personas);
window.addEventListener('load', function(){
    let divTabla = document.getElementById('divTabla');
    let tabla = crearTabla(autos);
    divTabla.appendChild(tabla);
});

function crearTabla(arr){
    let tabla = document.createElement('table');
    let encabezado = document.createElement('tr');

    for (prop in arr[0]){
        let th = document.createElement('th'); //creo elemento th
        //th.setAttribute('style', 'background: #00ff00');
        th.setAttribute('style', 'background: rgb(35,205,188); padding: 0 5px;');
        
        /*esta es una forma de hacerlo:
        let texto = document.createTextNode(prop);
        th.appendChild(texto);*/
        th.textContent=prop; //cargo al th el valor de la propiedad
        encabezado.appendChild(th); //inyecto el th en el tr
    }
    tabla.appendChild(encabezado);//agrego la fila encabezado a la tabla
    //una vez resuelto el encabezado armo el cuerpo de la tabla
    for (let i=0; i < arr.length;i++){ //con este for recorro el array de personas
        let fila = document.createElement('tr'); //para cada persona creo una fila
        for (prop in arr[i]){ //con este for in recorro los atributos de la persona
            
            let celda = document.createElement('td'); //para cada atributo creo una celda
            if(i%2){
                celda.setAttribute('style', 'background: rgb(200,200,200)')
            }
            celda.textContent= arr[i][prop]; //cargo en la celda el valor del atributo
            fila.appendChild(celda); //agrego la celda a la fila 
        }
        tabla.appendChild(fila); //una vez que termine de recorrer a la persona, agrego la fila a la tabla
    }

    tabla.setAttribute('border','1px solid black');
    tabla.setAttribute('style','border-collapse:collapse');

    return tabla;

}

//crearTabla(personas);
