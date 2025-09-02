/*
===========================================================
Exercícios Práticos - forEach
===========================================================
*/

// 1. Crie um array com 5 nomes e exiba cada nome no console usando forEach.
const arrayNomes = ["Marcus", "Junior", "Alfredo", "Pastos", "Guilherme", "Matheus"];

arrayNomes.forEach(nome => (console.log(nome)))


// 2. Crie um array com números e exiba o dobro de cada um usando forEach.
const arrayNumeros = [1, 3, 4, 6, 8, 9];

arrayNumeros.forEach(num => console.log(num * 2))


// 3. Crie um array com frutas e exiba a posição (índice) de cada fruta usando forEach.

const arrayFrutas = ["Banana", "Maça", "Melão", "Abacaxi"];

arrayFrutas.forEach((fruta, index) => console.log(`a ${fruta} está na posição: ${index}`))

// 4. Some todos os números de um array usando forEach e exiba o resultado.

let soma = 0;

arrayNumeros.forEach((num) => {
  soma += num;
});

console.log(soma);
// 5. Conte quantas palavras em um array possuem mais de 5 letras usando forEach.

let quant = 0;

arrayFrutas.forEach((fruta) => {
  if(fruta.length > 5){
    quant++
  }
});

console.log(`${quant} tem mais que 5 letras`);



// 6. Crie um array de objetos (nome, idade) e exiba apenas os nomes usando forEach.
const nomeIdade = [{"nome": "Guilherme", "idade": 18}, {"nome": "Sabado", "idade": 19}];

nomeIdade.forEach(obj => console.log(`${obj.nome} possui: ${obj.idade} anos`))

// 7. Crie um array de preços e exiba apenas os que forem maiores que 50 usando forEach.

arrayNumeros.forEach((num) => {
  if(num > 50){
    console.log(num);
  }
})






// 8. Crie um array de strings e exiba todas em letras maiúsculas usando forEach.

arrayFrutas.forEach (frutas => console.log(frutas.toLowerCase()))



// 9. Crie um array de números e exiba apenas os pares usando forEach.

arrayNumeros.forEach((num) => {
  if(num % 2 == 0){
    console.log(num);
  }
})



// 10. Crie um array de notas e exiba “Aprovado” para notas >= 7 e “Reprovado” para as demais usando forEach.

arrayNumeros.forEach((num) => {
  if(num >= 7){
    console.log("Aprovado")
  }else{
    console.log("Reprovado")
  }
})