function printError(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch(e){
        console.log("Deu erro irmão !")
    }
}

const obj = {
    name: 'Name of the guy'
}

printError(1)