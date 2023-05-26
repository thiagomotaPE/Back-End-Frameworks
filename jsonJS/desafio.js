class Barraca {
  constructor(estoque) {
    this.estoque = estoque
    this.faturamento = 0
  }

  vender(frutaJson, quantidade) {
    for (let fruta of this.estoque) {
      if (fruta.nome == frutaJson.nome) {
        let posicaoFruta = this.estoque.indexOf(frutaJson)
        this.estoque[posicaoFruta].quantidade = this.estoque[posicaoFruta].quantidade - quantidade
        this.faturamento = this.faturamento + (frutaJson.preco) * quantidade
        let novaFruta = {
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

barraca_tinoco.vender(estoque[0], Number(10))
console.log(`Parabéns, você vendeu a Maçã. Faturado: R$: ${barraca_tinoco.getFaturamento()} \n quantidade de fruta em estoque: ${barraca_tinoco.estoque[0].quantidade} \n Faturado: R$ ${barraca_tinoco.getFaturamento()}`)