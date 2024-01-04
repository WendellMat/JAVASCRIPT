/*
1 - Débito
2 - Dinheiro ou Pix
3 - Duas vezes
4 - Acima de duas vezes
*/

let precoEtiqueta = 93;
let condicaoPagamento = 1;

let valorTotalAPagar = 0;

if (condicaoPagamento === 1) {
    valorTotalAPagar = precoEtiqueta * 0.9;
} else if (condicaoPagamento === 2) {
    valorTotalAPagar = precoEtiqueta * 0.85;
} else if (condicaoPagamento === 3) {
    valorTotalAPagar = precoEtiqueta;
} else {
    valorTotalAPagar = precoEtiqueta * 1.1;
}

console.log(valorTotalAPagar.toFixed(2));