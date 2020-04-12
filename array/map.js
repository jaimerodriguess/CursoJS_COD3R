// Map cria um novo array com base num array passado

const nums = [1, 2, 3, 4, 5]

let numeros = nums.map(function(e){
    return e * 2
})

console.log(numeros)

let soma10 = e => e + 10
let triplo = e => e * 3
let dinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

console.log(nums.map(soma10).map(triplo).map(dinheiro))