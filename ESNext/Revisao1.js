//Template String
const product = 'iPad'
console.log(`${product} it's expensive!!`)

//Destructuring
const [l,e,...tters] = "Coisa"
console.log(l,e, tters)

//Arrow Function
const sum = (a,b) => a + b
console.log(sum(1,1))

//Arrow Function This
const lexico1 = () => console.log(this === exports)
lexico1()

//Operador rest
function total(... numbers){
    let total = 0
    numbers.forEach(n => total+=n)
    return total
}
console.log(total(2,3,4,5,6))
