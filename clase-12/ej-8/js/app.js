$(document).ready(function(){
    $('h1').mouseover(function(){
       // $('h1').attr('style', 'color: blue');
       $(this).attr('style', 'color: blue');
    });
    $('h1').mouseout(function(){
        //$('h1').removeAttr('style');
        $(this).removeAttr('style');
    });
    $('p').hover(mouseIn, mouseOut);

    $('#txtNombre').focus(function(){
       $(this).val("");
    });

    $('#txtNombre').blur(function(){
        if ($('#txtNombre').val === ""){
            console.log($('#txtNombre').val());
            $('#txtNombre').val("Buscar...");
        }
    });
    
    $('#btn1').click(function(){
        $('p').fadeOut("slow");
    });

   $('#btn2').click(function(){
        $('p').fadeIn("slow");
    });
    $('#btn2').click(function(){
        $('p').toggle("slow");
    });
});

function mouseIn(){
    $(this).css('color', 'red');
}

function mouseOut(){
    $(this).css('color', 'black');
}