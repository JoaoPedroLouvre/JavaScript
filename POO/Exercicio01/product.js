class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price 
        this.inStock = 0
    }

    addToStock(qtd) {
        this.inStock += qtd
    }

    calculateDiscount(percentDescont) {
        this.price -= (percentDescont * this.price) / 100;
    }
}

const mouse = new Product('Logitech G502', 'Mouse baaaao', 15)

console.log(mouse)

mouse.addToStock(2)

console.log(mouse)

mouse.calculateDiscount(5)

console.log(mouse)