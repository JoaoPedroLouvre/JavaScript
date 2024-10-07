import { input, resultInput } from './variables.js'

export function calculate() {
    resultInput.value = 'ERROR' // Adiciona uma mensagem de erro para os inválidos na calculadora de uma forma bem simples
    resultInput.classList.add('error')
    const resultado = eval(input.value)     // eval é uma função do javascript que executa um código javascript. 
    resultInput.value = resultado          // Devemos ter muito cuidado ao utiliza-la pois qualquer valor que ela receber 
    resultInput.classList.remove('error') // como string será executado, inclusive códigos maliciosos!
}