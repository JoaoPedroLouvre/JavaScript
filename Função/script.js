function dobro(x){
    alert("O dobro de " + x + " é: " + (x*2))
}

dobro(5)
dobro(7)


function ola(nome = "Mundo"){
    alert("Olá " + nome + "!")
}

ola("João")
ola()

function criarusuario(nome, email, senha, tipo="Usuário"){
    usuario = {
        nome, // => mesmo que nome: nome
        email,
        senha,
        tipo
    }
    console.log(usuario)
}

criarusuario("João", "joaozinReiDelas@gmail.com", "$@f@d0!!")