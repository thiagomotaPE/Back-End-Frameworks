const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits.length); //pega quantos itens(ou quantas posições) estao na array e mostra

for(let i= 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//object.keys()
console.log(Object.keys(fruits)) // vai mostrar as posições(index) existentes na array

//mostra cada fruta e seu respectivo indice
const chaves = Object.keys(fruits);
for(let i= 0; i < fruits.length; i++) {
    console.log(chaves[i], fruits[i]);
}

//concat()
a1 = [0, 1, 2]
a2 = [3, 4, 5]
console.log(a1.concat(a2)); //juntou duas arrays

//forEach
a1.forEach((elemento) => {
    console.log(elemento); //mostrou uma lista dos indices do array
}) 

//indexOff()

console.log(fruits.indexOf("peach")); //mostrou a posição(indice) da fruta escolhida
