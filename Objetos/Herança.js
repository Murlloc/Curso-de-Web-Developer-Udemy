const pai = {
    nome: 'João',
    corCabelo: 'Preto',

}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai,{
    nome: {value: 'Bianca', writable: false}
})
 
console.log(filha2.nome)
 
for (let key in filha2){
    filha2.hasOwnProperty(key) ? 
        console.log(key): console.log('por herança')
}