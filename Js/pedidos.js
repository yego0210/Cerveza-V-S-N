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

// ********************************************************

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}