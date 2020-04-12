const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lapís", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// Minha solução
let tipo = []
carrinho.forEach(function(nome, indice) {
     tipo.unshift(JSON.parse(nome))
})

let preco = []
tipo.forEach(e => {
    preco.unshift(e.preco)
})

console.log(preco)

//Solução do Leo

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)