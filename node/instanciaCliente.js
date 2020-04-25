const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.incr()
contadorA.incr()
contadorB.incr()

contadorC.incr()
contadorC.incr()


console.log(contadorA.valor, contadorB.valor)
console.log(contadorC.valor, contadorD.valor)