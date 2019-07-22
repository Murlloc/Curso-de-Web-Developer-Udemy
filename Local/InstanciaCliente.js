const contadorA = require('./InstanciaUnica')
const contadorB = require('./InstanciaUnica')

const contadorC = require('./InstanciaNova')()
const contadorD = require('./InstanciaNova')()

contadorA.increment()
console.log(contadorB.valor)
// quando eu mecho no A tmbm mecho no B pq essa merda ta no cache

contadorC.increment()
console.log(contadorD.valor)
// aqui não meche pq ele ta sendo passado com uma função factory

//ou seja quando for exportar uma instancia cria na factory PORRA