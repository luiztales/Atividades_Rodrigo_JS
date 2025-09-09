/*
===========================================================
Exercícios Práticos - map
===========================================================
*/

// 1. Crie um array de números e use map para retornar o dobro de cada número.
const numeros = [1, 2, 3, 4, 5];
const dobro = numeros.map(num => num * 2);
console.log(dobro);

// 2. Crie um array de nomes e use map para deixar todos em maiúsculo.
const nomes = ["ana", "carlos", "beatriz", "joão"];
const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
console.log(nomesMaiusculos);

// 3. Crie um array de strings e use map para retornar o tamanho de cada string.
const palavras = ["sol", "lua", "estrela", "universo"];
const tamanhos = palavras.map(palavra => palavra.length);
console.log(tamanhos);

// 4. Crie um array de preços e use map para aplicar 10% de desconto em cada preço.
const precos = [50, 120, 85, 300];
const precosComDesconto = precos.map(preco => preco * 0.9);
console.log(precosComDesconto);

// 5. Crie um array de idades e use map para transformar em um array de mensagens do tipo "Idade: X anos".
const idades = [22, 35, 18, 41];
const mensagensIdade = idades.map(idade => `Idade: ${idade} anos`);
console.log(mensagensIdade);

// 6. Crie um array de números e use map para retornar um array com o quadrado de cada número.
const numerosBase = [1, 3, 5, 7, 9];
const quadrados = numerosBase.map(num => num ** 2);
console.log(quadrados);

// 7. Crie um array de objetos {nome, idade} e use map para retornar apenas os nomes.
const pessoas = [
  { nome: "Carlos", idade: 28 },
  { nome: "Mariana", idade: 22 },
  { nome: "Lucas", idade: 31 }
];
const nomesPessoas = pessoas.map(pessoa => pessoa.nome);
console.log(nomesPessoas);

// 8. Crie um array de temperaturas em Celsius e use map para convertê-las para Fahrenheit.
const temperaturasCelsius = [0, 10, 25, 30, 100];
const temperaturasFahrenheit = temperaturasCelsius.map(celsius => (celsius * 9/5) + 32);
console.log(temperaturasFahrenheit);

// 9. Crie um array de palavras e use map para adicionar "!" ao final de cada uma.
const saudacoes = ["Olá", "Bem-vindo", "Parabéns"];
const saudacoesExclamadas = saudacoes.map(palavra => palavra + "!");
console.log(saudacoesExclamadas);

// 10. Crie um array de notas e use map para retornar "Aprovado" se >= 7, senão "Reprovado".
const notas = [8.5, 6.0, 9.2, 7.0, 5.9, 10];
const resultados = notas.map(nota => nota >= 7 ? "Aprovado" : "Reprovado");
console.log(resultados);
