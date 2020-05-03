function teste1(num) {		// sem chave a função só tem 1 linha de código
	if(num > 7)
		console.log(num);		console.log('Final') 
}


//teste1(6)
//teste1(8)

function teste2(num) {
	if(num > 7); {			// vai mostrar 6 e 8 pois o ';'' termina a sentença de código
		console.log(num)
	}
}

teste2(6)
teste2(8)