// //QUESTÃO 1
// let a = [];
// //a)
// console.log("letra A");
// a.push(1, 0, 5, -2, -5, 7);
// console.log(a);
// console.log(" ");
// //b)
// console.log("letra B");
// let soma = a[0] + a[1] + a[5]
// console.log(soma)
// console.log(" ");

// //c)
// console.log("letra C");
// a[4] = 100;
// console.log(a[4]);
// console.log(" ");

// //d)
// console.log("letra D");
// for(let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }
// console.log(" ");

// //QUESTÃO 2
// console.log("2.");
// const readline = require('readline-sync');
// let values = [];
// let adicionar = 0;
// do{
//     adicionar = Number(readline.question("Digite 6 numeros: "));
//     values.push(adicionar);
// }while(values.length < 6)
// console.log(values);
// console.log(" ");

//QUESTÃO 3
console.log("3.");
const readline = require('readline-sync');
let conjunto1 = [];
let conjunto2 = [];
let adicionar = 0;
do{
    adicionar = Number(readline.question("Digite 10 numeros: "));
    conjunto1.push(adicionar);
}while(conjunto1.length < 10)
for(let i = 0; i < conjunto1.length; i++){
    conjunto2.push(conjunto1[i]*conjunto1[i]);
}
console.log(conjunto1);
console.log(conjunto2);
console.log(" ");


