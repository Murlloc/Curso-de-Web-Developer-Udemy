
console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function log_this(){
    console.log("Tá dentro de uma função")
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

log_this()
//DENTRO DE UMA FUNÇÃO O THIS APONTA PARA O GLOBAL CARALHO 