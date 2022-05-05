function calcSub(qtd, preco, sub) {
    document.getElementById(sub).value =
        parseFloat(document.getElementById(qtd).value) *
        parseFloat(document.getElementById(preco).value);
}

function calcTotal() {
    var subs = document.getElementsByClassName('sub');
    var total = 0;
    for (var i = 0; i < subs.length; i++) {
        if (subs[i].value != '') {
            total += parseFloat(subs[i].value);
        }
    }
    document.getElementById('total').innerHTML = 'TOTAL R$ ' + total;
}

function limpar() {
    location.reload();
}
