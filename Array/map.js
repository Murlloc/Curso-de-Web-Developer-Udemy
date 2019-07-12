const array = [1,2,3,4,5,6]

let resultado = array.map(function(e){
    return e*2
})
console.log(resultado)

let soma10 = (e) => e + 10
const triple = (e) => e * 3
const paraDinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = array.map(soma10).map(triple).map(paraDinheiro)
//cada vez ele foi transformado.
console.log(resultado)