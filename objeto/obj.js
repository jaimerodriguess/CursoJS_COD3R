const carro ={
    modelo: 'Gol',
    valor: 19000,
    proprietario:{
        nome:'Jaime',
        idade: 40,
        Endereco:{
            logradouro:'Rua Comendador Otto Carlos Golanda',
            numero:123
            
        }
    },
    condutores:[{
        nome: 'Jaime',
        idade: 40
    }, {
        nome: 'Maria',
        idade: 26
    }]
}
console.log(carro.proprietario.Endereco);
carro.proprietario.Endereco.numero = 400;
console.log(carro);