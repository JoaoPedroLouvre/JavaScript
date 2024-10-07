import { calculate } from './calculate.js'
import { main, root, input, resultInput, allowedKeys } from './variables.js'
import themeSwitcher from './themeSwitcher.js'

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
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)