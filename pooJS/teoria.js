//criando uma classe no nodejs
class fruta {

    // no javascript os atributos podem ser declarador no metodo construtor

    //função construtor
    constructor(cor, sabor, formato, tem_semente, tamanho, quantidade) { 
        //cor = dado que pegou da classe main   |   this.cor = variavel da classe
        this.cor = cor 
        this.sabor = sabor
        this.formato = formato
        this.tem_semente = tem_semente
        this.tamanho = tamanho
        this.quantidade = quantidade
        //this serve para se referir ao atributo desta mesma classe
    }

    venderFruta(qtd) {
        return this.quantidade -= qtd
    }

    reporFruta(qtd) {
        return this.quantidade += qtd
    }
}

let banana = new fruta("vermelha", "aguada", "cilindrico", false, "18 cm", 57)

console.log(banana)
console.log(banana.venderFruta(3))
console.log(banana)