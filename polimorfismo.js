//Lista de Exercícios - Polimorfismo em JavaScript

//Q1
class Animal {
    emitirSom(){
        console.log("Som indefinido.")
    }
}

class Cachorro extends Animal {
    emitirSom(){
        console.log("Au au!")
    }
}

class Gato extends Animal {
    emitirSom(){
        console.log("Miau!")
    }
}

class Passarinho extends Animal {
    emitirSom(){
        console.log("Piu piu!")
    }
}

let cachorro = new Cachorro
let gato = new Gato
let passarinho = new Passarinho
let animal = [cachorro, gato, passarinho]

for (let i = 0; i < animal.length; i++) {
    const  bicho = animal[i].emitirSom();
}

//Q2
class Personagem {
    atacar(){
    }
}

class Guerreiro extends Personagem {
    atacar(){
        return `ataque de espada.`
    }
}

class Mago extends Personagem {
    atacar(){
        return `lança bola de fogo.`
    }
}

class Arqueiro extends Personagem {
    atacar(){
        return `atira uma flecha.` 
    }
}

function iniciarBatalha(personagem){
    return console.log(personagem.atacar())
}

let guerreiro = new Guerreiro
let arqueiro = new Arqueiro
let mago = new Mago

iniciarBatalha(guerreiro)
iniciarBatalha(arqueiro)
iniciarBatalha(mago)

//Q3
class Pagamento {
    constructor(valor){
        this.valor = valor;
    }
    processar(valor){
        console.log("Processando pagamento de R$" + this.valor)
    }
}
class PagamentoPix extends Pagamento {
    constructor(valor){
        super(valor)
    }
    processar(valor){
        console.log("Processando pagamento de R$" + (this.valor - this.valor * 0.10))
    }
}
class PagamentoCartao extends Pagamento {
    constructor(valor){
        super(valor)
    }
    processar(valor){
        console.log("Processando pagamento de R$ " + (this.valor + this.valor * 0.05))
    }
}
class PagamentoBoleto extends Pagamento {
    constructor(valor){
        super(valor)
    }
    processar(valor){
        console.log("Aguardando compensação do boleto de R$" + this.valor)
    }
}

const pagamentos = [
    new PagamentoPix(100), 
    new PagamentoBoleto(100),
    new PagamentoCartao(100)
]

for (let i = 0; i < pagamentos.length; i++) {
    const valor = pagamentos[i].processar();
}

//Q4
class FormaGeometrica {
    calcularArea(){
    }
}

class Quadrado extends FormaGeometrica {
    constructor(lado){
        super()
        this.lado = lado
    }
    calcularArea(){
        return this.lado * this.lado
    }
}

class Circulo extends FormaGeometrica {
    constructor(raio){
        super()
        this.raio = raio
    }
    calcularArea(){
        return Math.PI * (this.raio * this.raio)
    }
}

class Retangulo extends FormaGeometrica {
    constructor(base, altura){
        super()
        this.base = base
        this.altura = altura
    }
    calcularArea(){
        return this.base * this.altura
    }
}

let formas = [
    new Quadrado(15),
    new Circulo(10),
    new Retangulo(10, 15)
]
for (let i = 0; i < formas.length; i++) {
    const forma = console.log(formas[i].calcularArea().toFixed(2));
}