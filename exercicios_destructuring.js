/*
===========================================================
Exercícios Práticos - Destructuring
===========================================================
*/

// 1. Usando destructuring, pegue os dois primeiros valores de um array.
const numeros = [10, 20, 30, 40, 50];
const [primeiro, segundo] = numeros;
console.log(primeiro, segundo); // 10 20

// 2. Use destructuring para extrair propriedades nome e idade de um objeto.
const pessoa = {
  nome: 'Ana',
  idade: 28,
  cidade: 'São Paulo'
};
const { nome, idade } = pessoa;
console.log(nome, idade); // Ana 28

// 3. Use destructuring para extrair uma propriedade que não existe e defina um valor padrão.
const carro = {
  marca: 'Ford',
  modelo: 'Ka'
};
const { marca, ano = 2020 } = carro;
console.log(marca, ano); // Ford 2020

// 4. Use destructuring aninhado para extrair propriedades de um objeto dentro de outro.
const estudante = {
  nomeCompleto: 'Carlos Silva',
  curso: 'Engenharia',
  contato: {
    email: 'carlos.silva@email.com',
    telefone: '11987654321'
  }
};
const { contato: { email } } = estudante;
console.log(email); // carlos.silva@email.com

// 5. Use rest operator para pegar os elementos restantes de um array depois de extrair alguns.
const letras = ['a', 'b', 'c', 'd', 'e'];
const [letraA, letraB, ...resto] = letras;
console.log(letraA, letraB); // a b
console.log(resto); // ['c', 'd', 'e']

// 6. Troque os valores de duas variáveis usando destructuring.
let x = 5;
let y = 10;
[x, y] = [y, x];
console.log(x, y); // 10 5

// 7. Destructure os parâmetros de uma função que recebe um objeto com nome e idade.
function exibirInfo({ nome, idade }) {
  console.log(`Nome: ${nome}, Idade: ${idade}`);
}
const usuario = {
  nome: 'Mariana',
  idade: 32
};
exibirInfo(usuario); // Nome: Mariana, Idade: 32

// 8. Use destructuring para extrair chaves e valores de um objeto dentro de uma função.
function processarProduto() {
  const produto = {
    id: 101,
    descricao: 'Notebook',
    preco: 4500.00
  };
  const { id, preco } = produto;
  console.log(`Produto ID: ${id}, Preço: R$${preco}`);
}
processarProduto(); // Produto ID: 101, Preço: R$4500

// 9. Extraia propriedades de um objeto e renomeie as variáveis usando destructuring.
const filme = {
  titulo: 'Inception',
  diretor: 'Christopher Nolan',
  anoLancamento: 2010
};
const { titulo: nomeFilme, anoLancamento: anoDoFilme } = filme;
console.log(nomeFilme, anoDoFilme); // Inception 2010

// 10. Use destructuring para extrair elementos de um array retornado por uma função.
function obterCoordenadas() {
  return [40.7128, -74.0060];
}
const [latitude, longitude] = obterCoordenadas();
console.log(latitude, longitude); // 40.7128 -74.0060
