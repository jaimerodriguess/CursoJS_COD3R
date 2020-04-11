const obj = {a: 1, b: 2, c: 3, soma(){return a+b+c}}

const obj1 = {
    veiculo: {
        marca: 'VW',
        modelo: 'Gol',
        proprietario: {
            nome: 'Jaime',
            idade: 40,
            cnh: {
                registro: 123456789,
                categoria: 'AB',
            }
        }
    },
    motocilceta: {
        marca: 'Honda'
    }
}


//console.log(JSON.stringify(obj))

const tipoJSON = JSON.stringify(obj1)

console.log(tipoJSON)

const tipoOBJ = JSON.parse(tipoJSON)

console.log(tipoOBJ)