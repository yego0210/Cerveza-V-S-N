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
    rubia = document.getElementById('item').value;
    morena = document.getElementById('itemm').value;
    clara = document.getElementById('items').value
    var totall = rubia + morena;
    Document.getElementById('total').value = totall;




}