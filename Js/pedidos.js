// ****************rubia*****************************
function incrementar() {
    valor = document.getElementById("item");
    if (valor.value < 100) valor.value++;



}

function miFunc() {
    valor = document.getElementById("item");
    if (valor.value < 100) valor.value++;
}

function decrementar() {
    valor = document.getElementById("item");
    if (valor.value > 00) valor.value--;
}

function makeAnOrder() {
    document.write("<h2>Su pedido se está en curso...</h2>");
}


// *************Morena********************

function incrementarr() {
    valor = document.getElementById("itemm");
    if (valor.value < 100) valor.value++;
}

function miFunc() {
    valor = document.getElementById("itemm");
    if (valor.value < 100) valor.value++;
}

function decrementarr() {
    valor = document.getElementById("itemm");
    if (valor.value > 00) valor.value--;
}

// *************CLARA********************
function incrementars() {
    valor = document.getElementById("items");
    if (valor.value < 100) valor.value++;
}

function miFunc() {
    valor = document.getElementById("items");
    if (valor.value < 100) valor.value++;
}

function decrementars() {
    valor = document.getElementById("items");
    if (valor.value > 00) valor.value--;
}

function totalCervezas() {
    var rubia = parseInt(documement.getElementById('item').value);
    console.log(rubia)

}




function totalCervezas() {
    var rubia = document.getElementById('item').value;
    var morena = document.getElementById('itemm').value;
    var clara = document.getElementById('items').value

    var totall = parseInt(morena) + parseInt(rubia) + parseInt(clara);

    document.getElementById('total').value = totall;




}

function restaCervezas() {
    var rubia = document.getElementById('item').value;
    var morena = document.getElementById('itemm').value;
    var clara = document.getElementById('items').value

    var totall = parseInt(morena) + parseInt(rubia) + parseInt(clara)

    document.getElementById('total').value = totall;




}

// ***********************

function relative_offset($element) {
    var current_offset = $element.offset(),
        screen_offset = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
        //.10 is realy relative to the use. Must be parametrable.
        organic_offset = Math.round(screen_offset * .1),
        absolute_offset = Math.round(current_offset.top);

    $element.attr("data-sps-offset", (absolute_offset - screen_offset + organic_offset));
}

// use jquery for lazyness and offset() utils.
$(document).ready(function() {
    $(".animated.sps").each(function() {
        relative_offset($(this));
    });

    window.addEventListener("resize", function() {
        relative_offset($(this));
    });

    window.addEventListener("orientationchange", function() {
        relative_offset($(this));
    });
});