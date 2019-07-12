const alunos = [
    {nome:'Felipe',nota:4.43,bolsista:true},
    {nome:'Kamilla',nota:8.56,bolsista:false},
    {nome:'Carinha',nota:6.65,bolsista:false}
]

const resultado = alunos.map(a=>a.nota).reduce(function(acumulador,atual){
    return acumulador + atual
})
console.log('\n media da turma: ' + (resultado/3).toFixed(2))