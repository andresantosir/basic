const resp1 = function montsimp (c, i, t){
	return c+(c*i*t)
}
const resp2 = function montcomp (c, i, t){
	let res = c*((1+i)**t)
	return res.toFixed(4)
}

console.log(`O montante da aplicação financeira sob o regimento de juros simples é R$ ${resp1(1000, 0.15, 3)}.`)
console.log(`O montante da aplicação financeira sob o regimento de juros composto é R$ ${resp2(1000, 0.15, 3)}.`)
