$(document).ready(function(){
    $('#btn1').click(function(){
        cambiarTexto();
    });
    $('#btn2').click(function(){
        mostrarTexto();
    });
    $('#btn3').click(function(){
        $('p').text('Hola jquery');
    });
});
function cambiarTexto(){
    $('h1').text('Hola jquery');
}
function mostrarTexto(){
    console.log($('h1').text());
}