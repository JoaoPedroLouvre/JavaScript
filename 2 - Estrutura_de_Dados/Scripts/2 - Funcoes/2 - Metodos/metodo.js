let pessoa = {
    nome: "João",
    idade: 20,
    dizerOla(){
        console.log("Olá mundo! Meu nome é " + this.nome + " e eu tenho " + this.idade + " anos!")
    }
}

console.log(pessoa)

pessoa.dizerOla()

// This referência um campo do objeto específico