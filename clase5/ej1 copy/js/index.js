//objeto o array asociativo
//objeto literal: lo hicimos a mano
var persona = {
    nombre : "Juan", 
    apellido : "Perez",
    edad : 20,
    domicilio : {
        pais : "Argentina",
        localidad : "Avellaneda",
        direccion : {
                    calle: "Av. Mitre",
                    numero: 750
        }
    }
};

console.log(persona.nombre);
console.log(persona['apellido']);
console.log(persona['altura']);
console.log(persona.domicilio.pais);
console.log(persona['domicilio']);
console.log(persona['domicilio']['direccion']['calle']);

//puedo acceder a los valores de persona en tiempo de ejecucion
var x = "edad";
console.log(persona[x]);

for (prop in persona) {
    // con prop me traigo las claves. con el operador corchete me traigo el valor del objeto
console.log(prop + ": " + persona[prop]);
}

for (prop in persona.domicilio) {
    // con prop me traigo las claves. con el operador corchete me traigo el valor del objeto
console.log(prop + ": " + persona.domicilio[prop]);
}

for (prop in persona.domicilio.direccion) {
    // con prop me traigo las claves. con el operador corchete me traigo el valor del objeto
console.log(prop + ": " + persona.domicilio.direccion[prop]);
}

//funcion constructora: