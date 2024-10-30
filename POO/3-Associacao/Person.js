const Address = require("./Address")


// ! Classe Person dependendo do endereço:
// * class Person {
// *    constructor(name, street, number, city, neighborhood, state) {
// *        this.name = name
// *        this.address = new Address(street, number, neighborhood, state, city)
// *    }
// * }

// ! Classe Person sem depender do endereço:
class Person {
   constructor(name, address) {
       this.name = name
       this.address = address
   }
}

module.exports = Person