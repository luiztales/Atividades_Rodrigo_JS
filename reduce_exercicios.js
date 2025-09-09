/*
===========================================================
Exercícios Práticos - reduce
===========================================================
*/

// 1. Crie um array de números e use reduce para somar todos eles.
const numeros = [10, 20, 30, 40, 50];
const somaTotal = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(somaTotal);

// 2. Crie um array de números e use reduce para multiplicar todos eles.
const fatores = [1, 2, 3, 4, 5];
const produtoTotal = fatores.reduce((acumulador, valorAtual) => acumulador * valorAtual, 1);
console.log(produtoTotal);

// 3. Crie um array de notas e use reduce para calcular a média.
const notas = [8.5, 9.0, 7.5, 10.0];
const somaDasNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
const media = somaDasNotas / notas.length;
console.log(media);

// 4. Crie um array de strings e use reduce para concatenar todas em uma só.
const palavras = ["JavaScript", " ", "é", " ", "incrível"];
const frase = palavras.reduce((acumulador, palavra) => acumulador + palavra, "");
console.log(frase);

// 5. Crie um array de palavras e use reduce para contar quantas letras no total.
const listaDePalavras = ["gato", "cachorro", "pássaro"];
const totalLetras = listaDePalavras.reduce((acumulador, palavra) => acumulador + palavra.length, 0);
console.log(totalLetras);

// 6. Crie um array de números e use reduce para encontrar o maior número.
const numerosCompeticao = [45, 120, 88, 99, 54, 150];
const maiorNumero = numerosCompeticao.reduce((maior, atual) => (atual > maior ? atual : maior));
console.log(maiorNumero);

// 7. Crie um array de objetos {produto, preco} e use reduce para calcular o valor total dos preços.
const carrinho = [
  { produto: "Notebook", preco: 4500 },
  { produto: "Mouse", preco: 150 },
  { produto: "Teclado", preco: 300 }
];
const valorTotalCarrinho = carrinho.reduce((acumulador, item) => acumulador + item.preco, 0);
console.log(valorTotalCarrinho);

// 8. Crie um array de nomes e use reduce para criar um objeto que conta quantas vezes cada nome aparece.
const nomes = ["Ana", "Carlos", "Ana", "Beatriz", "Carlos", "Ana"];
const contagemNomes = nomes.reduce((acumulador, nome) => {
  acumulador[nome] = (acumulador[nome] || 0) + 1;
  return acumulador;
}, {});
console.log(contagemNomes);

// 9. Crie um array de temperaturas e use reduce para calcular a média delas.
const temperaturas = [22, 25, 30, 28, 26, 24];
const somaTemperaturas = temperaturas.reduce((soma, temp) => soma + temp, 0);
const mediaTemperaturas = somaTemperaturas / temperaturas.length;
console.log(mediaTemperaturas.toFixed(2));

// 10. Crie um array de frases e use reduce para juntar todas separadas por ponto final.
const frases = ["Primeira parte da história", "a segunda parte continua", "e este é o fim"];
const historiaCompleta = frases.reduce((texto, frase) => texto + ". " + frase);
console.log(historiaCompleta + ".");
