const port = 3003

const express = require('express')
const app = express()
const db = require('../src/bancoDados')
const bodyParser = require('body-parser')

// urlencoded função middle e retorna uma função middle que vai vai fazer um parse o body da requisição
// qualquer requisição usando express ele passa pelo esse middle
app.use(bodyParser.urlencoded({extended : true}))

app.get('/produtos', (req, res, next)=>{
    res.send(db.getProdutos())
})


app.get('/produtos/:id', (req, res, next)=>{
    res.send(db.getProduto(req.params.id))
})


app.post('/produtos', (req, res, next)=>{
    const produto = db.salvarProduto({
        nome: req.body.nome,
        preco : req.body.preco
    })
    res.send(produto) // gerar json
})

app.delete('/produtos/:id', (req, res, next)=>{
    const produto = db.excluirProduto(req.params.id)
    res.send(produto) // gerar json
})



app.listen(port, ()=>{
    console.log("servidor executado")
})
