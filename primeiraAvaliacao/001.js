const readline = require('readline-sync');

let sexo = "";
let idade = 0;

do {
    sexo = readline.question("Qual seu sexo? M/F: ").toUpperCase();
} while (sexo !== 'M' && sexo !== 'F');

do {
    idade = Number(readline.question("qual sua idade?  "));
} while (isNaN(idade) || idade <= 0);

switch(sexo) {
    case 'M':
        console.log("é Masculino");
        break;
    case 'F':
        console.log("é Feminino ");
        break;
}
    
if(idade <= 9 ) {
    console.log("é uma criança");
}else{
    console.log("é um adulto")
}