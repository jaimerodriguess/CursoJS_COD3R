const notas = [5.5, 6.9, 3.5, 7.1, 7.7]

let notasBaixas = []

for(let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//Mesma função com callback

notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas2)

notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)