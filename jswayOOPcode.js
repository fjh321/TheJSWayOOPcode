class Dog {
    constructor(name, species, size) {
        this.name = name
        this.species = species
        this.size = size
    }

    bark() {
        if (this.size > 60) {
            return 'Grr Grr'
        }
        else {
            return 'Woof Woof'
        }
    }
}


const fang = new Dog('Fang', 'boarhound', 75)
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`)
console.log(`Look a cat! ${fang.name} barks: ${fang.bark()}`)

const snowy = new Dog('Snowy', 'terrier', 22)
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`)
console.log(`Look a cat! ${snowy.name} barks: ${snowy.bark()}`)

////////////////////////////


class People {
    constructor(name) {
        this.name = name
        this.balance = 0
    }
    credit(amount) {
        this.balance += amount
    }
    describe() {
        return `Owner: ${this.name}, balance: ${this.balance}`
    }

}

let men = []

men.push(new People('Sean'))
men.push(new People('Brad'))
men.push(new People('Georges'))

men.forEach(element => {
    element.credit(1000)
    console.log(element.describe())
})

// //OR COULD USE FOR OF LOOP LIKE BELOW; TRY TO FIGURE OUT HOW TO DO IT WITH FOR LOOP//

// for (let each of men) {
//     each.credit(1000)
//     console.log(each.describe())
// }
