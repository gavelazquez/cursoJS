let listaPersonas =[];
//Es igual a:
//let listaPersonas1 = new Array[]
function Persona (nombre, apellido, edad, genero, maneja, nada, bicicleta, pais){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.maneja = maneja;
    this.nada = nada;
    this.bicicleta = bicicleta;
    this.pais = pais;
    //una funcion que esta dentro de un objeto se llama metodo
    Persona.prototype.saludar = function() {
    
        //en prototype queda una sola vez en memoria para todas las personas (la heredan)
        console.log("Hola, soy " + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años");
    }
}
window.addEventListener('load', function(){
    //tres formas de obtener el formulario (manejo de DOM)
    //var frm = this.document.getElementById('frmPersona');
    //var frm = this.document.getElementsByTagName('form')[0];
    let frm = this.document.forms[0];
    //console.log(frm);
    frm.addEventListener('submit', manejarSubmit);
});

function manejarSubmit(e){
    //desactivo que la infomacion se vaya a otro lado, en este caso a Google
    e.preventDefault();
    //quien disparo el evento e.target
    let frm = e.target;
    //alert("Capture el evento submit");

    //aca voy a crear una Persona!!!!!!!!!!!!!!
    let nuevaPersona = traerPersona();

   //console.log(nuevaPersona);
   listaPersonas.push(nuevaPersona);
    
    //console.log(listaPersonas);
    cargarFormulario(nuevaPersona);
    //limpiar el fomulario
    limpiarFormulario();
}
//let p3= new Persona("Juan", "Gomez",30, "Masculino", true, false, true, "Argentina");
function traerPersona (){

    let nombre = document.getElementById('txtNombre').value;
    let apellido = document.getElementById('txtApellido').value;;
    let edad  = parseInt(document.getElementById('txtEdad').value);
    let genero;
    if (document.getElementById('rdoMasculino').checked){
         genero ="masculino";
    }
    else{
         genero ="femenino";
    }
  
    let nada = document.getElementById('chkNada').checked;
    let bicicleta = document.getElementById('chkBici').checked;
    let maneja = document.getElementById('chkManeja').checked;
    let pais = document.getElementById('selPais').value;

    //siempre se uso var pero ahora se recomienda usar let para no contaminar el scope global
   //let nuevaPersona= new Persona("Juan", "Gomez",30, "Masculino", true, false, true, "Argentina");
   let nuevaPersona= new Persona(nombre, apellido, edad, genero, maneja, nada, bicicleta, pais);
   return nuevaPersona;
}
function cargarFormulario(persona){


    document.getElementById('txtNombre2').value=persona.nombre;
    document.getElementById('txtApellido2').value=persona.apellido;
    document.getElementById('txtEdad2').value=persona.edad;

    if (persona.genero =="masculino"){
        document.getElementById('rdoMasculino2').checked=true;
   }
   else{
        if (persona.genero ="femenino"){
            document.getElementById('rdoFemenino2').checked=true;
        }
   }
    document.getElementById('chkNada2').checked=persona.nada;
    document.getElementById('chkManeja2').checked=persona.maneja;
    document.getElementById('chkBici2').checked=persona.bicicleta;
    document.getElementById('selPais2').value= persona.pais;
}
function limpiarFormulario(){
    document.getElementById('txtNombre').value="";
    document.getElementById('txtApellido').value="";
    document.getElementById('txtEdad').value="";
    document.getElementById('rdoMasculino').checked=false;
    document.getElementById('rdoFemenino').checked=true;
    document.getElementById('chkNada').checked=false;
    document.getElementById('chkManeja').checked=false;
    document.getElementById('chkBici').checked=false;
    document.getElementById('selPais').value= "ar";

}