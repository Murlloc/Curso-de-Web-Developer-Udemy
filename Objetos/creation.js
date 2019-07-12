//notação literal

const obj1 = {

}
console.log(obj1)

//função contrutora

function coisa (nome){//this é publico
    this.getNome=()=>{
        return nome
    }
}
const coisa1 = new coisa('coisa')
console.log(coisa1.getNome())

//função factory

const funcionario = (name,miss,salary) => {
    return {
        name,
        miss,
        salary,
        getSalary() {
            return salary/30 * (30-miss)
        }
    }
}
const func1 = funcionario('leopoldino', 5, 3432.32)
console.log(func1.getSalary())

//jason

const fromJson = JSON.parse('{"info": "Sou um Json"}')
console.log(fromJson.info)