const http = require('http')

const get_turma = (letra, callback)=>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', ()=>{
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
get_turma('A', alunos =>{
    nomes=nomes.concat(alunos.map(a => `A: ${a.nome}`))
    get_turma('B', alunos =>{
        nomes=nomes.concat(alunos.map(a => `B: ${a.nome}`))
        get_turma('C', alunos =>{
            nomes = nomes.concat(alunos.map(a =>`C: ${a.nome}` ))
            console.log(nomes)
        })
    })
})
