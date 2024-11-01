//  É uma função que recebe outra função como parâmetro
function calcular(a , b, operacao){ // High-Order Function
    console.log("Realizando uma operação.")
    const resultado = operacao(a , b) // Função que é chamada ( Somar passando a e b como x e y )
    return resultado
}

function somar(x, y){ // Recebe 2 parametros, assim como a função operação
    console.log("Realizando uma soma.")
    return x + y
}

console.log(calcular( 3 , 5 , somar)) // Dessa maneira, passamos 3 e 5 como valores para A e B, que são passados como
                         // valores para X e Y, e chamamos somar, que faz a soma destes valores. Com isso
                         // conseguimos criar uma função calcular que faz qualquer operação com dois números

console.log(calcular( 8 , 4 , function (x , y){ // Aqui nós estamos criando uma função anonima que realiza uma operação
                                    // com os valores passados para A e B, que aqui se tornam X e Y.
    console.log("Realizando subtração.")
    return x - y
}))

// Dessa forma podemos criar uma função para percorrer os elementos de um array e fornecer a posição e titulo
// de cada elemento.

function exibirElemento(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ["Maçã", "Banana", "Laranja", "Limão", "Melancia"]

lista.forEach(exibirElemento) // Módulo para percorrer elementos do array e mostrar informações


lista.forEach(function(elemento, indice){
    console.log({
        indice
    })
})