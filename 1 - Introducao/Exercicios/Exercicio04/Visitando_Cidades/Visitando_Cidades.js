const nome = prompt("Bienvenido! Welcome! Bem vindo! Para começarmos, informe o seu nome: ")
let cidades = ""
let contagem = 0

let resposta = prompt("Você já visitou alguma cidade? (S/N)")

while(resposta === "S"){
    let cidade = prompt("Qual cidade você visitou?")
    cidades += " - " + cidade + "\n"
    contagem++
    resposta = prompt("Você visitou alguma outra cidade? (S/N)")
}

alert(
    "Turista: " + nome + 
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades
)