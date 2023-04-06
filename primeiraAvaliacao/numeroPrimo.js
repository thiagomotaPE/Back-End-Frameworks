const readline = require('readline-sync');

function ehPrimo(numero) {
    if (numero < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
}

let numero = Number(readline.question('Digite um número inteiro: '));

if (ehPrimo(numero)) {
    console.log(`${numero} é um número primo.`);
} else {
    console.log(`${numero} não é um número primo`);
}