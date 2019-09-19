const notas = [6.6, 6.8, 7.5, 8.9]

for (let i in notas){
    console.log(i, notas[i])
}

const pessoa ={
    nome: "Jaime",
    sobrenome: "Rodrigues de Souza",
    idade: 40,
    peso: 86
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

console.log(atributo)