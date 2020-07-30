// instaciando o objeto exportado
const moduleA = require('./modulo-a')

console.log(moduleA.BoaNoite)
console.log(moduleA)

// module global
require('../Training-NodeJs/modulo-a')
console.log(global.MyTest.funcQuakquer())


// chamando minha função de lista de nomes
const sauda = require('../Training-NodeJs/modulo-a')('gian', 'karlos', 'sousa')
console.log(sauda)

