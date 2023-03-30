const readline = require('readline-sync');

let gabarito = new Array(10);
let respostaAluno = new Array(10);
let opcao = 0;

do{
    console.log("---------------------");
    console.log("       MENU");
    console.log('---------------------');
    console.log("1 - Responder o simulado");
    console.log("2 - Alterar gabarito do simulado(somente professor)");
    console.log(" ");
    opcao = Number(readline.question("Escolha uma opcao: "));
    console.log(" ");
}while(opcao !== 1 && opcao !== 2)

switch(opcao) {
    case 1:
        console.clear();
        console.log("---------------------");
        console.log("       SIMULADO");
        console.log('---------------------');
        console.log("Digite aqui a resposta de cada pergunta do simulado: ");
        console.log(" ");

        for(let i = 0; i < 10; i++) {
            respostaAluno[i] = readline.question(`Digite a resposta da questao ${i + 1}: `);
        }
        console.clear();

        //teste
        for (let i = 0; i < respostaAluno.length; i++) {
            console.log(`Resposta questao ${i + 1}:${respostaAluno[i]}`);
        }
        break;
    case 2:
        console.clear();
        console.log("Ola professor, digite o gabarito do simulado: ")
        for(let i = 0; i < 10; i++) {
            gabarito[i] = readline.question(`Digite o gabarito da questao ${i + 1}: `);
        }
        console.clear();
        
        //teste
        for (let i = 0; i < gabarito.length; i++) {
            console.log(`Gabarito questao ${i + 1}:${gabarito[i]}`);
        }
        break;
}


