const readline = require('readline-sync');

const num1 = Number(readline.question("Digite um numero: "));
const num2 = Number(readline.question("Digite outro numero: "));
const num3 = Number(readline.question("Digite outro numero: "));

let max = Math.max(num1, num2, num3);
console.log(max);