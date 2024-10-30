// * Criando um objeto por meio de uma função

function Book(title, pages, tags, author) {
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
    this.addOnStock = function addOnStock(quantity) {
        this.inStock += quantity
    }
    this.save = function () {
        // Salva no banco de dados
    }
}


const author = {name: 'George R. R. Matin'}
const tags = ['fantasy', 'adventury', 'medieval']

const GOT = new Book('Game of Thrones', 468, tags, author) // ! -> Chamando uma nova função construtora

console.log(GOT)

const GOT2 = new Book('Game of Thrones 2', 525, tags, author)

console.log(GOT2)