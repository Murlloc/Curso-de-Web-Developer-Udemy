const peso1 = 1;
const peso2 = 2;

let nota1 = 6.667
let nota2 = 4.453

notaTotal = (nota1 *peso1)+(nota2*peso2)
console.log(notaTotal)
console.log(typeof notaTotal)
console.log(notaTotal.toFixed(1))
console.log("*********************************************\n Math \n")
const raio = 5.6
const area = Math.PI*Math.pow(raio,2)//potencia
console.log(raio)
console.log(area)
console.log("*********************************************\n Strings \n")
const palavra = "akbsbfflskdnve"

for (i=0; i<=palavra.length; i++){
    console.log(palavra.charAt(i))
    if (palavra.charAt(i)=="f"){
        console.log("ACHEI")
    }
}
let palavra2 = palavra.concat('fc')    
console.log(palavra2)
let palavra3 = palavra2.substring(3,palavra2.legth) // Não da para mudar uma string na mesma variavel
console.log(palavra3)
console.log('oi,meu,nome,é,felipe'.split(','))