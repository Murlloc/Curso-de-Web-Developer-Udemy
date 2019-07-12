const manufactures = ["A","B","C"]

function print(name, index){
    console.log(`${index + 1}.-> ${name}`)
}
manufactures.forEach(print)

console.log('\n*********************************************************\n')

const notas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,5]

//sem callback

let notasBaixas = []

for(let i in notas){
    if (notas[i]<6){
        notasBaixas.push(notas[i])
    }
}
console.log(`Se fudeu -> ${notasBaixas}`)

// com callback

notasBaixas = notas.filter(nota => nota<6)

console.log(`Se fudeu -> ${notasBaixas}`)