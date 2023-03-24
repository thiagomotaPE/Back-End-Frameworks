const readline = require('readline-sync');

const pessoa = readline.question("Ola, você é estudante ou idoso(a)? S/N ").toUpperCase();

switch (pessoa) {
    case "S":
        console.log("Você tem direito a meia entrada");
        break
    case "N":
        console.log("Você não tem direito a meia entrada");
        break
    default:
        console.log("entrada invalida!");
}