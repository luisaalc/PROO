let herois = {
    nomeReal: "Tony Stark",
    codinome: "Homem de Ferro",
    poderes: ["Armadura Tecnológica", "Inteligência Genial", "Voo"],
    afiliacao: "Vingadores",
};

function possuiPoder(heroi, poder){
    return heroi.poderes.includes(poder)
};

console.log(possuiPoder(herois, "Voo"));
console.log(possuiPoder(herois, "Super Força"));