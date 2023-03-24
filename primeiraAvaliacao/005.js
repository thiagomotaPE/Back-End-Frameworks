const readline = require('readline-sync');

let num1 = 0;
let num2 = 0;
let num3 = 0;

do {
    console.log("Digite um numero e nao uma letra!")
    num1 = Number(readline.question("Digite um numero: "));
}while(isNaN(num1))

do {
    console.log("Digite um numero e nao uma letra!")
    num2 = Number(readline.question("Digite outro numero: "));
}while(isNaN(num2))

do {
    console.log("Digite um numero e nao uma letra!")
    num3 = Number(readline.question("Digite o ultimo numero: "));
}while(isNaN(num3))

let max = Math.max(num1, num2, num3);
console.log(max);