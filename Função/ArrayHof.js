const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

// 1° MÉTODO Map - Transformação em arrays ( Cria um novo array baseado no array existente )

const nomes = personagens.map(function (personagem){
    return personagem.nome
})

console.log(nomes)

// 2° MÉTODO Filter - Filtra elementos de um array ( Cria um novo array com elementos específicos de um array )

const orcs = personagens.filter(function (personagem){
    return personagem.raca === "Orc"
})

console.log(orcs)

// 3° MÉTODO Reduce - Transforma um array em algum outro elemento ( Transforma um array em um número, objeto, string, etc )

const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
    return valorAcumulado + personagem.nivel
}, 0)

console.log(nivelTotal)

// Reorganizando dados de um array com o reduce

const racas = personagens.reduce(function (valorAcumulado, personagem) {
    if (valorAcumulado[personagem.raca]) {
        valorAcumulado[personagem.raca].push(personagem)
    } else {
        valorAcumulado[personagem.raca] = [personagem]
    }

    return valorAcumulado
}, {})

console.log(racas)

// 4° MÉTODO Sort - Ordenar arrays ( pega elementos de um array e os muda de posição de acordo com um critério )
// Diferente dos outros métodos, o sort modifica o array raiz, por isso não precisamos atribui-lo a nenhuma variavel

personagens.sort(function (a, b){
    return a.nivel - b.nivel // Este método faz a ordenação de forma automática, se essa conta for positiva, então A
                             // é maior do que B, logo B vai para o final, se não, B é maior e A vai para o final
})

console.log(personagens)

// OBS: Também podemos utilizar o sort sem modificar o array principal! Para isso usamos o slice que cria uma cópia

const personagensOrdenados = personagens.slice().sort(function (a,b){
    return b.nivel - a.nivel
})

console.log(personagensOrdenados)