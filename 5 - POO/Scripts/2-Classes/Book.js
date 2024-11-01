// * É comum colocarmos o nome do arquivo como o nome da classe que estamos utilizando

class Book {
    // * Os parâmetros que passarmos no constructor serão os mesmos que passaremos para a classe
    constructor(title) {
        this.title = title
        this.published = false
    }

    // * Uma função declarada no objeto, assim como faziamos na declaração normal de objeto antes
    publish() {
        this.published = true
    }
}

const GOT = new Book('Game of Thrones')
const DBN = new Book('Diário de um Banana')

// * Chamamos o publish no livro que queremos publicar
DBN.publish()

// * Neste caso, GOT é a instância da classe book


console.log(GOT)
console.log(DBN)

// * Pergunta se GOT é uma instância de Book
console.log(GOT instanceof Book)
console.log(GOT instanceof Array) // * Pergunta se é um array