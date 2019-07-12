module.exports = function(...names){
    return names.map(hi)
}

function hi(something){
    return something = `Oi ${something}`
}