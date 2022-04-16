function formatoTri() {
    var base = parseFloat(document.getElementById("base").value);
    var alt = parseFloat(document.getElementById("alt").value);

    if (base == 0 && alt == 0)
        document.getElementById("triangulo").style.borderWidth = "0";

    if (base >= alt)
        document.getElementById("triangulo").style.borderWidth = "0 100px " + alt / base * 200 + "px 100px";
    else
        document.getElementById("triangulo").style.borderWidth = "0 " + base / alt * 100 + "px 200px " + base / alt * 100 + "px";
}

function formatoQua() {
    if (parseFloat(document.getElementById("lado").value) == 0)
        document.getElementById("quadrado").style.borderWidth = "0";
    else
        document.getElementById("quadrado").style.borderWidth = "100px";
}

function formatoCir() {
    if (parseFloat(document.getElementById("raio").value) == 0)
        document.getElementById("circulo").style.borderWidth = "0";
    else
        document.getElementById("circulo").style.borderWidth = "100px";
}

function formatoTra() {
    var b_maior = parseFloat(document.getElementById("b_maior").value);
    var b_menor = parseFloat(document.getElementById("b_menor").value);
    var alt = parseFloat(document.getElementById("alt_tra").value)

    if (b_maior < b_menor) {
        var aux = b_maior;
        b_maior = b_menor;
        b_menor = aux;
    }

    if (b_maior == 0 && alt == 0) {
        document.getElementById("tra_qua").style.borderWidth = "0";
        document.getElementById("tra_tri").style.borderWidth = "0";
    }

    if (alt >= b_maior) {
        document.getElementById("tra_tri").style.borderWidth = "100px " + (b_maior - b_menor) / alt * 100 + "px";
        document.getElementById("tra_qua").style.borderWidth = "100px " + b_menor / alt * 100 + "px 100px " + b_menor / alt * 100 + "px";
    } else {
        document.getElementById("tra_tri").style.borderWidth = alt / b_maior * 100 + "px " + (b_maior - b_menor) / b_maior * 100 + "px";
        document.getElementById("tra_qua").style.borderWidth = alt / b_maior * 100 + "px " + b_menor / b_maior * 100 + "px";
    }
}

function formatoRet() {
    var base = parseFloat(document.getElementById("base_ret").value);
    var alt = parseFloat(document.getElementById("alt_ret").value);

    if (base == 0 && alt == 0)
        document.getElementById("retangulo").style.borderWidth = "0";

    if (base >= alt)
        document.getElementById("retangulo").style.borderWidth = "100px " + alt / base * 100 + "px";
    else
        document.getElementById("retangulo").style.borderWidth = base / alt * 100 + "px 100px";
}

function triangulo() {
    var base = parseFloat(document.getElementById("base").value);
    var alt = parseFloat(document.getElementById("alt").value);

    if (base >= 0 && alt >= 0)
        document.getElementById("res_tri").value = (base * alt) / 2;
}

function quadrado() {
    var lado = parseFloat(document.getElementById("lado").value);

    if (lado >= 0)
        document.getElementById("res_qua").value = lado * lado;
}

function circulo() {
    var raio = parseFloat(document.getElementById("raio").value);

    if (raio >= 0)
        document.getElementById("res_cir").value = raio * raio + (raio != 0? "π" : "");
}

function trapezio() {
    var b_maior = parseFloat(document.getElementById("b_maior").value);
    var b_menor = parseFloat(document.getElementById("b_menor").value);
    var alt = parseFloat(document.getElementById("alt_tra").value)

    if (b_maior >= 0 && b_menor >= 0 && alt >= 0)
        document.getElementById("res_tra").value = (b_maior + b_menor) * alt / 2;
}

function retangulo() {
    var base = parseFloat(document.getElementById("base_ret").value);
    var alt = parseFloat(document.getElementById("alt_ret").value);

    if (base >= 0 && alt >= 0)
        document.getElementById("res_ret").value = base * alt;
}
