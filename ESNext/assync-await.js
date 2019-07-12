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

let obterAlunos = async () => {
    const turma_a = await get_turma('A')
    const turma_b = await get_turma('B')
    const turma_c = await get_turma('C')
    return [].concat(turma_a,turma_b, turma_c)
}

obterAlunos().then(alunos => alunos.map (a => a.nome)).then(nomes => console.log(nomes))