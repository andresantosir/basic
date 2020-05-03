function bhaskara(a, b, c){
	let raizes = []
	let delta = (b*b)-(4*a*c)
	if (delta < 0) {
		return "Delta é negativo."
	}
	let x1 = (-b + (delta**0.5))/2*a
	let x2 = (-b - (delta**0.5))/2*a
	raizes.push(x1)
	raizes.push(x2)
		return raizes
}

console.log(bhaskara(3, -5, 12))
console.log(bhaskara(1, 4, 3))