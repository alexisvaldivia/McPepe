let cantidadHamburguesa1 = 0;
let cantidadHamburguesa2 = 0;
let cantidadHamburguesa3 = 0;
let total = 0;
let extraPorTarjeta = 0;

function agregarHamburguesa1() {
    cantidadHamburguesa1 += 1;
    document.getElementById("cant1").innerHTML = cantidadHamburguesa1
}

function agregarHamburguesa2() {
    cantidadHamburguesa2 += 1;
    document.getElementById("cant2").innerHTML = cantidadHamburguesa2
}

function agregarHamburguesa3() {
    cantidadHamburguesa3+= 1;
    document.getElementById("cant3").innerHTML = cantidadHamburguesa3
}

function calcularTotal() {
    total = parseInt(document.getElementById("cant1").innerHTML) * parseInt(document.getElementById("precio-hamb1").innerHTML);
    total += parseInt(document.getElementById("cant2").innerHTML) * parseInt(document.getElementById("precio-hamb2").innerHTML);
    total += parseInt(document.getElementById("cant3").innerHTML) * parseInt(document.getElementById("precio-hamb3").innerHTML);

    if (document.getElementById("pagar-tarjeta").checked) {
        total += (total * 30) / 100;
    }

    document.getElementById("total-pagar").innerHTML = total;
}