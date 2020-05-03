const triang = function fun(x, y, z){
	if(x < y + z && y < x + z && z < y + x){

		if(x === y && x === z) {
			console.log("Triângulo Equilátero.")
		} else if( x === y && x!== z || y === z && y!== x || x === z && x !== y){
			console.log("Triângulo Isósceles.")
		} else {
			console.log("Triângulo Escaleno.")
		} 

	} else {
			console.log("Os valores fornecidos não formam um triângulo.")
	}
}

triang(6, 6, 4)