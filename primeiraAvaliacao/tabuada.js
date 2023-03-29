const readline = require('readline-sync');

let tabuada = 0;
let inicio = 0;
let fim = 0;

do {
    tabuada = Number(readline.question("Montar a tabuada de:  "));
}while(isNaN(tabuada))

do {
    inicio = Number(readline.question("Começar por:  "));
}while(isNaN(inicio))

do {
    fim = Number(readline.question("Terminar em:  "));
}while(isNaN(fim))

console.log(`Vou montar a tabuada de ${tabuada} começado em ${inicio} e terminando ${fim}`)
console.log("")
for(inicio; inicio <= fim; inicio++){
    console.log(`${tabuada} X ${inicio} = ${inicio*tabuada}`)
}
