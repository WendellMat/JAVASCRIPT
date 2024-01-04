let precoEtanol = 4.5;
let precoGasolina = 5.5;
let tipoCombustivel = 'gasolina';
let kmPorLitro = 10;
let distanciaEmKm = 97;

let litrosConsumidos = distanciaEmKm / kmPorLitro;
let gastoTotal = 0;

if (tipoCombustivel === "gasolina") {
    gastoTotal = precoGasolina * litrosConsumidos;
} else if (tipoCombustivel === "etanol") {
    gastoTotal = precoEtanol * litrosConsumidos;
}

console.log("O valor total gasto foi R$" + gastoTotal.toFixed(2));