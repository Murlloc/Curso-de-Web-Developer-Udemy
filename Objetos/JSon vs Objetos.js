const obj = {
    a: soma(1,1,1), b: 2, c: 3
}
function soma(a = 0, b =0, c =0){
    return a + b + c
}


console.log(JSON.stringify(obj))

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))