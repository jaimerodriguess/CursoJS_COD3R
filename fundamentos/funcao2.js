//Armazenando uma função em variável

const imprimirSoma = function(a, b){
	console.log(a + b)
}

imprimirSoma(3, 5)

// Armazenar função arrow em uma variável

const soma = (a, b) => {
	return a + b
}
console.log(soma(5, 9))

// retorno implicito arrow function

const subtracao = (a, b) => a - b

console.log(subtracao(6, 3))

