const player = {
    name : 'Ana',
    class: 'Barbarian',
    age: 24
}

console.log(Object.keys(player)) 
console.log(Object.values(player)) 
console.log(Object.entries(player))

Object.entries(player).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
});

Object.defineProperty(player, 'date',{
    enumerable: false,
    writable: false,
    value: '01/02/2000'
})
console.log('\n',player.date)