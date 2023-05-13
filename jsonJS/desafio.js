class Barraca {
  constructor(estoque) {
    this.estoque = estoque
    this.faturamento = 0
  }

  vender(fruta, quantidade) {
    for (fruta of this.estoque) {
      if (fruta.nome == 'Maçã') {
        novaFruta = {
          "nome": fruta.nome,
          "quantidade": fruta.quantidade - quantidade,
          "preco": fruta.preco,
          "descricao": fruta.descricao
        }
        // Continue esse código! 
      }
    }

  }

  getFaturamento() {
    return this.faturamento
  }

}

estoque = [
  {
    "nome": "Maçã",
    "quantidade": 20,
    "preco": 2.00,
    "descricao": "Maçã vermelha"
  },
  {
    "nome": "Banana",
    "quantidade": 10,
    "preco": 7.00,
    "descricao": "Banana vermelha"
  }
]
const barraca_tinoco = new Barraca(estoque)

barraca_tinoco.vender("Maçã", Number(10))
console.log(`Parabéns, você vendeu a Maçã. Faturado: R$: ${barraca_tinoco.getFaturamento()}`)