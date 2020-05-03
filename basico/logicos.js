function compras(trab1, trab2) {
	const comprarSorvete = trab1 || trab2
	const comprarTV50 = trab1 && trab2
	// const comprarTV32 = !!(trab1 ^ trab2) // bitwise xor (ou exclusivo)
	const comprarTV32 = trab1 != trab2
	const naoComprarSorvete = !comprarSorvete // operador unário

	return { comprarSorvete, comprarTV50, comprarTV32, naoComprarSorvete }
}

console.log(compras(true, true))		// tv 50 + sorvete
console.log(compras(true, false))		// tv 32 + sorvete
console.log(compras(false, false))		// sem tv e sem sorvete