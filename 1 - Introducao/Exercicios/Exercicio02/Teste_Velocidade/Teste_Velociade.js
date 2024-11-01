alert("Testador de velocidade");

const nomeveiculo1 = prompt("Digite o nome do veículo 1: ")
const veloveiculo1 = prompt("Velocidade veículo 1: ")
const nomeveiculo2 = prompt("Digite o nome do veículo 2: ")
const veloveiculo2 = prompt("Velocidade veículo 2: ")

if (veloveiculo1 > veloveiculo2){
    alert("O " + nomeveiculo1 + " é o mais rápido")
}else if (veloveiculo2 > veloveiculo1){
    alert("O " + nomeveiculo2 + " é o mais rápido")
}else{
    alert("As velocidades são iguais")
}

