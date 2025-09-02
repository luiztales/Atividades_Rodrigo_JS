/*
===========================================================
Exercícios Práticos - While
===========================================================
*/

// 1. Use um while para imprimir números de 1 a 10.
let i = 1;
while(i <= 10){
  console.log(i);
  i++;
}

// 2. Use um while para imprimir números pares até 20.
let i_pares = 2;
while(i_pares <= 20){
  console.log(i_pares);
  i_pares += 2;
}

// 3. Some números de 1 a 100 usando while.
let soma = 0;
let i_soma = 1;
while(i_soma <= 100){
  soma += i_soma;
  i_soma++;
}
console.log(soma);

// 4. Crie um while que conte de 10 até 1.
let i_regressivo = 10;
while(i_regressivo >= 1){
  console.log(i_regressivo);
  i_regressivo--;
}

// 5. Crie um while que peça senha até ser igual a "1234".
let senha;
while(senha !== "1234"){
    senha = prompt("Digite a senha:");
}

// 6. Crie um while que calcule a tabuada do 5.
let multiplicador = 1;
while(multiplicador <= 10){
    console.log(`5 x ${multiplicador} = ${5 * multiplicador}`);
    multiplicador++;
}

// 7. Crie um while que exiba os caracteres da string "JavaScript".
const str = "JavaScript";
let index = 0;
while(index < str.length){
    console.log(str[index]);
    index++;
}

// 8. Use while para calcular o fatorial de 5.
let fatorial = 1;
let numero = 5;
while(numero > 1){
    fatorial *= numero;
    numero--;
}
console.log(fatorial);

// 9. Peça para o aluno prever o resultado:
// let i = 0;
// while (i < 3) {
//    console.log(i);
//    i++;
// }


// 10. Crie um while que só termina quando um número aleatório for 7.
let numeroAleatorio = 0;
while(numeroAleatorio !== 7){
    numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    console.log("O número sorteado foi:", numeroAleatorio);
}