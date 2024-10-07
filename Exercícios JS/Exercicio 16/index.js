// Receber a data de nascimento, calcular a idade no dia atual, e mostrar a próxima data de aniversário
const dayjs = require('dayjs')

const dataNascimento = dayjs('2004-06-14')
const hoje = dayjs()
const idade = hoje.diff(dataNascimento, 'year', true)

function calcIdade() {
    const idadeArredondado = parseInt(idade)
    return idadeArredondado
}

function proxAniversario() {
    const proxAniversario = dataNascimento.add(calcIdade() +1, 'year')
    return proxAniversario
}

function diasFaltantes() {
    return proxAniversario().diff(hoje, 'day')
}

console.log(`Sua idade na data ${hoje.format('DD/MM/YYYY')}, é: \n${calcIdade()} anos,\nSeu próximo aniversário é: ${proxAniversario().format('DD/MM/YYYY')} \nFaltam ${diasFaltantes()} dias para seu próximo aniversário`)