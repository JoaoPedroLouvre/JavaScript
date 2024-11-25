// As vezes temos informações sensíveis ou confidenciais na classe que não queremos que
// apareça ou mude, e para isso usamos o conceito de encapsulamento para "esconder" o 
// atributo da classe, como faremos com password abaixo:


class Account {
    #password          // Dessa forma criamos um atributo privado só disponível na classe
    #balance = 0
    constructor(user) {
        this.email = user.email
        this.#password = user.password
    }


    // Para vermos um saldo privado, criamos um método seguro para isso:
    getBalance(email, password) {
        if (this.#authenticate(email, password)) {
            return this.#balance
        } else {
            return null
        }
    }

    #authenticate(email, password) {
        return this.email === email && this.#password === password
    }
}

const user = {
    email: 'joao@email.com',
    password: 'senha123'
}

const myAccount = new Account(user)

console.log(myAccount)
console.log(myAccount.getBalance('joao@email.com', 'senha123'))