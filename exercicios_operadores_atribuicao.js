/*
===========================================================
Exercícios Práticos - Operadores de Atribuição
===========================================================
*/

// 1. Crie uma variável `n = 10`. Aplique `n += 5` e exiba.
let n = 10;
n += 5;
console.log(n);

// 2. Continue com o mesmo `n`. Aplique `n -= 3` e exiba.
n -= 3;
console.log(n);

// 3. Continue com o mesmo `n`. Aplique `n *= 2` e exiba.
n *= 2;
console.log(n);

// 4. Continue com o mesmo `n`. Aplique `n /= 4` e exiba.
n /= 4;
console.log(n);

// 5. Continue com o mesmo `n`. Aplique `n %= 3` e exiba.
n %= 3;
console.log(n);

// 6. Continue com o mesmo `n`. Aplique `n **= 2` e exiba.
n **= 2;
console.log(n);

// 7. Mostre que `n = n + 1` é equivalente a `n += 1`.
let valor1 = 20;
valor1 = valor1 + 1;
console.log(valor1); // Resultado: 21

let valor2 = 20;
valor2 += 1;
console.log(valor2); // Resultado: 21 (mesmo resultado)

// 8. Crie `a = 5` e `b = 2`. Atualize `a` usando `a *= b`. Exiba o resultado.
let a = 5;
let b = 2;
a *= b;
console.log(a);

// 9. Crie uma variável `saldo = 1000`. Desconte 15% usando operador de atribuição.
let saldo = 1000;
saldo -= saldo * 0.15; // Desconta 15% do valor atual
console.log(saldo);

// 10. Peça para o aluno prever o resultado antes de rodar:
// let x = 2;
// x += 3;  // x se torna 5
// x *= 2;  // x se torna 10
// x -= 4;  // x se torna 6
// console.log(x);
console.log("Previsão para o exercício 10: O resultado final de x será 6.");
let x = 2;
x += 3;
x *= 2;
x -= 4;
console.log(x);
