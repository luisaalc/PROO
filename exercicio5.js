//Exercícios sobre Orientação a Objetos

//Q1
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    fazAniversario() {
        return this.idade += 1;
    }

    exibirDetalhes() {
       return console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
}

let pessoa1 = new Pessoa("Ana", 25);
let pessoa2 = new Pessoa("Bruno", 30);

console.log(pessoa1.exibirDetalhes())
pessoa1.fazAniversario();
console.log(pessoa1.exibirDetalhes())

console.log(pessoa2.exibirDetalhes())

//Q2
class Porta {
    constructor(aberta, cor, dimensaoX, dimensaoY, dimensaoZ) {
        this.aberta = aberta;
        this.cor = cor;
        this.dimensaoX = dimensaoX;
        this.dimensaoY = dimensaoY;
        this.dimensaoZ = dimensaoZ;
    }
    abre() {
        this.aberta = true;
    }
    fecha() {
        this.aberta = false;
    }
    pintar(cor){
        this.cor = cor;
    }
    estaAberta() {
        return this.aberta;
    }
    exibirDetalhes() {
        return console.log(`Porta ${this.cor}, Dimensões: ${this.dimensaoX}x${this.dimensaoY}x${this.dimensaoZ}, Aberta: ${this.aberta}`);
    }
}

let porta1 = new Porta(false, "vermelha", 80, 200, 5);
porta1.abre();
porta1.pintar("azul");
console.log(porta1.estaAberta());
porta1.exibirDetalhes();

let porta2 = new Porta(true, "verde", 90, 210, 6);
porta2.fecha();
console.log(porta2.estaAberta());
porta2.exibirDetalhes();