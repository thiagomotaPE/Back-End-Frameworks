const readline = require('readline-sync')

function potencia(base, expoente) {
    let result = 1;
    for(let i = 0; i < expoente; i++) {
        result *= base;
    }
    return result
}

let base = Number(readline.question("Digite a base: "));
if(isNaN(base)) {
    do{
        console.clear();
        console.log('Digite um NUMERO!')
        base = Number(readline.question("Digite a base: "));
    }while(isNaN(base));
}

let expoente = Number(readline.question("Digite o expoente: "));
if(isNaN(expoente)) {
    do{
        console.clear();
        console.log('Digite um NUMERO!')
        expoente = Number(readline.question("Digite o expoente: "));
    }while(isNaN(expoente));
}

const result = potencia(base, expoente);

console.log(`${base} elevado a ${expoente} é igual a ${result}`)
