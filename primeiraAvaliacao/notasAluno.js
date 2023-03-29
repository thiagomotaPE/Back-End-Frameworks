const readline = require('readline-sync');

let nota1 = 0;
let nota2 = 0;

do {
    nota1 = Number(readline.question("Digite sua primeira nota:  "));
}while(isNaN(nota1) || nota1 < 0 || nota1 > 10)

do {
    nota2 = Number(readline.question("Digite sua segunda nota:  "));
}while(isNaN(nota2) || nota2 < 0 || nota2 > 10)

const media = (nota1 + nota2) / 2;

if(media >= 7) {
    console.log("aprovado!");
}else if (media >= 4 && media < 7) {
    console.log("aluno de recuperação!");
}else{
    console.log("aluno reprovado!")
}