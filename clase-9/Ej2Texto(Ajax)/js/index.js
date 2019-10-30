window.addEventListener('load', function(){
    let boton = document.getElementById('btn');
    boton.addEventListener('click', traerTexto);
});

function traerTexto(){
    let xhr = new XMLHttpRequest();
    //tiene 4 estados para ir analizando el estado de la peticion.
    //solo me importa cuando ya devolvio el resultado
    xhr.onreadystatechange = function(){

        if(xhr.readyState==4){
            document.getElementById('loader').innerHTML="";
            if(xhr.status==200){
                let info = document.getElementById('info');
                //uso la funcion response segun lo que espero que me devuelva, en gral es texto
                //lo mismo sucede con el innerText, podria ser innerHtml si me devuelve HTML
                info.innerText=xhr.responseText;
            }
            else{
                //console.error(xhr.status + ": " + xhr.statusText);
                //console.log(xhr.status + ": " + xhr.statusText);
                console.warn(xhr.status + ": " + xhr.statusText);
                let span = document.getElementById('loader');
                span.innerHTML="<img src='./images/810.gif'></img>";
            }
        }
    }
    //si tuviera parametros por GET van en la URL
    xhr.open('GET', './documento.txt', true);
    //si va por post los parametros van dentro el send
    xhr.send();
}