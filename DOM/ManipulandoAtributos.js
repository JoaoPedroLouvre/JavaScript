const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function() {
 // input.value = input.value === '' ? 'Olá, mundo!' : '' // If ternário. Se o campo estiver vazio preenche com Olá mundo, se não ( tiver preenchido ), limpa o campo
    input.value = 'Olá, mundo!'
    
    console.log(input.value)
    console.log(input.getAttribute('value'))
})

document.getElementById('type').addEventListener('click', function() {
  //input.type = input.type !== 'radio' ? 'radio' : 'text' // Aqui alteramos o tipo de input, de text para radio utilizando if ternário. Se for do tipo texto, muda pra radio e vice versa
    input.setAttribute('type', 'radio') // Outra forma de alterar o tipo, porém neste método, não podemos "destransformar"
})

document.getElementById('placeholder').addEventListener('click', function() {
    input.placeholder = 'Digite algo...'
})

document.getElementById('disable').addEventListener('click', function() {
    input.setAttribute('disabled', !input.disabled) // disabled possui valor booleano, portanto, ao nega-lo nós estamos ativando o desabilitar campo
})

document.getElementById('data').addEventListener('click', function() {
    const data = input.dataset.something
    console.log('O valor do atributo data-something é: ' + data)

    input.dataset.something = 'Algum outro valor' 
    console.log('O valor do atributo data-something agora é: ' + input.dataset.something)
})