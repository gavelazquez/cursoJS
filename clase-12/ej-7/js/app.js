$(document).ready(function(){

    $('#btn1').click(function(){
        let formulario = "<form><label for='txtNombre'> Nombre: </label><input type = 'text' id ='txtNombre'><br></form>";
        $('#divFrm').html(formulario);
    });
    $('#btn2').click(function(){
        console.log($('#divFrm').html());
    });

});

