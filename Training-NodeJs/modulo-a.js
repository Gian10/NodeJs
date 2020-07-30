// exportando objeto 
module.exports = {
    bomdia: "bom dia",
    BoaNoite(){
        return 'boa noite'
    }
}

// criando objeto global e usando Object.freeze para congelar a func ou objeto
global.MyTest = Object.freeze( {
    funcQuakquer(){
        return 'Gian'
    }
})

// ...nomes = pode passar quantos nomes quiser na lista
module.exports = function(...nomes){
    return nomes.map(nome => `Boa ${nomes}`)
}