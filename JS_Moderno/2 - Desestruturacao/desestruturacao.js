// Destruturando propriedades de um objeto

        const person = {
            name: 'Luke',
            job: 'Jedi', 
            parents: ['Anakin', 'Padme'],
            teacher: 'Yoda'
        }

        // Maneira tradicional de atribuir uma parte do objeto a uma variavel
        const name = person.name

        // Maneira utilizando a desestruturação de objetos
        const { job } = person

        console.log(name, job)


        // Inclusive podemos atribuir mais de uma propriedade ao mesmo tempo
        const {parents, teacher } = person

        console.log(parents, teacher)


// Desestruturando propriedades de um array

        const [father, mother] = parents
        console.log(father, mother)


// Utilizando a desestruturação em uma função

        function createUser({ name, job, parents }) {
            const id = Math.floor(Math.random() * 9999) // Indica que o id vai receber um número aleatório
            return {
                id,
                name,
                job,
                parents
            }
        }

        const luke = createUser(person)

        console.log(luke)