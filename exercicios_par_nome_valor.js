/*
===========================================================
Exercícios Práticos - Par Nome/Valor
===========================================================
*/

// 1. Declare uma variável string e exiba seu valor no console.
const nomeCidade = "Rio de Janeiro";
console.log(nomeCidade);

// 2. Crie um objeto com pelo menos 3 pares nome/valor e exiba uma das propriedades.
const produto = {
  nome: "Smartphone",
  marca: "Samsung",
  preco: 1800.00
};
console.log(produto.marca);

// 3. Crie um array com 5 elementos e exiba o terceiro elemento.
const diasDaSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
console.log(diasDaSemana[2]); // O terceiro elemento está no índice 2

// 4. Crie um objeto e adicione uma nova propriedade dinamicamente.
const usuario = {
  id: 101,
  nome: "Beatriz"
};
usuario.email = "beatriz@email.com";
console.log(usuario);

// 5. Mostre como acessar um valor de um objeto usando colchetes e uma variável.
const filme = {
  titulo: "Interestelar",
  diretor: "Christopher Nolan"
};
const chave = "titulo";
console.log(filme[chave]);

// 6. Crie uma função que recebe um objeto e exibe as chaves e valores (usando for...in).
function listarPropriedades(obj) {
  for (const propriedade in obj) {
    console.log(`${propriedade}: ${obj[propriedade]}`);
  }
}
const carro = { modelo: "Civic", ano: 2022, cor: "Preto" };
listarPropriedades(carro);

// 7. Declare um objeto aninhado (objeto dentro de objeto) e exiba um valor profundo.
const estudante = {
  nome: "Lucas",
  curso: "Ciência da Computação",
  contato: {
    email: "lucas.dev@email.com",
    telefone: "21987654321"
  }
};
console.log(estudante.contato.email);

// 8. Crie um array e mostre que o índice é o nome e o valor é o conteúdo.
const planetas = ["Mercúrio", "Vênus", "Terra"];
console.log(`No índice [0] (nome), o valor é "${planetas[0]}"`);
console.log(`No índice [1] (nome), o valor é "${planetas[1]}"`);

// 9. Crie uma variável com escopo global e outra local dentro de função e mostre seus valores.
let variavelGlobal = "Estou no escopo global";

function mostrarEscopos() {
  let variavelLocal = "Estou no escopo da função";
  console.log(variavelGlobal); // Acessível
  console.log(variavelLocal);   // Acessível
}

mostrarEscopos();
console.log(variavelGlobal);     // Acessível
// console.log(variavelLocal); // Erro: variavelLocal is not defined fora da função

// 10. Modifique o valor de uma propriedade de um objeto e exiba antes e depois.
const configuracao = {
  tema: "claro",
  notificacoes: true
};
console.log("Antes da modificação:", configuracao.tema);
configuracao.tema = "escuro";
console.log("Depois da modificação:", configuracao.tema);
