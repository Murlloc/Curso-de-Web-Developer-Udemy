const passo1 = (contexto, next) => {
    contexto.valor1 = 'midddleware 1'
    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'midddleware 2'
    next()
}

const passo3 = (contexto) => {
    contexto.valor3 = 'midddleware 3'
}

const execucao = (contexto, ...midddlewares) => { //array de funções
    const execucao_passo = (indice) => {//executa a função no indice X no array de funções
        midddlewares && indice < midddlewares.length && midddlewares[indice](contexto, () =>{ //se middlewares for true ou seja se existir as funções no array e o indice escolhido estiver dentro do array e executa
            execucao_passo(indice + 1) //execução: chama o passo (middleware) de indice que eu passei no fim da função que é o 0 ( começa do começo do array pegando a primeira função que eu quero que ocorra)
        })                             //depois de executar a função que eu quero, acontece uma recurcividade e eu passo para a proxima função da lista do array
    }
    execucao_passo(0)
}
const contexto = {}
execucao(contexto, passo1, passo2)
console.log(contexto)