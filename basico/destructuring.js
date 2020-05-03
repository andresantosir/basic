const pessoa = {
	nome: 'Ana',
	idade: 5,
	endereco: {
		logradouro: 'Rua ABC',
		numero: 1000
	}
}

const { nome, idade } = pessoa  // const { nome: n, idade: i } = pessoa  <- outra forma de atribuir os valores à novas variáveis
console.log(nome, idade)

const {endereco: {logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)