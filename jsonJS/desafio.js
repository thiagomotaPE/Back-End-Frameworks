class Barraca {
    constructor(frutas, quantidade, preco, descricao){
      this.frutas = frutas
      this.quantidade = quantidade
      this.preco = preco
      this.descricao = descricao
      this.frutas = frutas
      this.preco = preco
      this.faturamento = 0 
    }
  
    vender(fruta, quantidade) {
      
      switch(fruta){
        case 'Maçã':
          if (quantidade > this.quantidade[0]) {
            console.log("Não há maçãs no estoque.")
          } else {
            this.quantidade[0] = this.quantidade[0] - quantidade
            this.faturamento += quantidade * preco[0]
            console.log(this.quantidade[0])
            return this.faturamento  
          }
          break
        case 'Banana':
          if (quantidade > this.quantidade[1]) {
            console.log("Não há bananas vermelhas no estoque.")
          } else {
            this.quantidade[1] = this.quantidade[1] - quantidade
            this.faturamento += quantidade * preco[1]
            return this.faturamento
          }
          break
            
        default:
          break
      }
    }
  
    getFaturamento() {
      return this.faturamento
    }
    
}
  
  frutas = ["Maçã", "Banana"]
  quantidade = [20, 20]
  preco = [2.00, 7.00]
  descricao = ["Maçã da branca de neve", "banana vermelha de xablau"]
  const barraca_tinoco = new Barraca(frutas, quantidade, preco, descricao)
  
  barraca_tinoco.vender("Maçã", Number(10))
  console.log(`Parabéns, você vendeu a Maçã. Faturado: R$: ${barraca_tinoco.getFaturamento()}`)