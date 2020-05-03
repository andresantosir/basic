console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2'  // é a mesma coisa da linha de código acima 
console.log(obj1.nome)

function Obj(nome){
	this.nome = nome  // this cria um atributo público
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)