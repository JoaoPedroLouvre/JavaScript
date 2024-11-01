const Address = require('./Address')
const Person = require('./Person')

// const addr = new Address('7 de Setembro', 99, 'Centro', 'São Fidélis', 'RJ')
// const john = new Person('John Doe', addr)


// ! Person dependendo do addres:
// * const john = new Person('John Doe', '7 de Setembro', 99, 'Centro', 'São Fidélis', 'RJ')
// * console.log(john)
// * console.log(john.address.fullAddress())

// ! Person NÃO dependendo do addres:
const addr = new Address('7 de Setembro', 99, 'Centro', 'São Fidélis', 'RJ')
const john = new Person('John Doe', addr)

console.log(john)
console.log(john.address.fullAddress())