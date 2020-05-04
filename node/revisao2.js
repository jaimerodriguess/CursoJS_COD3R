const nome = 'Jaime'
const pessoa = {
    nome,
    falar() {
        return'Estou falando!'
    }
}
console.log(pessoa.nome, pessoa.falar())

class Animal{
    comer(){
        return 'Estou comendo!'
    }
}
class Cachorro extends Animal {
    falar(){
        return 'Au Au'
    }
}
console.log(new Cachorro().comer())

// Operador REST/SPREAD ...

function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(5,10,15))

const funcionario = { nome: 'Maria', salario: 2000 }
const clone = { ativo: true, ...funcionario}
console.log(clone)

//SPREAD Array

const grupoA = ['Jaime', 'Maria', 'Lucas']
const grupoB = ['Leandro', 'Patricia', 'Giulia']
const grupoFinal = ['Jorge', ...grupoA, 'Terezinha', ...totalgrupoB]
console.log(grupoFinal)

