let estante = [
    {
        titulo: "O Senhor dos Anéis",
        autor: "J.R.R. Tolkien",
        anoPublicacao: 1954,
        genero: "Fantasia",
        disponivel: true
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        anoPublicacao: 1949,
        genero: "Distopia",
        disponivel: false
    },
    {
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        anoPublicacao: 1899,
        genero: "Romance",
        disponivel: true
    }
]

for (let livro of estante) {
    if (livro.disponivel === true) {
        console.log(`${livro.titulo}, ${livro.autor}.`);
    }
}