class Lancamento {
    constructor (nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 45000)
const contaDeLuz = new Lancamento('CPFL', -220)
const contaAgua = new Lancamento('Sabesp', -150)

const contas = new CicloFinanceiro(4, 2020)
contas.addLancamentos(salario, contaDeLuz, contaAgua)

console.log(contas.sumario())