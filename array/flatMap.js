const escola = [{ nome: 'turma M1',
                    alunos: [
                                { nome: 'Jaime', nota: 6.8 },
                                { nome: 'Maria', nota: 5.5 },
                                { nome: 'Paula', nota: 7.8 },
                            ]
                },
                { nome: 'turma M2',
                    alunos: [
                                { nome: 'Patricia', nota: 9.2 },
                                { nome: 'Leandro', nota: 4.5 },
                            ]
                }]
const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)
const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)