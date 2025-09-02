/*
===========================================================
Exercícios Práticos - Arrays
===========================================================
*/

// 1. Crie um array com 5 elementos e exiba o terceiro.

const array = [1, 2, 3, 4, 5];
console.log(array[2]);

// 2. Adicione um elemento ao final do array.

array.push(6)


// 3. Remova o primeiro elemento do array.

array.shift()

// 4. Use map para transformar todos os elementos em strings maiúsculas.
const arrayString = array.map(numero => (numero.toString));

// 5. Use filter para criar um novo array apenas com números pares.

const pares = array.filter(numero => (numero % 2 == 0));
console.log(`Numeros pares ${pares}`);


// 6. Use reduce para somar todos os números de um array.

const soma = array.reduce((total, valor) => (total + valor, 0))

// 7. Use find para encontrar o primeiro elemento maior que 10.

const numero10 = array.find(num => (num == 10));

// 8. Ordene um array de números em ordem crescente.

const arrayCrescente = array.sort((a, b) => a - b);

// 9. Inverta a ordem dos elementos de um array.

const invertido = array.reverse();

// 10. Faça a troca de valores entre dois índices usando destructuring.

let array1 = ["Bola", "Acai", "Gelo"];
let array2 = ["Triangulo", "Circulo", "Trigon"]

[array1[0], array1[1]] = [array2[0], array2[1]]

console.log(array1);