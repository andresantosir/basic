let valor   // não inicializada
console.log(valor)

valor = null  // ausência de valor, porém foi inicializada e não aponta pra nenhum endereço
console.log(valor)
// console.log(valor.toString())  // Erro! A função não pode apontar para um valor nulo

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined  // evite atribuir undefined
console.log(!!(produto.preco))
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!(produto.preco))
console.log(produto)