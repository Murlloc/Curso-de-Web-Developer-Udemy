function player (name){
    this.name = name
    this.show = () => console.log(`the name of the player is ${name}`)    
}

const p1 = new player('Ana')
p1.show()