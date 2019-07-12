function Babarian (){
    //Attributes 
    let level,XP,HP

    stats = {
        strength : this.strength,
        dexterity: this.dexterity,
        constitution: this.constitution,
        inteligence: this.inteligence,
        charism: this.charism,
        wisdom: this.wisdom
    }
    //metodo publico usa o this para o metodo poder ser chamdo fora da classe 
    this.HP_Max = (level,constitution) => {
        let auxiliar = 0
        for (let i = 1; i<level; i++){
            auxiliar = Math.ceil(Math.random()*13 + 1) + constitution + auxiliar
        }
        return auxiliar + (12+constitution)
    }// Teste HP_MAX -> console.log(HP_Max(3,3))
    //get HP, because HP is a private attribute
    this.getHP = () => {
        HP = this.HP_Max(this.level, this.constitution)
        return HP
    }
    
    attack = (EnemyCA,weaponDamage,strength) => weaponDamage + strength
}

const barbara = new Babarian
barbara.level = 1
barbara.XP = 0
barbara.strength = 3
barbara.dexterity = 2
barbara.constitution = 3
barbara.inteligence = 1
barbara.charism = 0
barbara.wisdom = -1
console.log(barbara.getHP())