const readline = require("readline-sync")

  combustivel = readline.question('Escolha o tipo do combustivel digite G-Gasolina e A-Álcool: ')
  litro = Number(readline.question('Quantos litros de combusrivel voce quer?'))
  let valorDesconto

    if(combustivel == 'g'){
      if(litro <= 20){
        let valor = litro * 5
        let desconto = (4 * valor)/100
        valorDesconto = valor - desconto
      } else if(litro > 20){
        let valor = litro * 5
        let desconto = (6 * valor)/100
        valorDesconto = valor - desconto
      }
    }else if(combustivel == 'a'){
      if(litro <= 20){
        let valor = litro * 4
        let desconto = (3 * valor)/100
        valorDesconto = valor - desconto
      } else if(litro > 20){
        let valor = litro * 4
        let desconto = (5 * valor)/100
        valorDesconto = valor - desconto
      }
    }
    console.clear()
    console.log(`Total a pagar: ${valorDesconto.toFixed(2)}`)