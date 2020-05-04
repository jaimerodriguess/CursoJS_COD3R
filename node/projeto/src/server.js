const express = require('express')
const port = 3003
const app = express()
const bancoDeDados = require('./bancoDeDados')
app.use(express.json())


app.get('/products', (request, response, next) => {
    response.send(bancoDeDados.getProducts())
})

app.get('/product/:id', (request, response, next) => {
    response.send(bancoDeDados.getProduct(request.params.id))
})

app.post('/product/create', (request, response, next) => {
    const product = bancoDeDados.saveProduct({
        name: request.body.name,
        preco: request.body.preco
    })
    response.send(product)
})
app.put('/product/edit/:id', (request, response, next) => {
    const product = bancoDeDados.saveProduct({
        id: request.params.id,
        name: request.body.name,
        preco: request.body.preco
    })
    response.send(product)
})

app.delete('product/delete/:id', (request, response, next) => {
    const product = bancoDeDados.delProduct(request.params.id)
    response.send(product)
})
app.listen(port, () => {
    console.log('Servidor em execução.')
})