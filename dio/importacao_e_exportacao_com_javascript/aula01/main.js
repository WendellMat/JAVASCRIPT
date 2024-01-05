const {gets, print} = require('./funcoes_auxiliares')

const numerosSorteados = gets();

let maior = 0;

for (let i=0; i<numerosSorteados.length; i++) {
    if (numerosSorteados[i] > maior) {
        maior = numerosSorteados[i];
    }
}

print(maior);