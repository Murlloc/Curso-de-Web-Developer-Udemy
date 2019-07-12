class Player {
    constructor(name){
        this.name = name
    }

    show(){
        console.log(`this player name is ${this.name}`)
    }
}

const p1 = new Player('Ana')
p1.show()

const player = (name)=>{
    return {
        show: () => {
            console.log(`this player name is ${name}`)
        }
    }
}

const p2 = player('João')
p2.show()

