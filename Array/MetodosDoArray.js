const array = ['A','B','C','D']
array.pop() //remove o ultimo elemento
array.push('E') //coloca um elemento no fim, conceito de pilha
array.shift() // remove o primeiro da lista
array.unshift('F') //coloca no começo da lista
//pilha -> pop e push
//fila -> shift e push
// resultado esperado F,B,C,E
console.log('\npop,push,shift,unshift -> ' + array + '\n')

array.splice(3,1,'G') //A partir do terceiro elemento elimina um elemento e add o elemento G
console.log('splice -> ' + array + '\n')

const array2 = array.slice(2,3)// guarda um novo array com os elementos apartir do indice 2 ate o indice 3
console.log('Slice -> ' + array2)

