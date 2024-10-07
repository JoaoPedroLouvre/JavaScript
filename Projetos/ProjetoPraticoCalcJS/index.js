const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

// Impedir que o usuário digite outros botões a não ser o da calculadora
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

    // Adicionando funcionalidades aos botões da tela
    document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
        charKeyBtn.addEventListener('click', function() {
            const value = charKeyBtn.dataset.value
            input.value += value
        })
    })

    // Adicionando a função de limpar para o botão C ( clear )
    document.getElementById('clear').addEventListener('click', function() {
        input.value = '' // -> Limpando o campo input
        input.focus()  // -> Voltando o foco para o campo input
    })

// Condições para permitir as telcas enter e backspace
input.addEventListener('keydown', function(ev) {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Enter') {
        calculate()
    }
})

// Quando clicar no botão de igual, ele executa a função de calcular ( o mesmo vale ao pressionar a telca enter )
document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
    resultInput.value = 'ERROR' // Adiciona uma mensagem de erro para os inválidos na calculadora de uma forma bem simples
    resultInput.classList.add('error')
    const resultado = eval(input.value)     // eval é uma função do javascript que executa um código javascript. 
    resultInput.value = resultado          // Devemos ter muito cuidado ao utiliza-la pois qualquer valor que ela receber 
    resultInput.classList.remove('error') // como string será executado, inclusive códigos maliciosos!
}                                     

// Adicionando a funcionalidade do botão copy ( copiar )
document.getElementById('copyToClipboard').addEventListener('click', function(ev) {
    const button = ev.currentTarget
    // Mudando o texto e a cor do botão ao clicado, indicando que o conteúdo foi copiado
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value) // navigator ativa as propriedades do navegador. No caso
    } else  {                                            // estamos escrevendo um texto, que é o texto no nosso input
        button.innerText = 'Copy'
        button.classList.remove('success')
    }                                                   
})

// Adicionando funcionalidade de trocar o tema de claro para escuro
document.getElementById('themeSwitcher').addEventListener('click', function() {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }
})

