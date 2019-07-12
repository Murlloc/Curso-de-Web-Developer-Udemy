const fs = require('fs')

const caminho = __dirname + '/Arquivo.json'

//sincrona
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrona
fs.readFile(caminho, 'utf-8',(error, conteudo) =>{
    const config = JSON.parse(conteudo)

    console.log(config.database.usuario)
} )

const config = require('./Arquivo.json')
console.log(config)

fs.readdir(__dirname,(error,arquivos)=>{
    console.log("Conteudo da pasta")
    console.log(arquivos)
})