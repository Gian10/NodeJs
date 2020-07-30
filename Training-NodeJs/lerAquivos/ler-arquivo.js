const fs = require("fs")

const caminho = __dirname + '/arquivo.json'
                                            //encoid
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assicrono
fs.readFile(caminho, 'utf-8', (erro, conteudo)=>{
    // converte para objeto json
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host} : ${config.db.port}`)
})

const config = require('../lerAquivos/arquivo.json')
console.log(config.db)

// ler pasta

fs.readdir(__dirname, (erro, arquivo)=>{
    console.log("conteudo da pasta")
    console.log(arquivo)
})