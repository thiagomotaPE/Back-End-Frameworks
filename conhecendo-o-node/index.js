// let raio = 4;
// let pi = 3.14;
// let diametro = raio * 2;
// let comprimento = 2 * pi * raio;
// let areaCirculo = pi * (raio**2); // colocar o n**2, significa que o numero vai ter a potencia 2.

// console.log(raio, pi, diametro, comprimento, areaCirculo);

const readline = require('readline-sync'); //o modulo readline é tipo o Scanner do java.
const num1 = Number(readline.question("Digite um numero: "));
const num2 = Number(readline.question("Digite outro numero: "));

if(num1 > num2) {
    console.log(`o numero ${num1} é maior que o numero ${num2}`);
}else if(num1 < num2) {
    console.log(`o numero ${num2} é maior que o numero ${num1}`);
}else {
    console.log("os numeros são iguais");
}


