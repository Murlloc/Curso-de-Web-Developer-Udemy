class item {
    constructor(name, description, weigth){
        this.name = name
        this.description = description
        this.weigth = weigth
    }

}

class inventory{
    constructor(){
        this.itens = []
    }
    addItens (...itens){
        itens.forEach(e=>this.itens.push(e))

    }
    inventoryWeigth (){
        let weigth = 0
        this.itens.forEach(e=>{
            weigth += e.weigth
        })
        return weigth
    }

}

const potion = new item ('Potion','heal 1d8', 10)
const Fire_Ball_Scroll = new item('Fire ball', 'damage 3d6', 2)
const joao = new inventory()
joao.addItens(potion,Fire_Ball_Scroll)
console.log(joao.inventoryWeigth())