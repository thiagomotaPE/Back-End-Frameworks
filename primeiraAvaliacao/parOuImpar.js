const readline = require('readline-sync');

let n = 0;

do {
    n = Number(readline.question("digite um numero: "));
}while(isNaN(n))


if(n%2 == 0){
    console.log("É Par");
}else{
    console.log("É Impar");
}