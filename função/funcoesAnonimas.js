const soma = function (x, y){
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(2, 6)

const pessoa = {
    falar: function(){
        console.log("Falei!")
    },
    correr: function(){
        console.log("Correr!")
    }
}
pessoa.falar()
pessoa.correr()