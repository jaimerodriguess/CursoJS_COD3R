const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// Mulher chinesa com menor salário

axios.get(url).then(response => {
    const funcionarios = response.data

    //console.log(funcionarios)
    const selectPais = n => n.pais == 'China'
    const selectGenero = g => g.genero == 'F'
    const menorSalario = (funcionario, funcionarioAtual) => {
        return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
    }
       
    const nome = funcionarios.filter(selectPais).filter(selectGenero).reduce(menorSalario)

    console.log(nome)  

})

