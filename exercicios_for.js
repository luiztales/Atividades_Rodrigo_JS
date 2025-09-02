/*
===========================================================
Exercícios Práticos - For
===========================================================
*/

// 1. Use um for para imprimir números de 1 a 10.
for(let i = 0; i <= 10; i++){
  console.log(`Numero : ${i}`)
}

// 2. Use um for para imprimir números pares de 0 a 20.
for(let i = 0; i <= 20; i++){
  if(i % 2 == 0){
    console.log(`Numeros Par: ${i}`);
  }
}

// 3. Use um for para imprimir números ímpares de 1 a 15.
for(let i = 0; i <= 15; i++){
  if(i % 2 !== 0){
    console.log(`Numeros Impar: ${i}`);
  }
}

// 4. Calcule a soma dos números de 1 a 100 usando for.

let array = [];

for(let i = 0; i <= 100; i++){
  if(i <= 100){
    
    array.push(i)

    if(array.length == 101){
      const soma = array.reduce((total, valor) => total + valor, 0)
      console.log(`A soma dos numeros e: ${soma}`);
    }
  }
}

// 5. Crie um array com 5 frutas e percorra com for exibindo cada uma.
let frutas = ["ameixa", "uva", "maca", "banana", "abacaxi"]

for(let i = 0; i < frutas.length; i++){
  console.log(frutas[i]);
}

// 6. Crie um for que mostre a tabuada do 7.
for(i = 0; i <= 10; i++){
  console.log(`7 x ${i} = ${7 * i}`)
}

// 7. Use um for para percorrer uma string e exibir cada caractere.
let stringMinha = "abacaxi";

for(i = 0; i < stringMinha.length; i++){
  console.log(stringMinha[i])
}

// 8. Use um for decrescente para contar de 10 até 1.
for(let i = 10; i > 0; i--){
  console.log(`Diminuindo: ${i}`)
}

// 9. Peça para o aluno prever o resultado:
// for (let i = 0; i < 5; i++) {
//   console.log("i =", i);
// }


// 10. Crie um for que calcule o fatorial de 5.
let fatorial = 1

for(let i = 2; i <= 5; i++){
  fatorial *= i
}

console.log(`5! = ${fatorial}`)