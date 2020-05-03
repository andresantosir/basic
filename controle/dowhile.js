function pegarInteiroAleatorio(min, max){
	const valor = Math.random() * (max - min) + min
	return Math.floor(valor)
}

do {
	opcao = pegarInteiroAleatorio(-1, 10)
	console.log(`O valor sorteado foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a próxima!')