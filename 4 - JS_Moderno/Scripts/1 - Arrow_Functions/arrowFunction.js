// Utilizando função normal
function multiplicando(a, b) {
    return a * b
}

console.log(`O resultado é: ${multiplicando(2, 2)}`)
console.log('O resultado é' + multiplicando(2,2) + ':')


// Utilizando Arrow Function
const multiply = (a, b) => a * b

console.log(`Multiplicação com arrowFunction = ${multiply(2, 2)}`)

// Mais aplicações
const double = n => `O dobro de ${n} é ${n * 2}`
const number = 21

console.log(double(number))

// Casos de uso
const tows = ['Planaltina', 'Sobradinho', 'Asa Norte', 'Asa Sul', 'Lago Norte', 'Lago Sul']
const startingWithP = tows.filter(town => town[0] === 'P') // Filtrando cidades de começam com a letra P maíuscula

console.log(startingWithP)