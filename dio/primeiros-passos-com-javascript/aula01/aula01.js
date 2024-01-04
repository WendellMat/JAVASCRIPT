let precoCombustivel = 4.5;
let kmPorLitro = 20;
let distanciaEmKm = 100;
let litrosConsumidos = distanciaEmKm / kmPorLitro;
let gastoTotal = litrosConsumidos * precoCombustivel;

console.log("O valor gasto será R$" + gastoTotal.toFixed(2));