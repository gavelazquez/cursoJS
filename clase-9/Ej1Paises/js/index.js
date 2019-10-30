window.addEventListener('load',()=>{
    let selPaises = document.getElementById('selPaises');
    let selCiudades = document.getElementById('selCiudades');
    
    selPaises.addEventListener('change',()=>{
        cargarSelect(selCiudades, obtenerCiudades(datos, selPaises.value));
    })
    cargarSelect(selPaises, obtenerPaises(datos));
    cargarSelect(selCiudades, obtenerCiudades(datos, selPaises.value));
});

function cargarSelect(select, arr){
    limpiarSelect (select);
    let opcion;
    arr.forEach(element => {
        opcion = document.createElement('option');
        let texto = document.createTextNode(element);
        opcion.appendChild(texto);
        opcion.setAttribute('value', element);
        select.appendChild(opcion);
    }); 
}
function limpiarSelect (select){
    while(select.hasChildNodes()){
        select.removeChild(select.firstElementChild);
    }
}
function obtenerPaises (arr){
   return arr.map(elemento=>elemento.pais)
                .unique()
                .sort();

}

function obtenerCiudades (arr, pais){
return arr.filter(elemento=>elemento.pais === pais)
.map(elemento=>elemento.ciudad)
.unique()
.sort();
//unshift
}

/*
otra forma:

let obtenerCiudades = (arr, pais)=>
arr.filter(elemento=>elemento.pais === pais)
.map(elemento=>elemento.ciudad)
.unique()
.sort();

otras formas de declarar / invocar funciones
function foo(){

}
let pepe = foo;

pepe(); con los parentesis invoco a la funcion

*/
Array.prototype.unique = function(){
    // ... spreed operator para que en lugar de 
    //llenar el objeto que devuelve set, que meta los datos en u  array
    //set devuelve valores unicos

    //no puedo usar un => function, porque pierdo el contexto (this)
    return [... new Set(this)];
}