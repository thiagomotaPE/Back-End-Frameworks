const readline = require('readline-sync');

const sexo = readline.question("qual seu sexo?  M/F ").toUpperCase();
const idade = Number(readline.question("qual sua idade?  "));

    if (sexo == "M") {
        console.log("Seu sexo é Masculino");
    }else if (sexo == "F") {
        console.log("Seu sexo é Feminino ");
    }
    
    if(idade <= 9 ) {
        console.log("é uma criança");
    }else{
        console.log("é um adulto")
    }