const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!' 
const template = `          
	Olá
	${nome}!`
console.log(concatenacao, template)

// expressões...
console.log(`1 + 1 = ${1 + 1}`)  // só vai somar o que está dentro das chaves

const up = texto => texto.toUpperCase()  // toUpperCase = letras maiúsculas
console.log(`Ei... ${up('cuidado')}`)  // ele vai levar a palavra cuidado para a função up e torná-la maiúscula, ou seja, é possível chamar uma função dentro de uma template string