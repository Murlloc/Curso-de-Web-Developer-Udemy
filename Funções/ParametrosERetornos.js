function area(length,height){
    const area = length*height
    if(area>20){
        console.log(`this area is to large: ${area} [m²]` )
    }else {
        return area
    }
}
area(10,3)
console.log('*******************************************************\n\n')

//parametro padrão

function sum(a=1,b=1,c=1){ //se vc não passar nada ele pega um padrão 
    return a + b + c
}

console.log(sum(1,2))
