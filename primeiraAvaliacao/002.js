const readline = require('readline-sync');

const n = Number(readline.question("digite um numero: "));

if(n%2 == 0){
    console.log("É Par");
}else{
    console.log("É Impar");
}