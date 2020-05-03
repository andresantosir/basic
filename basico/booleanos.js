let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1   // 1 = verdadeiro ; 2 = falso
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)      // todos os inteiros são verdadeiros, com exceção do 0
console.log(!!-1)	  
console.log(!!' ')	  // arrays e espaços são verdadeiros
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = 33))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')    // uma sring VAZIA é falso
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = 0))

console.log('pra finalizar...')
console.log(('' || null || 0 || 'epa')) // ELE VAI RETORNAR O PRIMEIRO VALOR VERDADEIRO QUE ELE ENCONTRA NESSA EXPRESSÃO LÓGICA

let nome = ''

console.log(nome || 'Desconhecido')   // caso o usuário não entre com o nome, o programa irá retornar o primeiro valor verdadeiro que ele achar