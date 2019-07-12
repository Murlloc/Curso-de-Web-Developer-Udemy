//Destructuring
let funcionario = {
    name : 'João',
    sex : 'Masculino',
    address : {
        street : 'Rua Perimetral 1',
        zipCode : 74730020
    }
}

let {name: n, sex: s, address : {zipCode: zip}} = funcionario
console.log(n,s,zip) 


zip = 1234567
funcionario.address.zipCode = zip
console.log(funcionario)
console.log("*********************************************************\n")

//Destruturing in a function

function rand({min, max}){ //destructuring here, because we don't use the sintax : obj.min, obj.max in the function
    const valor = Math.random() * (max - min) + min
    return Math.ceil(valor)
}

console.log(rand({min : 50, max : 100}))
console.log("*********************************************************\n")
