/*
===========================================================
Exercícios Práticos - For...Of
===========================================================
*/

// 1. Use for...of para percorrer um array de nomes.
const nomes = ["Ana", "Bruno", "Carlos", "Daniela"];
for (let nome of nomes) {
  console.log(nome);
}

// 2. Use for...of para percorrer uma string e mostrar letras.
const texto = "JavaScript";
for (let letra of texto) {
  console.log(letra);
}

// 3. Crie um array de números e some todos usando for...of.
const numeros = [10, 20, 30, 40, 50];
let soma = 0;
for (let numero of numeros) {
  soma += numero;
}
console.log("A soma é:", soma);

// 4. Percorra um array de notas e calcule a média.
const notas = [8, 7, 9, 10, 6];
let somaNotas = 0;
for (let nota of notas) {
  somaNotas += nota;
}
const media = somaNotas / notas.length;
console.log("A média é:", media);

// 5. Crie um array de frutas e exiba cada uma.
const frutas = ["Maçã", "Banana", "Laranja", "Uva"];
for (let fruta of frutas) {
  console.log(fruta);
}

// 6. Percorra um array de objetos {nome, idade} e exiba no console.
const pessoas = [
  { nome: "Guilherme", idade: 29 },
  { nome: "Mariana", idade: 25 },
  { nome: "Pedro", idade: 32 }
];
for (let pessoa of pessoas) {
  console.log(`${pessoa.nome} tem ${pessoa.idade} anos.`);
}

// 7. Use for...of para percorrer os dígitos de "12345" e somar.
const digitos = "12345";
let somaDigitos = 0;
for (let digito of digitos) {
  somaDigitos += Number(digito);
}
console.log("Soma dos dígitos:", somaDigitos);

// 8. Percorra um array de 5 números e exiba somente os pares.
const numerosPares = [1, 2, 3, 4, 5, 6, 7, 8];
for (let numero of numerosPares) {
  if (numero % 2 === 0) {
    console.log(numero);
  }
}

// 9. Percorra um array de palavras e exiba apenas as que têm mais de 4 letras.
const palavras = ["sol", "lua", "estrela", "universo", "céu"];
for (let palavra of palavras) {
  if (palavra.length > 4) {
    console.log(palavra);
  }
}

// 10. Peça para o aluno prever o resultado:
for (let letra of "ABC") {
  console.log(letra);
}