function buy(work1, work2){
    const buyTV50 = work1 && work2
    const buyTV32 = work1 != work2
    const buyIceCream = work1 || work2
    return {
        buyIceCream : buyIceCream,          //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
        buyTV50 : buyTV50,                  //That can be write like -> return { buyIceCream, buyTV50, buyTV32}
        buyTV32 : buyTV32                   //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    }
}

// Function Test

console.log(buy(true, true))
console.log(buy(true,false))
console.log(buy(false,true))
console.log(buy(false,false))