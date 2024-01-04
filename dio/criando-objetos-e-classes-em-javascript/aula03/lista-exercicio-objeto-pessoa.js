class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imc() {
        return (this.peso / Math.pow(this.altura, 2)).toFixed(2);
    }

    classificarImc() {
        if (this.imc() <= 18.5) {
            return 'Abaixo do peso';
        } else if (this.imc() > 18.5 && this.imc() <= 24.9) {
            return 'Peso normal';
        } else if (this.imc() > 24.9 && this.imc() <= 29.9) {
            return 'Sobre peso';
        } else {
            return 'Obesidade';
        }
    }
}

const wendell = new Pessoa('Wendell', 90, 1.8);
console.log(wendell);
console.log(wendell.imc());
console.log(wendell.classificarImc());

const anna = new Pessoa('Anna', 60, 1.75);
console.log(anna);
console.log(anna.imc());
console.log(anna.classificarImc());

const jose = new Pessoa('José', 70, 1.75);
console.log(jose);
console.log(jose.imc());
console.log(jose.classificarImc());