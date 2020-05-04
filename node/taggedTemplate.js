// Tagged Template

function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Jaime'
const situacao = 'Aprovado'
console.log(tag `${aluno} está $${situacao}`)