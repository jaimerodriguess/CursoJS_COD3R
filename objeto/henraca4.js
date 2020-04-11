function MeuObjeto(){
}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)

console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome}`)
}

obj1.falar();
obj2.falar();

const obj3 = {}

obj3.__proto__ = MeuObjeto.prototype

obj3.nome = 'Jaime'

obj3.falar()

const Humano = {
    olhos: '',
    cabelo: '',
    maos: '',
    viver: function (){
        console.log('Eu vivo!')
    }    
}

const homem = Object.create(Humano, {
    testiculos: {
        value: 53,
        writable: true,
        enumerable: true
    },
    trabalho: {
        value: 'Tosador',
        writable: true,
        enumerable: true
    },
    correr: function (){
        console.log('Eu corro!')
    }
})


const mulher = Object.create(Humano, {
    ovario: {
        value: 45,
        writable: true,
        enumerable: true
    }
}) 

const cliente = Object.create(homem, {
    codigo: {
        value: 45,
        writable: true,
        enumerable: true
    }
})

for(let key in cliente){
    console.log(key)
}

cliente.viver()
cliente.correr()