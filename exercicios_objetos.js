/*
===========================================================
Exercícios Práticos - Objetos
===========================================================
*/

// 1. Crie um objeto com 3 propriedades diferentes e exiba-o.
const livro = {
  titulo: "O Hobbit",
  autor: "J.R.R. Tolkien",
  ano: 1937
};
console.log(livro);

// 2. Acesse e exiba uma propriedade usando notação de ponto e colchetes.
console.log(livro.titulo); // Notação de ponto
console.log(livro["autor"]); // Notação de colchetes

// 3. Adicione uma nova propriedade ao objeto depois de criado.
livro.genero = "Fantasia";
console.log(livro);

// 4. Remova uma propriedade do objeto.
delete livro.ano;
console.log(livro);

// 5. Adicione um método que retorne uma string usando propriedades do objeto.
const carro = {
  marca: "Fiat",
  modelo: "Uno",
  descrever: function() {
    return `Este é um ${this.marca} ${this.modelo}.`;
  }
};
console.log(carro.descrever());

// 6. Crie um objeto aninhado (objeto dentro de objeto) e exiba um valor interno.
const empresa = {
  nome: "Tech Solutions",
  fundacao: 2010,
  endereco: {
    rua: "Rua Principal",
    numero: 123,
    cidade: "Porto Alegre"
  }
};
console.log(empresa.endereco.cidade);

// 7. Itere sobre as propriedades do objeto e exiba cada par nome/valor.
const filme = {
  nome: "Matrix",
  diretor: "Wachowskis",
  lancamento: 1999
};
for (const chave in filme) {
  console.log(`${chave}: ${filme[chave]}`);
}

// 8. Clone um objeto usando spread e altere uma propriedade no clone.
const original = { a: 1, b: 2 };
const clone = { ...original };
clone.b = 3;
console.log("Original:", original);
console.log("Clone:", clone);

// 9. Compare dois objetos com mesmo conteúdo e explique o resultado da comparação.
const obj1 = { nome: "Joao" };
const obj2 = { nome: "Joao" };
console.log(obj1 === obj2); // false
console.log("O resultado é 'false' porque objetos são comparados pela referência na memória, não pelo seu conteúdo. obj1 e obj2 são duas instâncias diferentes, ocupando lugares distintos na memória.");

// 10. Congele um objeto com Object.freeze e tente alterar uma propriedade.
const configuracao = {
  versao: "1.0",
  ativo: true
};
Object.freeze(configuracao);
configuracao.ativo = false; // Esta alteração falhará silenciosamente.
console.log(configuracao);
