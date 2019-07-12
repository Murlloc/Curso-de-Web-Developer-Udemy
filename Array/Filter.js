const array = [
    {nome: 'Carinha', nota: 3.45},
    {nome: 'Kamilla', nota: 9.54},
    {nome: 'Felipe', nota: 7.65},
]   
const passou =array.filter(function(alunos){
     return alunos.nota > 6.00 && alunos.nome === 'Felipe'
})

console.log(passou)


