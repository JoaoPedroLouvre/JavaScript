alert("Bem vindo a pilha de cartas!!!")

let cartas = ""
let arr = [" 1♣️", " 2♣️", " 3♣️", " 4♣️"]
let ultimacarta = ""
let novacarta = ""


do{
 cartas = prompt(
        "Cartas disponíveis: " + arr +
        "\n" + "\n" + "Selecione uma opção: " +
        "\n a) Adicionar uma carta" + 
        "\n b) Puxar uma carta" + 
        "\n c) Sair" 
    )

    if (cartas === "a"){
        novacarta = prompt("Qual o nome da carta que deseja adicionar? ")
        arr.push(" " + novacarta)
    } else if( cartas === "b"){
        ultimacarta = arr.pop()
        alert("A carta do topo é: " + ultimacarta)
    }
} while(cartas != "c")