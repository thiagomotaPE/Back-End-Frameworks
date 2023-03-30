const readline = require('readline-sync');

let diaSemana = 0;

diaSemana = Number(readline.question("Digite um numero de 1 a 7: "));

if(diaSemana < 1 || diaSemana > 7) {
    do{
        console.clear();
        console.log("Valor invalido!");
        diaSemana = Number(readline.question("Digite um numero de 1 a 7: "));
    }while(isNaN(diaSemana) || diaSemana < 1 || diaSemana > 7);
}

console.log(" ");

switch(diaSemana) {
    case 1:
        console.log(`${diaSemana} - Domingo`);
        break;
    case 2:
        console.log(`${diaSemana} - Segunda`);
        break;
    case 3:
        console.log(`${diaSemana} - Terça`);
        break;
    case 4:
        console.log(`${diaSemana} - Quarta`);
        break;
    case 5:
        console.log(`${diaSemana} - Quinta`);
        break;
    case 6:
        console.log(`${diaSemana} - Sexta`);
        break;
    case 7:
        console.log(`${diaSemana} - Sabado`);
        break;
}