let today = new Date
let day = today.getDate()
let month = today.getMonth() + 1 //janeiro é zero wtf
let year = today.getFullYear()

console.log(`${day}-${month}-${year}`)