window.addEventListener('load', function(){
    let form = this.document.forms[0];
    form.addEventListener('submit', function(e){
        e.preventDefault();
        enviarDatos();
    })
});
function enviarDatos(){
    let info = document.getElementById('info');
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if (xhr.status == 200){
                let ironman = JSON.parse(xhr.responseText);
                info.innerText = ironman.nombre + " "+ironman.apellido;
            }
            else{
                info.innerText = xhr.status+' : '+xhr.statusText;
            }

        }
        else {
            info.appendChild(crearSpinner());
        }
    }
    
    xhr.open('GET', 'pagina1.php');    
    xhr.send();
}

function crearSpinner(){
    let spinner = document.createElement('img');
    spinner.setAttribute('src', './images/810.gif');
    return spinner;
}