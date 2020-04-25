const alunos = [
    { nome: 'Jaime', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true  },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Lucas', nota: 8.7, bolsista: true  },
]

const resultado = alunos.map(n => n.nota).sort().filter(n => n > 8).reduce( function( acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})
console.log(resultado)