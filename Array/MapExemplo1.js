Array.prototype.map2 = function(callback){
    const array=[]
    for (let index = 0; index < this.length; index++) {
        array.push(callback(this[index],this.index,this))
        
    }
    return array
}

const carrinho = [
    '{ "nome": "Boarracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "kit de lapis", "preco": 41.22}',
    '{ "nome": "caneta", "preco": 7.50}'
]
const JSONparse = (e) => JSON.parse(e)
const getPreco = (produto) => produto.preco

const resultado = carrinho.map2(JSONparse).map2(getPreco)

console.log(resultado)