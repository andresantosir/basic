console.log('a = ', a)   // mesmo eu declarando a variável 'a' após essa linha o programa irá reconhecer a variável, porém sem valor, ou seja, undefined. Na prática é como se o var = a estivesse sido declarada antes dessa linha
var a = 2
console.log('a = ', a)

//console.log('b = ', b)  // NÃO ocorre hoisting com variáveis tipo let
let b = 4
console.log('b = ', b)