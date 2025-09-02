/*
===========================================================
Exercícios Práticos - Do...While
===========================================================
*/

// 1. Use do...while para imprimir números de 1 a 5.
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

// 2. Use do...while para pedir senha até ser "1234".
let senha;
do {
  senha = prompt("Digite a senha:");
} while (senha !== "1234");

// 3. Use do...while para imprimir pares até 20.
let par = 2;
do {
  console.log(par);
  par += 2;
} while (par <= 20);

// 4. Use do...while para exibir uma mensagem pelo menos uma vez, mesmo que a condição seja falsa.
let condicao = false;
do {
  console.log("Esta mensagem é exibida pelo menos uma vez.");
} while (condicao);

// 5. Crie um do...while que conte de 10 até 1.
let j = 10;
do {
  console.log(j);
  j--;
} while (j >= 1);

// 6. Crie um do...while que exiba os caracteres de uma string.
const texto = "Mundo";
let index = 0;
do {
  console.log(texto[index]);
  index++;
} while (index < texto.length);

// 7. Use do...while para calcular soma de 1 a 100.
let soma = 0;
let k = 1;
do {
  soma += k;
  k++;
} while (k <= 100);
console.log("A soma é:", soma);

// 8. Use do...while para gerar números aleatórios até sair 0.
let numeroAleatorio;
do {
  numeroAleatorio = Math.floor(Math.random() * 10); // Gera de 0 a 9
  console.log("Número gerado:", numeroAleatorio);
} while (numeroAleatorio !== 0);

// 9. Peça para o aluno prever o resultado:
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 3);


// 10. Crie um do...while que calcule o fatorial de 6.
let fatorial = 1;
let numero = 6;
do {
  fatorial *= numero;
  numero--;
} while (numero > 0);
console.log("O fatorial de 6 é:", fatorial);