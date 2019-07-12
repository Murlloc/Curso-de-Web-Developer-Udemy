const array = ['ana','bia','carlos']
console.log(array)
array.push('kamilla')
for (const key in array) {
    console.log(array[key])
}

array.sort()
console.log(array)

delete array[2]


array.sort()

console.log(array)

array.splice(2,0,'esse', 'negocio', 'coloca','o', 'elemento', 'na', 'posição', 'que vc', 'quer')
console.log('\n' + array)
array.splice(12,1) //elimina um elemento a partir do indici n
console.log(`\n tem ${array.length} elementos`)