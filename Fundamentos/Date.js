var dt = new Date()

var dd = dt.getDate()
var mm = dt.getMonth()
var yyyy = dt.getFullYear()
 
exports.data = {
    day : dt.getDate() + 1,
    month: dt.getMonth() + 1,
    year : dt.getFullYear() 
}

//dateJSON = JSON.stringify(data)
//exports.dateJSON = dateJSON