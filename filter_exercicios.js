/*
===========================================================
Exercícios Práticos - filter
===========================================================
*/

// 1. Crie um array de números e use filter para retornar apenas os pares.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros.filter(num => num % 2 === 0);
console.log(numerosPares);

// 2. Crie um array de idades e use filter para retornar apenas as maiores de 18.
const idades = [15, 18, 21, 35, 17, 40];
const maioresDe18 = idades.filter(idade => idade > 18);
console.log(maioresDe18);

// 3. Crie um array de preços e use filter para retornar apenas os maiores que 50.
const precos = [30.50, 75.00, 49.90, 120.00, 50.00, 99.99];
const precosMaioresQue50 = precos.filter(preco => preco > 50);
console.log(precosMaioresQue50);

// 4. Crie um array de nomes e use filter para retornar apenas os que têm mais de 5 letras.
const nomes = ["Ana", "Carlos", "Beatriz", "João", "Fernanda", "Luiz"];
const nomesLongos = nomes.filter(nome => nome.length > 5);
console.log(nomesLongos);

// 5. Crie um array de palavras e use filter para retornar apenas as que começam com a letra "A".
const palavras = ["Abacaxi", "Banana", "Amora", "Maçã", "Abacate"];
const palavrasComA = palavras.filter(palavra => palavra.startsWith("A"));
console.log(palavrasComA);

// 6. Crie um array de números e use filter para retornar apenas os múltiplos de 3.
const listaDeNumeros = [2, 3, 5, 6, 9, 10, 12, 15];
const multiplosDe3 = listaDeNumeros.filter(num => num % 3 === 0);
console.log(multiplosDe3);

// 7. Crie um array de objetos {nome, idade} e use filter para retornar apenas os com idade >= 18.
const pessoas = [
  { nome: "Carlos", idade: 17 },
  { nome: "Mariana", idade: 18 },
  { nome: "Lucas", idade: 25 },
  { nome: "Júlia", idade: 16 }
];
const adultos = pessoas.filter(pessoa => pessoa.idade >= 18);
console.log(adultos);

// 8. Crie um array de notas e use filter para retornar apenas as notas >= 7.
const notas = [5.5, 8.0, 9.5, 6.9, 7.0, 4.2, 10.0];
const notasAprovadas = notas.filter(nota => nota >= 7);
console.log(notasAprovadas);

// 9. Crie um array de strings e use filter para retornar apenas as que contêm a letra "e".
const frutas = ["maçã", "banana", "cereja", "abacate", "uva"];
const frutasComE = frutas.filter(fruta => fruta.includes("e"));
console.log(frutasComE);

// 10. Crie um array de temperaturas e use filter para retornar apenas as maiores que 30.
const temperaturas = [25, 32, 28, 35, 30, 22, 40];
const temperaturasAltas = temperaturas.filter(temp => temp > 30);
console.log(temperaturasAltas);
