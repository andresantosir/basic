{
	{
		{
			{
				 var sera = 'Será???'   // VARIÁVEL DENTRO DE UM ESCOPO FORA DE UMA FUNÇÃO SERÁ EXIBIDA FORA DELA
				 console.log(sera)
			}
		}
	}
}

console.log(sera)

function teste(){
	var local = 123
	console.log(local)
}

teste()
// console.log(local)   // A VARIÁVEL DENTRO DE UMA FUNÇÃO NÃO SERÁ EXIBIDA FORA DELA