const array = [1,2,3,4,5,6,7,8,9,10]

array.forEach(function(number,index){
    console.log(`The index is ${index}: ${number}`)
})

array.forEach(number => console.log(number))
