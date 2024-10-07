alert("Bem vindo usuário!")


/*
// mostra o menu ao usuário
let resposta = ""

do {
    resposta = prompt(
        "Menu de Seleções, selecione uma opção: " + 
        "\n Opção n°1 (a)" +
        "\n Opção n°2 (b)" +
        "\n Opção n°3 (c)" +
        "\n Opção n°4 (d)" +
        "\n Encerrar (e)"
    )
    if (resposta === "a" || resposta === "b"|| resposta === "c"|| resposta === "d" ){
        alert("A opção escolhida foi: " + resposta)
    }
} while(resposta != "e")

*/

// Controle Financeiro

let novovlr = 0
let resposta = ""
let qtdmoney = parseFloat(prompt("Digite a quantidade inicial de dinheiro: "))

do {
    resposta = prompt(
        "Quantidade = " + qtdmoney +
        "\n Adicionar (a)" +
        "\n Remover (b)" +
        "\n Sair (c)"
    )
    if (resposta === "a"){
        novovlr = parseFloat(prompt("Insira o valor a ser adicionado: "))
        qtdmoney += novovlr
    }
    if (resposta === "b"){
        novovlr = parseFloat(prompt("Insira o valor a ser removido: "))
        qtdmoney -= novovlr
    }
} while(resposta === "a" || resposta === "b")