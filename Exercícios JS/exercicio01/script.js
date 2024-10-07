let idade = document.getElementById('inputIdade')
let nome = document.getElementById('inputNome')

function verificarInput () {
    if(idade.value !== null){
        confirm('Confirma a idade: ' + idade.value + ' anos?')
        if(confirm){
            alert(
                'Dados informados: \n' +
                ' Nome: ' + nome.value +
                ' \nIdade: ' + idade.value + 
                '\n \nObrigado por participar ' + nome.value + '!' 
            )
        }
    }else{
        alert('Campo idade não preenchido!')
    }
}