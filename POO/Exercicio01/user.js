class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
        this.login = false
    }

    logger(email, password) {
        if (this.email === JP.email && this.password === JP.password) {
            this.login = true
        }
    }
}

const JP = new User('João Pedro', 'email@email.com', '12345678')

console.log(JP)

JP.logger()

console.log(JP)