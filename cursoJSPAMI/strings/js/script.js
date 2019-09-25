//renderizar una pagina, dibujar la pantalla
//window es la ventana del navegador
//document es el html que me llamo como js

//agrego manejador de eventos en el navegador


//primer parametro indica cuando se va a llamar al 2do parametro (funcion)
//segundo parametro funcion que quiero que se ejecute (direccion de memoria, sin parentesis)
// (asincronico)
window.addEventListener('load', inicializaManejadores);

//funcion annonima (si no la voy a llamar de ningun otro lado)
//callback: funcion que va a llamar otra funcion dentro de su mismo cuerpo
window.addEventListener('load', function() {
    const BOTON = document.getElementById('btnCalcular');
    BOTON.addEventListener('click', calcularSuperficie);

});

window.addEventListener('load', ()=> {
    const BOTON = document.getElementById('btnCalcular');
    BOTON.addEventListener('click', calcularSuperficie);

});

//funcion nombrada (si la voy a utilizar en algun otro lugar)
function inicializaManejadores(){
    const BOTON = document.getElementById('btnCalcular');
    BOTON.addEventListener('click', calcularSuperficie);

}

function calcularSuperficie(){
    let radio = document.getElementById('txtRadio').value;
    let superficie = Math.PI * Math.pow(radio, 2); //para calcular el cuadrado?
    document.getElementById('txtSuperficie').value = superficie; 

}
//funciones anonimas
let unaFuncion = function(){
 alert("hola");
}

//funciones anonima y flecha

let unaFuncion2 = ()=>{
    alert("hola");
}
//unafuncion();

function calcular (operador1,operador2, callback){
    return callback(operador1, operador2);
}

function sumar (a,b){
    return a+b;
}

function restar (a,b){
    return a-b;
}

function multiplicar (a,b){
    return a+b;
}

function dividir (a,b){
    if (b!=0)
    {return a/b;
    }
    
}

let resultado = calcular(6,7, sumar);
console.log(resultado);

let resultado2 = calcular(10,7, restar);
console.log(resultado2);

//paradigma funcional: 