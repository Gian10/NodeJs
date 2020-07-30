const fac = require('../Training-NodeJs/facture')()
const noFac = require('../Training-NodeJs/no-facture')

fac.inc()
console.log(fac.valor)

noFac.incNumero()
console.log(noFac.numero)

