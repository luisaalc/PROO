let pedido = {
   dados: {
    sabor: "Calabresa",
    tamanho: "Grande",
    bordaRecheada: true,
    adicionais: ["Azeitonas", "Cebola"],
    valor: 55.50
    },

    exibir: function exibirPedido(pedido) {
        console.log(`Pedido: Pizza de ${pedido.sabor}, ${pedido.bordaRecheada ? 'com borda recheada': 'sem borda recheada'} e adicionais (${pedido.adicionais.join(', ')}). Valor: R$${pedido.valor}.`)
    }
}

pedido.exibir(pedido.dados)