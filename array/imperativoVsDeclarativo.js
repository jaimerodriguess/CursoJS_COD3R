const alunos = [
    { nome: 'Jaime', nota: 9 },
    { nome: 'Maria', nota: 6 }
]
// Forma imperativa
let totalNotas = 0
for ( let i = 0; i < alunos.length; i++ ) {
    totalNotas += alunos[i].nota
}
console.log(totalNotas / alunos.length)

//Forma declarativa

const getNotas = aluno => alunos.nota
const soma = (total, valor) => total + valor
const totalN = alunos.map(getNotas).reduce(soma)
console.log(totalNotas / alunos.length)
