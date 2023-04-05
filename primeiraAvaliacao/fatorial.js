const readline = require('readline-sync');

let fatorial = [];
let menosUm = 0;
let total = 0;

function multiplicarNumeros() {
    let multiplicação = 1;
    for(let i = 0; i < fatorial.length; i++){
        multiplicação  *= fatorial[i]; 
    }
    return multiplicação
}

menosUm = Number(readline.question("Digite um numero para que eu calcule o seu fatorial: "));

for(menosUm; menosUm > 0; menosUm--) {
    fatorial.push(menosUm);
}

total = multiplicarNumeros();
console.log(`Fatorial: ${fatorial}`);
console.log(`Resultado: ${total}`);