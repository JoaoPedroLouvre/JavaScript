// Dentro do JavaScript podemos passar funções como valores para variáveis

function somar(a , b){
    return a + b
}

let operacao = somar // Variável operação, agora é uma função com a mesma operação de somar

console.log(operacao(5,5))

// Funções anônimas são funções que não possuem nome

operacao = function (a , b){
    return a - b
}

console.log(operacao(5,6))

// Dessa maneira, conseguimos mudar o comportamento de uma função ao decorrer do código