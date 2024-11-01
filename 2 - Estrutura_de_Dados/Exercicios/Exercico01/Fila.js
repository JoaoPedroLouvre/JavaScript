alert("Bem vindo a fila de espera!")

let number = 0;
let novopaciente = ""
let paciente = ""
let arr = [" Matheus", " Marcos"]
let selecao = ""

do{
    selecao = prompt(
        "Fila de pacientes: " + 
        "\n" + arr + 
        "\n \n Selecione a opção desejada: " + 
        "\na) Novo Paciente" + 
        "\nb) Consultar Paciente" + 
        "\nc) Sair"
    )

    if (selecao === "a"){
        novopaciente = prompt("Insira o nome do novo paciente: ")
        arr.push(" " + novopaciente)
    }else if(selecao === "b"){
        paciente = arr.slice(0, 1)
        alert("Paciente a ser consultado é: " + paciente)
    }
} while(selecao != "c")