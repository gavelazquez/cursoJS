//devuelve array
//let div = document.getElementsByTag("div");
let div = document.getElementById("miDiv");
//let hijos = div.childNodes;

//este me devuelve solo los elementos, no los textos
let hijos = div.children;

//let cant = div.childElementCount;

//con esto descarto los que son del tipo texto que se originan por los espacios
let primerHijo = div.firstElementChild;

let p1 = document.getElementById('p1');
let padre = p1.parentNode;
let titulo2 = document.getElementById('titulo');
let titulo = document.getElementsByTagName('h1')[0];
//esta conexion se llama chaining / encadenado, en una linea o separado
let hermano= titulo
            .nextElementSibling
            .nextElementSibling;
let body = document.body;
let ultimoHijo = body.lastElementChild;
console.log(ultimoHijo);

let h2 = ultimoHijo.previousElementSibling;

console.log(h2);

console.log(div.hasChildNodes());

let enlace = document.createElement('a');
let texto = document.createTextNode('Ir a Clarin');
enlace.appendChild(texto);
enlace.setAttribute('href', 'http://clarin.com');
enlace.setAttribute('target', '_blank');

let divEnlace=document.getElementById('enlace');
divEnlace.appendChild(enlace);
// console.log(hijos);


// console.log(primerHijo);

// console.log(padre);

// console.log(titulo);

// console.log(hermano);
//el estilo de js pisa el estilo del css por que se ejecuta despues de la carga de la pagina
hijos[0].style.backgroundColor = "red";
//en el html los Enter o espacios en blanco agregan elementos del tipo text

//console.log(hijos[1]);

