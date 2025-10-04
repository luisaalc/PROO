//Q1
let variavel = "Hello World"
console.log(`O tipo de dado é: ${typeof variavel}`)

//Q2
let senha = "2025";
let senhaArmazenada = 2025;
console.log(`Comparação com == : ${senha == senhaArmazenada}\nComparação com === : ${senha === senhaArmazenada}`)

//Q3
let valorTotal = 120.5789
console.log(`O valor final é R$${valorTotal.toFixed(2)}`)

//Q4
let nome = "Luísa Mary"
console.log(`NOME EM MAIÚSCULAS: ${nome.toUpperCase()}\nnome em minúsculas: ${nome.toLowerCase()}`)

//Q5
let heroi1 = "Homem de Ferro"
let heroi2 = heroi1
console.log(`-- Antes da Modificação --\nHerói 1: ${heroi1}\nHerói 2: ${heroi2}`)
heroi1 = "Capitão América"
console.log(`-- Depois da Modificação --\nHerói 1: ${heroi1}\nHerói 2: ${heroi2}`)

//Q6
let usuarioOriginal = {
    nome: "Luisa",
    nickname: "lulu" 
}

let usuarioAdmin = usuarioOriginal

console.log(`-- Antes da Modificação --
Nome do Usuário Original: ${usuarioOriginal.nome}
Nome do Usuário Admin: ${usuarioAdmin.nome}`)

usuarioAdmin.nome = "Luisa Alcantara"

console.log(`-- Depois da Modificação --\nNome do Usuário Original: ${usuarioOriginal.nome}\nNome do Usuário Admin: ${usuarioAdmin.nome}`)

//Q7
let livro = {
    titulo: "Todos os Contos",
    autor: "Clarice Lispector",
    paginas: 654
}

console.log(`O livro "${livro.titulo}" da autora ${livro.autor} tem ${livro.paginas} páginas.`)

//Q8
let musica = {
    nome: "Adventure of a Lifetime",
    artista: "Coldplay",
    duracao: 263,

    tocar:  function(){
        console.log(`Tocando agora: ${this.nome} - ${this.artista}`)
    }
}

musica.tocar()

//Q9
let perfil = {
    nome: "Harry Potter",
    email: "harry@mail.com",
    endereco: {
        rua: "Rua dos Alfeneiros",
        cidade: "Little Whinging",
    }
}
console.log(`Endereço antigo: ${perfil.endereco.rua}, ${perfil.endereco.cidade}`)

perfil.endereco.rua = "Escola de Magia e Bruxaria de Hogwarts"
perfil.endereco.cidade = "Terras Altas da Escócia"

console.log(`Endereço novo: ${perfil.endereco.rua}, ${perfil.endereco.cidade}`)