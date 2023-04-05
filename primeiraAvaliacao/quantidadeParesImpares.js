const readline = require('readline-sync');

let numerosPares = [];
let numerosImpares = [];
let numero = 0;
let totalPares = 0;
let totalImpares = 0;

for(let i = 0; i < 10; i++){
    numero = Number(readline.question("Digite um numero: "));
    if(numero % 2 == 0) {
        numerosPares.push(numero);
        totalPares += 1;
    }else {
        numerosImpares.push(numero);
        totalImpares += 1;
    }
}

console.log(`Lista de numeros pares: ${numerosPares}`);
console.log(`Total de pares: ${totalPares}`)
console.log(`Lista de numeros impares: ${numerosImpares}`)
console.log(`Total de impares: ${totalImpares}`)