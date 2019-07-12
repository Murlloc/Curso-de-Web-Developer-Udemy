const fs = require('fs')

const product = {
    name: 'Alguma coisa',
    preco: 12.22,
    descricao: 'Alguma coisa que faz algo'
}

fs.writeFile(__dirname + '/ArquivoGerado.json', JSON.stringify(product), erro => {
    console.log(erro || 'Arquivo salvo com sucesso!')
})