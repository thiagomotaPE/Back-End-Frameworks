const readline = require('readline-sync');

let pessoa = "";

do {
    console.log("Digite uma entrada valida (S/N)!")
    pessoa = readline.question("Ola, voce e estudante ou idoso(a)? S/N ").toUpperCase();
}while(pessoa !== "S" && pessoa !== "N")

switch (pessoa) {
    case "S":
        console.log("Você tem direito a meia entrada");
        break;
    case "N":
        console.log("Você não tem direito a meia entrada");
        break;
}