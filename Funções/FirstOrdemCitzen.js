//First Ordem Citzen -> paradgma para funcional 

//literal form

function funcao1(){

}

//variable storage

const funcao2 = function (){

}

//array storage

const array = [function(a,b){
    return a + b
}, function(a,b){
    return a - b
}]
for (let i=0; i<array.length;i++){
    console.log(array[i](4,3))
}

//object storage

const obj = {
    falar = () => 'oi'
}

console.log(obj.falar)

//Função como parametro

function run(funcao1){
    funcao1()
}

