const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


const funcionario = funci => funci.pais === "China"
const funcionario2 = funci => funci.genero === "F"

const menorSalario = ((acumulador, valorAtual)=>{

    return acumulador.salario < valorAtual.salario ? acumulador : valorAtual
})



axios.get(url).then((response)=>{
    const funcionarios = response.data
    console.log(funcionarios.filter(funcionario).filter(funcionario2).reduce(menorSalario))
})