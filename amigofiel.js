let pet = {
    nome: "Max",
    idade: 5,
    especie: "Cachorro",
    raca: "Labrador",
    vacinado: true,
    servicos: ["Banho", "Consulta"],
}

function exibirFicha(pet) {
    console.log(`${pet.nome} é um ${pet.especie} da raça ${pet.raca}, tem ${pet.idade} anos. Vacinado: ${pet.vacinado ? 'Sim' : 'Não'}.`);
}

exibirFicha(pet);