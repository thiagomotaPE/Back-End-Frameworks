const readline = require('readline-sync');

const nota1 = Number(readline.question("Digite sua primeira nota:  "));
const nota2 = Number(readline.question("Digite sua segunda nota:  "));

const media = (nota1 + nota2) / 2;

if(media >= 7) {
    console.log("aprovado!");
}else if (media >= 4 && media < 7) {
    console.log("aluno de recuperação!");
}else{
    console.log("aluno reprovado!")
}