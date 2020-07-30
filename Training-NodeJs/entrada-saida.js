// entrada e saida de dados utilizando process

process.stdout.write("Nome : ")
process.stdin.on('data', data =>{
    const nome = data.toString().replace('\n', '')

    process.stdout.write(`Fala ${nome}`)
    process.exit()
})