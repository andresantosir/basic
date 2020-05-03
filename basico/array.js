const valores = [7.7, 8.9, 6.3, 9.2]     // array em js é heterogênea e de tipagem fraca
console.log(valores[0], valores[3])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')  // .puush acrescenta variáveis no seu array
console.log(valores)

console.log(valores.pop())
delete valores[0]          // retira um atributo de dentro de um objeto
console.log(valores)

console.log(typeof valores)  // vai retornar object pois um array em js é object