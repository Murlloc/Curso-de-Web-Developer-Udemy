const escola=[{

    nome: 'tuma1',
    alunos: [{
        nome: 'A',
        nota1:1,
        nota2:2
    },{
        nome:'B',
        nota1:2,
        nota2:3
    }]
},{
    nome:'Turma2',
    alunos:[{
        nome:'C',
        nota1: 3,
        nota2:10
    }]
}]
const getMediaDoAluno = a => (a.nota1 + a.nota2)/2
const getNotasdaTurma = turma => turma.alunos.map(getMediaDoAluno)

const notas1 = escola.map(getNotasdaTurma)
console.log(notas1)
