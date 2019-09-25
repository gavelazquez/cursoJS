let x3 = "Escritorio";
//{} objetos
//[] arrays
console.log(x3.length);
console.log("algo".length);
console.log("      algo        ".trim());
let cadena = "Ferrocarril";
console.log(cadena.toUpperCase());

//devuelve la posicion del caracter que le paso por parametro, comenzando desde el inicio hacia el final
console.log(cadena.indexOf('r', 4));

//devuelve la posicion del caracter que le paso por parametro, pero buscando desde atrás hacia adelante
console.log(cadena.lastIndexOf('r', 3));

//verifica si existe dentro de la var la cadena que le indico por parametro
console.log(cadena.includes('r'));

//si comienza con:
console.log(cadena.startsWith('Fr'));

////////////////////////////////////////////////////////////////////

//alert ("fuera de la funcion");

//mensaje: parametro formal
function saludar (mensaje, otraCosa){
    alert(mensaje);
}
//"Hola a Todes" argumento, o parametro actual
//saludar("Hola a Todes");

//la funcion se autoinvoca:
/*(function saludar (mensaje){
    alert(mensaje);
})();
*/

//puedo meter la funcion en una variable, incluso su declaracion
/*let x= function saludar (mensaje){
    alert(mensaje);
}*/

//x("Hola");

//puede meter la funcion en una variable
//let x=saludar();

////////////////////////////////////////////////////////////////////

//copio o paso po parametro: por valor o por referencia

//en array paso contenido por referencia (solo para objetos, no para variables comunes como el string)
//poque en ellos se guarda la direccion de memoria

/*let x2 = [12,5,6,8];
let y=x2;
//y apunta a la misma direccion de memoria que x 
y.push(300);
console.log(x2);
*/

////////////////////////////////////////////////////////////////////
/*
function modificarX(){
x.push("Andrea");
console.log("Aca dentro vale " + x);

}
let x =["Juan", "Pedro", "Luis"];
console.log("Antes de la funcion x vale " + x);

modificarX(x);

console.log("Despues de la funcion x vale "+ x);

*/

let perro={
    nombre : "Bobby",
    edad: 3,
    patas:4,
    raza:"Caniche",
    ladrar : ()=>{console.log("Guau Guau")}
}
console.log(perro.ladrar());