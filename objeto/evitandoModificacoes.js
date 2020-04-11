//Object.preventExtensions = Não permite incluir atributos no obj
const produto = Object.preventExtensions({
    nome: 'Leite', preco: 1.99, tag: 'promotion'
})
console.log('Extensivel', Object.isExtensible(produto))
produto.data = 23
produto.nome = 'Carro'
delete produto.preco
console.log(produto)

//Object.seal = Não permite incluir/excluir atributos do objeto

const pessoa = {nome: 'Jaime', idade: 35}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))
pessoa.nome = 'Lucas'
pessoa.cidade = 'Santos'
delete pessoa.idade

console.log(pessoa)