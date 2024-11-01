const book = {
    title: 'GOT',
    pages: 468,
    published: true,
    inStock: 20,
    tags: ['fantasy', 'adventure', 'medieval'],
    author: {
        name: 'George R. R. Martin'
    },
    addOnStock(quantity) {
        this.inStock += quantity
    },
    save: function () {
        // salva no banco de dados
    }
}

console.log(book)

book.addOnStock(40)

console.log(book.inStock)

book.funcao = function () {
    // Adicionando uma função no objeto
}

console.log(book)