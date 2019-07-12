const array = [1,2,3,4,5,6,7,8,9,10]

Array.prototype.forEach2 = function (callback){
    for (let index = 0; index < this.length; index++) {
       callback(this[index],index,this)
    }
}

array.forEach2(function(number,index){
    console.log(`The index is ${index}: ${number}`)
})