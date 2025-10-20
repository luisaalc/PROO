//Exercícios sobre a Notação Literal de Objetos em Javascript

//Q1
let animal = {
    nome: "Rex",
    especie: "Cachorro",
    raca: "Labrador",
    idade: 5,
    vacinado: true,
    servicos: ["banho", "consulta"]
}
function exibirFicha(pet){
    console.log(`${pet.nome} é um ${pet.especie} da raça ${pet.raca}, de ${pet.idade} anos. Vacinado: ${pet.vacinado ? "sim" : "não"}.`)
}

exibirFicha(animal)

//Q2
let estante = [
    {titulo: "A Hora da estrela", autor: "Clarice Lispector", ano: 1977, genero: "Romance", disponivel: true},
    {titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, genero: "Romance", disponivel: false},
    {titulo: "O Cortiço", autor: "Aluísio Azevedo", ano: 1890, genero: "Naturalismo", disponivel: true}
]

for (let livro of estante){
    if (livro.disponivel === true){
    console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}.`)
}}

//Q3
let pedido = {
    sabor: "Calabresa",
    tamanho: "Grande",
    bordaRecheada: true,
    adicionais: ["Azeitonas", "Cebola"],
    preco: 55.50,

    descreverPedido: function(){
        console.log(`Pedido: Pizza de ${this.sabor}, tamanho ${this.tamanho}, ${this.bordaRecheada ? "com borda recheada" : "sem borda recheada"}, adicionais: ${this.adicionais.join(", ")}. Valor: R$${this.preco.toFixed(2)}.`)
    }
}

pedido.descreverPedido()

//Q4
let heroi = {
        nomeReal: "Tony Stark", 
        codinome: "Homem de Ferro", 
        poderes: ["Armadura tecnológica", "Inteligência genial"], 
        afiliacao: "Vingadores"}

function possuiPoder(heroi, poder){
    return heroi.poderes.includes(poder) ? true : false
}

console.log(possuiPoder(heroi, "Super força"))
console.log(possuiPoder(heroi, "Voo"))

//Q5
let time = {
    nomeTime: "Os Invencíveis",
    treinador: "Fulano",
    jogadores: ["Pedro", "João", "JP", "DG", "Paulo"],
    vitorias: 0,
    derrotas: 0,
        registrarPartida: function(resultado){
            if(resultado === "vitoria"){
                 this.vitorias += 1
            } else if (resultado === "derrota"){
                 this.derrotas += 1
            }
        }
    }

time.registrarPartida("vitoria")
time.registrarPartida("derrota")
time.registrarPartida("vitoria")
console.log(`${time.nomeTime} - Vitórias ${time.vitorias}, Derrotas ${time.derrotas}.`)

//Q6
let playlistViagem = [
    {titulo: "I Will Find", artista: "Vintage Culture", album: "num tem, é single", duracaoMinutos: 3.44},
    {titulo:"Natural Mystic", artista: "Bob Marley", album: "Exodus", duracaoMinutos: 3.27},
    {titulo: "Malandrinha", artista: "Edson Gomes", album: "Reggae Resistência", duracaoMinutos: 3.43},
    {titulo: "Bring Me To Life", artista: "Evanescence", album: "Fallen", duracaoMinutos: 3.55}
]
function calcularDuracaoTotal(playlist){
    let duracaoTotal = 0
    for (let musica of playlist){
      duracaoTotal += musica.duracaoMinutos
    }
    return duracaoTotal.toFixed(2)
}

function musicaMaisLonga(playlist){
    let maisLonga = playlist[0]
    for (let musica of playlist){
        if (musica.duracaoMinutos > maisLonga.duracaoMinutos){
            maisLonga = musica
        }
    }
    return maisLonga
}
console.log(`Duração total da playlist: ${calcularDuracaoTotal(playlistViagem)} minutos.`)
let longa = musicaMaisLonga(playlistViagem)
console.log(`Música mais longa: ${longa.titulo} - ${longa.artista}.`)

//Q7
let produto = {
    nomeProduto: "Smartphone XPTO", 
    marca: "TechNova", 
    preco: 2800.00, 
    estoque: 50, 
    especificacoes: {tela: "6.7 polegadas", memoria: "128GB", camera: "48MP"}}

function venderProduto(item, quantidade){
    if (item.estoque >= quantidade){
        item.estoque -= quantidade
        console.log(`Venda de ${quantidade} ${item.nomeProduto} realizada com sucesso!`)
    } else {
        console.log("Estoque insuficiente.")
    }
}

venderProduto(produto, 20)
console.log(`Estoque atual: ${produto.estoque}`)

//Q8
let agenda = [
    {nome: "Ana", telefone: "1234-5678", email: "ana@mail.com", favorito: false},
    {nome: "Bruno", telefone: "2345-6789", email: "brunin@mail.com", favorito: true},
    {nome: "Mel", telefone: "3456-7890", email: "melzinha@mail.com", favorito: true},
    {nome: "João", telefone: "4567-8901", email: "joao@mail.com", favorito: false}
]
function listarFavoritos(contatos){
    console.log("Contatos Favoritos:")
    for (let contato of contatos){
        if (contato.favorito){
            console.log(`${contato.nome} - ${contato.telefone}.`)
        }
    }
} 
listarFavoritos(agenda)

//Q9
let receita = {
    nomeReceita: "Panqueca Americana",
    tempoPreparo: "20 minutos",
    ingredientes: ["1 xícara de farinha de trigo", "1 colher de sopa de açúcar", "1 colher de chá de fermento em pó", "1 pitada de sal", "1 xícara de leite", "1 ovo", "2 colheres de sopa de manteiga derretida"],
    instrucoes: ["Em uma tigela, misture a farinha, o açúcar, o fermento e o sal.", "Em outra tigela, bata o leite, o ovo e a manteiga derretida.", "Combine os ingredientes líquidos com os secos até obter uma massa homogênea.", "Aqueça uma frigideira antiaderente e despeje porções da massa.", "Cozinhe até formar bolhas na superfície, vire e cozinhe o outro lado até dourar."]
}

function imprimirReceits(receita){
    console.log(`${receita.nomeReceita} - Tempo de preparo: ${receita.tempoPreparo}.
    Ingredientes:
    - ${receita.ingredientes[0]}
    - ${receita.ingredientes[1]}
    - ${receita.ingredientes[2]}
    - ${receita.ingredientes[3]}
    - ${receita.ingredientes[4]}
    - ${receita.ingredientes[5]}
    - ${receita.ingredientes[6]}
    Modo de preparo:
    1. ${receita.instrucoes[0]}
    2. ${receita.instrucoes[1]}
    3. ${receita.instrucoes[2]}
    4. ${receita.instrucoes[3]}
    5. ${receita.instrucoes[4]}`)
}

imprimirReceits(receita)

//Q10
let aluna = {
    nomeAluno: "Ana Clara",
    turma: "922K",
    notas: {matematica: 6, portugues: 8, ciencias: 10},

    calcularMedia: function(){
        let soma = this.notas.matematica + this.notas.portugues + this.notas.ciencias
        return (soma / 3)
    },

    verificarStatus: function(){
        let media = this.calcularMedia()
        return media >= 7 ? "Aprovada" : "Reprovada"
    }
}
console.log(aluna.calcularMedia())
console.log(aluna.verificarStatus())

