const http = require('http')
const { callbackify } = require('util')
const e = require('express')

const getTurma = (letra, callback) =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject)=>{
        http.get(url, response =>{
            let resultados = ''

            response.on('data', dados =>{
                resultados += dados
            })

            response.on('end', ()=>{
            try{
                resolve(JSON.parse(resultados))
            }catch(e){
                reject(e)
            }
        })
        })
    })
}

//executa todos os promises para entrar no then
//Promise.all([getTurma('A'), getTurma('B')])
    //.then(turmas => [].concat(...turmas)) // concatenei ao array
    //.then(alunos => alunos.map(alunos => alunos.nome))
    //.then(nomes => console.log(nomes))
    //.catch(e => console.log(e.message))


    


    const obterAlunos = async()=>{
        const ta = await getTurma('A')
        const tb = await getTurma('B')
        return [].concat(ta,tb)
    }// retorna um async function

    obterAlunos()
    .then(alunos => alunos.map( a=> a.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))
    


















