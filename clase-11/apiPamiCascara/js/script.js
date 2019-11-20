//var ciudades;
const apiKey='feb16fca53c52c313248af2a416b9e7b';
let city = 'New York, US';
window.addEventListener('load', function(){

    cargarSelectCiudades();
    document.getElementById('selCiudades').addEventListener('change', traerPronostico);
    //document.getElementById('btnRecargar').addEventListener('click', traerPronosticoCity);
    //hacer funcion para que se pueda buscar por una ciudad que no sea de Argentina
});

function cargarSelectCiudades(){
    traerCiudades();
   //feb16fca53c52c313248af2a416b9e7b
}

function traerCiudades(){
    //traer por ajax al json de city.list
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4) {
            if (xhr.status==200) {
                let datos = JSON.parse(xhr.responseText);
                let ciudades = parsearArgentinas(datos);
                actualizarSelect(ciudades);
                console.log(ciudades);
            }
            else{
                //devolvio error
                console.error(xhr.status + ": " + xhr.statusText);
            }
        }
        else{
            //aun se esta procesando
        }
    }
    xhr.open('GET', './city.list.json', true);
    xhr.send();
   // return datos;
}

function parsearArgentinas(arr){
        return arr.filter(ciudad=>ciudad.country === 'AR')
        .map(ciudad=>({id: ciudad.id, nombre : ciudad.name + ", " + ciudad.country}));
        //como estoy armando el json dentro de un objeto no debe ir con comillas
}
function actualizarSelect(ciudades){
    let selCiudades = document.getElementById('selCiudades');
    for (ciudad of ciudades){
        let opcion = document.createElement('option');
        opcion.setAttribute('value', ciudad.id);
        let texto = document.createTextNode(ciudad.nombre);
        opcion.appendChild(texto);
        selCiudades.appendChild(opcion);
    }
}
function traerPronostico(){
    let divActualizacion =document.getElementById('act');
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4) {
            if (xhr.status==200) {
                let pronostico = JSON.parse(xhr.responseText);
                //console.log(pronostico);
                //let div = document.getElementById('info');
                //div.innerText=xhr.responseText;
                actualizarPronostico(pronostico);
                //divActualizacion.innerHTML ="";
                
            }
            else{
                //devolvio error
                console.error(xhr.status + ": " + xhr.statusText);
            }
        }
        else{
            //aun se esta procesando
            
            divActualizacion.innerHTML = '<img src="./images/anemometro.gif"/>';
        }
    }
    //let apiKey='feb16fca53c52c313248af2a416b9e7b';
    //let url = 'https://api.openweathermap.org/data/2.5/weather?id='+this.value+'&lang=es&units=metric&APPID='+apiKey;
    
    //aca va con parentesis la funcion porque lo que estoy pasando por parametro es el return de la funcion,
    //no es un callback
    
    xhr.open('GET', armarURL(), true);
    xhr.send();

}
function armarURL(){
    let idCiudad = document.getElementById('selCiudades').value;
    
    let url = 'https://api.openweathermap.org/data/2.5/weather?id='+idCiudad+'&lang=es&units=metric&APPID='+apiKey;
    return url;
}
function actualizarPronostico (pronostico){
    document.getElementById('temperatura').innerText = 'Temperatura: '+(pronostico.main.temp).toFixed(1) + ' ºC';
    document.getElementById('humedad').innerText = 'Húmedad: '+pronostico.main.humidity + '%';
    document.getElementById('presion').innerText = 'Presión: '+pronostico.main.pressure + ' hPa';
    document.getElementById('viento').innerText = 'Viento: '+(pronostico.wind.speed*3.6).toFixed(0) + ' Km/h';
    document.getElementById('descripcion').innerText = 'Se espera: '+pronostico.weather[0].description;
    document.getElementById('minmax').innerText = 'Máxima: '+(pronostico.main.temp_max).toFixed(1) + '°C / Minima: '+(pronostico.main.temp_min).toFixed(1)+'° C';
    document.getElementById('imagen').setAttribute('src', 'http://openweathermap.org/img/w/'+ pronostico.weather[0].icon +'.png') ;
    document.getElementById('imagen').setAttribute('style', 'width: 90px');
    document.getElementById('ciudad').innerText = pronostico.name + " "+pronostico.sys.country;
    let fecha = traerFecha();
    document.getElementById('act').innerText = fecha;

}
function traerFecha(){
    let fecha = new Date();
    return fecha.toLocaleDateString()+" "+fecha.toLocaleTimeString();

}