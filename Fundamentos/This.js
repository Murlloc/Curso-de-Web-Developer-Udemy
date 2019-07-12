const people = {
    name : 'João',
    falar(){
        console.log(this.name) //se tirar o this, não funciona, pois ele não sabe oque é name
    }
}

people.falar()
const falar = people.falar
falar() // como a função está com this, ela so funciona se for "RODAR" dentro do objeto
        //conflito entre programação funcional e orientação a objetos

const falarDePeople = people.falar.bind(people)
falarDePeople()

console.log('*****************************************************\n\n')

function guy(){
    this.age = 0
    const self = this
    setInterval(function(){
        self.age++
        console.log(`Idade aumentando 1 a 1 ${/* this */self.age}`)
    }/* .bind(this) */, 1000)
}

new guy