/*
===========================================================
Exercícios Práticos - For...In
===========================================================
*/

// 1. Crie um objeto pessoa {nome, idade, cidade}. Percorra com for...in.
const pessoa = {
  nome: "Carlos",
  idade: 35,
  cidade: "São Paulo"
};
for (let chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}

// 2. Crie um objeto carro {marca, modelo, ano}. Exiba propriedades.
const carro = {
  marca: "Fiat",
  modelo: "Uno",
  ano: 2010
};
for (let propriedade in carro) {
  console.log(propriedade);
}

// 3. Crie um objeto aluno {nome, notas: [7, 8, 9]}. Percorra notas com for...in.
const aluno = {
  nome: "Ana",
  notas: [7, 8, 9]
};
// Nota: for...in em arrays percorre os ÍNDICES, não os valores.
for (let index in aluno.notas) {
  console.log(`Índice ${index}, Nota ${aluno.notas[index]}`);
}

// 4. Crie um array de frutas. Use for...in para exibir índices e valores.
const frutas = ["Morango", "Uva", "Laranja"];
for (let indice in frutas) {
  console.log(`Índice: ${indice}, Valor: ${frutas[indice]}`);
}

// 5. Crie um objeto livro {titulo, autor, paginas}. Percorra com for...in.
const livro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  paginas: 1200
};
for (let detalhe in livro) {
  console.log(`${detalhe}: ${livro[detalhe]}`);
}

// 6. Crie um objeto produto {nome, preco, estoque}. Exiba chave e valor.
const produto = {
  nome: "Notebook",
  preco: 4500,
  estoque: 30
};
for (let chave in produto) {
  console.log(`A chave é "${chave}" e o valor é "${produto[chave]}"`);
}

// 7. Crie um objeto computador {cpu, ram, hd}. Percorra e exiba valores.
const computador = {
  cpu: "i7",
  ram: "16GB",
  hd: "1TB SSD"
};
for (let componente in computador) {
  console.log(computador[componente]);
}

// 8. Use for...in em um array de números e exiba índice + valor.
const numeros = [10, 20, 30, 40];
for (let i in numeros) {
  console.log(`O valor no índice ${i} é ${numeros[i]}`);
}

// 9. Peça para o aluno prever o resultado:
let obj = {a: 1, b: 2};
for (let chave in obj) {
  console.log(chave, obj[chave]);
}

// 10. Crie um objeto com 4 propriedades e exiba todas com for...in.
const animal = {
  especie: "Cachorro",
  raca: "Golden Retriever",
  cor: "Dourado",
  idade: 5
};
for (let caracteristica in animal) {
  console.log(`${caracteristica}: ${animal[caracteristica]}`);
}