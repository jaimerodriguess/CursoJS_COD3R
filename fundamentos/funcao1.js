function imprimirSoma(a, b){
	console.log(a + b)
}

imprimirSoma(2, 3)

//caso tenha apenas um parametro, js define o outro como undefined
//caso tenha mais parametros que os declarados, ele utiliza a quantidade igual a declara e ignora o restante.

function soma(a, b = 8){
	return a + b
}

console.log(soma(3))
