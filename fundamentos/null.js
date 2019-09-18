//Aula de undefined

let valor
valor = null //ausência de valor, não aponta para endereço de memória.

//console.log(valor.toString())//não se pode acessar propriedades de nulo

const produto = {}

console.log(produto.preco)//imprime undefined
//evitar definir variaveis com undefined
delete produto.preco
console.log(!!produto.preco)
