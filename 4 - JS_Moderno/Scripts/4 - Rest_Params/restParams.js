// Diferente forma de passar um array como parâmetro

function sum(...numbers) {
    return numbers.reduce((accum, num) => accum + num, 0) // Forma complicadinha de somar todos os elementos do array
}

// Permite que nós passemos quantos parâmetros quisermos
console.log(sum(1,1))
console.log(sum(2,2,2,2,2,2,2))