function getInteiroAleatorioEntre(min, max) {
	const valor = Math.random() * (max - min) + min
	return Math.floor(valor)
}

let opcao = 0

while(opcao != -1) { // enquano a expressão for verdadeira ela continua executando as linhas de código dentro do bloco
	opcao = getInteiroAleatorioEntre(-1, 10)
	console.log(`Opção sorteada foi ${opcao}.`)
}	

console.log('Até a próxima!')