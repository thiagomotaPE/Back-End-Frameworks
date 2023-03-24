const readline = require('readline-sync');

const sexo = readline.question("qual seu sexo?  M/F ").toUpperCase();
const idade = Number(readline.question("qual sua idade?  "));

    switch(sexo) {
        case 'M':
            console.log("é Masculino");
            break;
        case 'F':
            console.log("é Feminino ");
            break;
        default:
            console.log("insira um valor valido(M/F) para continuar!");
    }
    
    if(idade <= 9 ) {
        console.log("é uma criança");
    }else{
        console.log("é um adulto")
    }