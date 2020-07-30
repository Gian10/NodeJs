const fs = require('fs')
// objeto
const produto = {
    nome : "Gian",
    idade : 20,
    sexo : 'M'
}

// criar arquivo
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto),erro =>{
    console.log(erro || "Arquivo Salvo")
})