window.addEventListener('load', function(){

    let form = this.document.forms[0];

    form.addEventListener('submit', function(e){
        e.preventDefault();

        enviarDatos();


    });
});

function enviarDatos(){
    let info = document.getElementById('info');
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if( xhr.readyState == 4){

            if( xhr.status == 200){
                info.innerText = xhr.responseText;
            }
            else{
                info.innerText = xhr.status + ' : ' + xhr.statusText;
            }
        }
        else{

            info.appendChild(crearSpinner());

        }        
    }

     

    xhr.open('POST',  'pagina1.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.send(traerDatos());
}



function traerDatos(){

let nombre = document.getElementById('txtNombre').value;
let edad = document.getElementById('txtEdad').value;

return 'nombre=' + encodeURIComponent(nombre) + '&edad=' + encodeURIComponent(edad);


}

function crearSpinner(){
    let spinner = document.createElement('img');
    spinner.setAttribute('src', './images/smile.gif');
    return spinner;
}