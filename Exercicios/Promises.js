const http = require('http')

const get_turma = (letra)=>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', ()=>{
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }
            })
        })
    })
}

let nomes = []
get_turma('A').then(alunos =>{
    nomes=nomes.concat(alunos.map(a => `A: ${a.nome}`))
    get_turma('B').then(alunos =>{
        nomes=nomes.concat(alunos.map(a => `B: ${a.nome}`))
        get_turma('C').then(alunos =>{
            nomes = nomes.concat(alunos.map(a =>`C: ${a.nome}` ))
            console.log(nomes)
        })
    })
})

Promise.all([get_turma('A'),get_turma('B'),get_turma('C')])
    .then(turmas => [].concat(...turmas))
    .then(x => console.log(x))