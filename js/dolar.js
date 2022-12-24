const valorBlue = document.getElementById("valorBlue")
const valorCompraBlue = document.getElementById("valorCompraBlue")
const valorVentaBlue = document.getElementById("valorVentaBlue")

const valorOficial = document.getElementById("valorOficial")
const valorCompraOficial = document.getElementById("valorCompraOficial")
const valorVentaOficial = document.getElementById("valorVentaOficial")

const impuestosOficial = document.getElementById("impuestosOficial")

const input = document.getElementById("input")

let valorAvgOficial
let valorAvgBlue

let impuestos = 75

let pesos = 1

const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
});

async function dolar() {
    const response = await fetch("https://api.bluelytics.com.ar/v2/latest");
    var data = await response.json();
    if (pesos==0) {
        pesos = 1
    }

    valorBlue.textContent = pesos*data.blue.value_avg
    valorCompraBlue.textContent = pesos*data.blue.value_buy
    valorVentaBlue.textContent = pesos*data.blue.value_sell
    
    valorOficial.textContent = pesos*data.oficial.value_avg
    valorCompraOficial.textContent = pesos*data.oficial.value_buy
    valorVentaOficial.textContent = pesos*data.oficial.value_sell
    calcImpuestos()
    format()
}

function useValue() {
    pesos = input.value;
    dolar()
}
input.onchange = useValue;  
input.onblur = useValue;
input.onkeydown = useValue;

dolar()


function calcImpuestos() {
    impuestosOficial.textContent = formatter.format((parseInt(valorOficial.textContent) / 100 * 75) + parseInt(valorOficial.textContent))
}

function format() {
    valorBlue.textContent = formatter.format(valorBlue.textContent)
    valorCompraBlue.textContent = formatter.format(valorCompraBlue.textContent)
    valorVentaBlue.textContent = formatter.format(valorVentaBlue.textContent)
    
    valorOficial.textContent = formatter.format(valorOficial.textContent)
    valorCompraOficial.textContent = formatter.format(valorCompraOficial.textContent)
    valorVentaOficial.textContent = formatter.format(valorVentaOficial.textContent)
}