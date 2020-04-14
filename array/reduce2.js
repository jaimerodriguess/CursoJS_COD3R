const alunos = [
    { nome: 'Jaime', nota: 7.3, bolsista: true },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Lucas', nota: 8.7, bolsista: true }
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista

console.log("Todos os alunos são bolsistas? ",alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista

console.log("Algum aluno é bolsista?", alunos.map(a => a.bolsista).reduce(algumBolsista))

//console.log("Todos os alunos são bolsistas: ", resultado)