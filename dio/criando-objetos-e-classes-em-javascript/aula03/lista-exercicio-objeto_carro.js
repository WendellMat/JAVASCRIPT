class Carro {
    marca;
    cor;
    gastoDeCombustivelPorKm;

    constructor(marca, cor, gastoDeCombustivelPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoDeCombustivelPorKm = gastoDeCombustivelPorKm;
    }

    gasto(kmsRodados, precoCombustivel) {
        let tmp = (kmsRodados * this.gastoDeCombustivelPorKm) * precoCombustivel;
        return tmp.toFixed(2);
    }
}

const gol = new Carro('VW', 'preto', 0.1);
console.log(gol);
console.log(gol.gasto(99, 4.5));

const strada = new Carro('Fiat', 'cinza', 0.05);
console.log(strada);
console.log(strada.gasto(99, 4.5))