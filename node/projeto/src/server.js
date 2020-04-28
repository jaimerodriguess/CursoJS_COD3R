const express = require('express')
const port = 3003
const app = express()
const bancoDeDados = require('./bancoDeDados')

//app.use(express.json)

app.get('/products', (request, response, next) => {
    response.send(bancoDeDados.getProducts())
})

app.get('/product/:id', (request, response, next) => {
    response.send(bancoDeDados.getProduct(request.params.id))
})

app.post('/products', (request, response, next) => {
    const product = bancoDeDados.saveProduct({
        name: request.params.name,
        preco: request.body.preco
    })
    response.send(product)
})
app.listen(port)