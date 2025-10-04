let times = {
    nomeTime: "Os Invencíveis",
    treinador: "Carlos Silva",
    jogadores: ["Ana", "Bruno", "Carla", "Diego", "Eva"],
    vitorias: 0,
    derrotas: 0,
    empates: 0,
    registrarPartida: function(resultado){   
        if(resultado === "vitoria"){
        this.vitorias++;
    } else if(resultado === "derrota"){
        this.derrotas++;
    } else if(resultado === "empate"){
        this.empates++;
    }
} }

times.registrarPartida("vitoria");
times.registrarPartida("vitoria");
times.registrarPartida("derrota");

console.log(`Time: ${times.nomeTime}.`)
console.log(`Placar - Vitórias: ${times.vitorias}. Derrotas: ${times.derrotas}.`)