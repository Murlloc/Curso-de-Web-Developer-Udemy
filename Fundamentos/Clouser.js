function multiplier (factor){
    return function (number){
        return factor * number
    }
}

// with arrow
function multiplier2 (factor){
    return (number) =>{
       return number * factor
    }
}
const triple = multiplier(3)
const double = multiplier2(2)
console.log(triple(6), double(4))