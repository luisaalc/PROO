// Q1
class Livro {
    constructor() {
        this.titulo = ''
        this.autor= ''
        this.ano = undefined
    }
    descricao() {
        return console.log(`O livro ${this.titulo} foi escrito por ${this.autor} em ${this.ano}.`)
}}

let livro1 = new Livro()

livro1.titulo = 'A Metamorfose'
livro1.autor = 'Franz Kafka'
livro1.ano = 1915

console.log(livro1)

let livro2 = new Livro()

livro2.titulo = 'A Hora da Estrela'
livro2.autor= 'Clarice Lispector'
livro2.ano = 1977

console.log(livro2)

livro2.descricao()

//Q2 
class Aluno {
    constructor() {
        this.nome = ''
        this.turma = ''
        this.idade = undefined
    }
    mudarIdade(novaIdade){
        if (novaIdade < 5 && novaIdade > 100){
            return false
        } else {
            this.idade = novaIdade
        }
    }
}

let aluno1 = new Aluno
aluno1.nome = 'Caio'
aluno1.idade = 17
aluno1.turma = '922A'
console.log(aluno1)

let aluno2 = new Aluno
aluno2.nome = 'Luisa'
aluno2.idade = 17
aluno2.turma = '922A'
console.log(aluno2)

let aluno3 = new Aluno
aluno3.nome = 'Nicole'
aluno3.idade = 16
aluno3.turma = '922A'
console.log(aluno3)

//Q4

class ContaBancaria {
    #saldo
    #titular
    constructor (){
        this.#saldo = 0
        this.#titular = ''
    }
    depositar(valor) {
        this.#saldo += valor
    }
    sacar(valor) {
        if(this.#saldo < valor) {
            console.log("Sua conta não possui este valor disponível.")
        } else {
            this.#saldo -= valor
        }
    }
}