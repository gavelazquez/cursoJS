//en las variables primitivas guardo un solo valor. En los objetos puedo guardar mas valores/datos
//funcion constructora:
//funcion dentro de un objeto, la funcion se llama metodo
//el objeto tiene caracteristicas (atributos: nombre, edad - sustantivos) 
// y Tiene responsabilidades (metodos, acciones, son verbos)
function Persona (nombre, apellido, edad){
    //this es el scope de la función
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    //this.saludar = function(){
    //            console.log("Hola soy " + this.nombre + " " + this.apellido);
    //}

    //otra manera
    //this.saludar = saludar;
    
}

function saludar(){
              console.log("Hola soy " + this.nombre + " " + this.apellido);
}
//sobreescribo al padre, por lo que yo como objeto la heredo:

var x = new Persona("Juan", "Perez", 23);
var y = new Persona("Lucia", "Garcia", 30);
var z = new Persona("Andrea", "Vazquez", 31);
console.log(x);
console.log(y);
console.log(z);

Persona.prototype.saludar = function (){
    console.log("Hola soy " + this.nombre + " " + this.apellido);
};
//le agrego el atributo "genero" a la instancia x, no al objeto persona
//x.genero= "Masculino";

//le agrego el atributo genero a la clase Persona, no a una instancia del objeto
//tambien puedo hacer override de cualquier funcion que este objeto hereda
Persona.prototype.genero = 20;
console.log(x);
console.log(y);
console.log(z);

//ver downgrade
//web can i use?