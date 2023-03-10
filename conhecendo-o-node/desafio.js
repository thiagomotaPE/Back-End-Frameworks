const readline = require('readline-sync');

const n = Number(readline.question("digite um numero: "));
var total=n/2;
if(n%2 == 0){
	alert("Par");
}else{
	alert("Impar");
}
alert(total)

