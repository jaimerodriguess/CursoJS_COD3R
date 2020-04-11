const pai = { nome: 'Pedro', corCabelo: 'preto', rg: '29.501.606' }

const filha1 = Object.create(pai, {
    trabalho:{
    value: 'Balconista',
    writable: true,
    enumerable: true
    }
})

filha1.nome = 'Ana'

//console.log(filha1.corCabelo)

const filha2 = Object.create(filha1, {
    nome: {
        value: 'Bia',
        writable: false,
        enumerable: true
    },
    idade: {
        value: 15,
        enumerable: true,
        writable: true
    }
})

/*console.log(filha2.nome)

filha2.nome = 'Carla'
console.log(`${ filha2.nome} tem cabelo ${ filha2.corCabelo}`)

console.log(Object.keys(filha1))*/
//console.log(Object.keys(filha2))

//hasOwnProperty retorna se o atributo pertence ao obj.

for(let key in filha2){
    filha2.hasOwnProperty(key) ? 
    console.log(`Pertence: ${key}`) : console.log(`Por herança: ${key}`)        
}