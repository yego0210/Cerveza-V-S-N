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
    if (valor.value > 01) valor.value--;
}

function makeAnOrder() {
    document.write("<h2>Su pedido se está en curso...</h2>");
}