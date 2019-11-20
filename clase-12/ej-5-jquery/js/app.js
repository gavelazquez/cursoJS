$(document).ready(function(){
    $('h1').attr('style', 'color: blue; background-color:red;');
    $('#btn1').click(function(){
        $('th').attr('style', 'background-color: blue;');
        $('td').css('color', 'cyan');
       /* let ths = document.getElementsByTagName('th');
        for (th of ths) {
            th.setAttribute('style', 'background-color: red');
        }*/
    });
    $('#btn2').click(function(){
        console.log($('th').attr('style'));//recupero todo el estilo
        //console.log($('td').attr('style'));//recupero todo el estilo
        //console.log($('th').css('border'));//esto lo recupero desde el css, una propiedad especifica
    });
    $('#btn3').click(function(){
        $('th').removeAttr('style');
        $('td').css({'color':'black','font-size':'20px'});
    });
});

