const por = 3003

const express = require('express')
const { text } = require('body-parser')
const app = express()

app.get('/produtos', (req, res, next)=>{
    res.send("algo")
})













///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const lista = [{nome : "Gian", idade: 11},{nome : "Karlos", idade: 22},{nome : "Sousa", idade: 33},
{nome : "Araujo", idade: 4}]

const funcMenor = (acumulador, valorAtual)=>{
    if(acumulador.idade < valorAtual.idade){
        return acumulador
    }else{
        return valorAtual
    }
}

const send = (nome) => nome.nome === "Gian"

//console.log(lista.reduce(funcMenor))
//console.log(lista.filter(send))

// set não repeti o valor
const times = new Set()
times.add("Flamengo")
times.add("Vasco")
times.add("Flamengo")

//console.log(times.has("flamengo"))
//console.log(times.has("Flamengo"))
//console.log(times)

// for(let letra of "Flamengo"){
//     console.log(letra)
// }

// const array = ["f","g","h"]
// for(let lista in array){
//     console.log(lista)
// }


// function promisse(segundos, frase){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(frase)
//         }, segundos * 1000)
//     })
// }

// promisse(3,"kkkkkk")
// .then(texto =>  console.log(texto))
// .catch(erro => console.log(erro))