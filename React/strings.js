const escola = "cod3r"

console.log(escola.charAt(4))// me entorna a letra da quarta posição
console.log(escola.charAt(5))//me retorno vazio. JS retorna um percentual

// para colocar string pode usar ""'' ou ´´

console.log(escola.charCodeAt(3)); //retorna o valor da tabela UNICODE
console.log(escola.indexOF('O')); //índice associado a variável escola

console.log(escola.substring(1));
console.log(escola.substring(0, 3));
console.log('Escola'. concat(escola).concat('!'));

// poderia usar console.log('Escola' + escola + '!')

// + no contexto numérico vai somar mas no string vai concatenar

console.log(escola.replace(3,'e'))
console.log(escola.replace())