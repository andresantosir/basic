const escola = "cod3r"  // os índices começam a partir do 0, logo, índice 4 = r

console.log(escola.charAt(4)) // essa função pega o caractere que está na posição do índice passado como parâmetro
console.log(escola.charCodeAt(3)) // essa função pega o valor na tabela ASCII do caractere do índice 3, que é 51
console.log(escola.indexOf('o'))  // essa função retorna o valor do índice da letra passada como parâmetro (A LETRA PASSADA COMO PARÂMETRO PRECISA EXISTIR NA VARIÁVEL)
console.log(escola.substring(2))  // essa função imprime a string a partir do índice que eu passo como parâmetro
console.log(escola.substring(0, 3)) // essa função imprime os índices 0, 1 e 2
console.log('Escola ' .concat(escola).concat("!")) // função para concatenar strings, .concat pode ser substituído por somente o sinal de +, dessa forma não seria necessária a utilização de parênteses
console.log(escola.replace(3, 'e')) // substitui o caractere do índice 3 por 'e'
console.log('Ana,Maria,Pedro'.split(',')) // gerou um array com 3 elementos independentes