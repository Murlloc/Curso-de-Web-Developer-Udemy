const funcs = []

for(let i=1; i<=4; i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[3]()