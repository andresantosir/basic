function rand([min = 0, max = 1000]) {
	if (min > max) [min, max] = [max, min]
	const valor = Math.random() * (max - min) + min
	return Math.floor(valor)
}

console.log(rand([50, 40]))     // min / max
console.log(rand([992]))		// só passei o valor de min
console.log(rand([, 10]))		// só passei o valor de max
console.log(rand([]))			// min = 0, max = 1000
// console.log(rand())   <- erro pois não existem parâmetros