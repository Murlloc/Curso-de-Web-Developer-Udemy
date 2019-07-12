const alunos = [
    {nome:'Felipe',nota:4.43,bolsista:true},
    {nome:'Kamilla',nota:8.56,bolsista:false},
    {nome:'Carinha',nota:6.65,bolsista:false}
]
const resultado1 = alunos.map(a=>a.bolsista).reduce(function(acumulador,atual){
    return acumulador && atual
})
const resultado2 = alunos.map(a=>a.bolsista).reduce(function(acumulador,atual){
    return acumulador || atual
})
if (resultado1){
    console.log('Sim todos os alunos são bolsistas')
}if(resultado2){
    console.log(`Sim temos aluno(s) bolsista(s)`)
}else{
    console.log('Não, não temos alunos bolsistas')
}