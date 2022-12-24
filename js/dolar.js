const valorBlue = document.getElementById("valorBlue")
const valorCompraBlue = document.getElementById("valorCompraBlue")
const valorVentaBlue = document.getElementById("valorVentaBlue")

const valorOficial = document.getElementById("valorOficial")
const valorCompraOficial = document.getElementById("valorCompraOficial")
const valorVentaOficial = document.getElementById("valorVentaOficial")

const input = document.getElementById("input")

let pesos = 1

function useValue() {
    pesos = input.value;
    dolar()
}
input.onchange = useValue;  
input.onblur = useValue;
input.onkeydown = useValue;

const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  });

dolar()

async function dolar() {
    const response = await fetch("https://api.bluelytics.com.ar/v2/latest");
    var data = await response.json();
    if (pesos==0) {
        pesos = 1
    }
    valorBlue.textContent = formatter.format(pesos*data.blue.value_avg)
    valorCompraBlue.textContent = formatter.format(pesos*data.blue.value_buy)
    valorVentaBlue.textContent = formatter.format(pesos*data.blue.value_sell)
    
    valorOficial.textContent = formatter.format(pesos*data.oficial.value_avg)
    valorCompraOficial.textContent = formatter.format(pesos*data.oficial.value_buy)
    valorVentaOficial.textContent = formatter.format(pesos*data.oficial.value_sell)
}