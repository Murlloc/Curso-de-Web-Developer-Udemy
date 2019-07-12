function minimum(array){
    aux = Infinity
    for(let i = 0; i < array.length; i++){
        if (aux > array[i]){
            aux = array[i]
        }
    }
    return aux
}

console.log(minimum([1,2,3,4,5,6]))