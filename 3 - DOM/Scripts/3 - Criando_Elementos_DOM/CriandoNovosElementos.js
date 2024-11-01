function addInput() {
    const ul = document.getElementById('inputs')

    const newli = document.createElement('li')
    newli.className = 'list-item'
    newli.innerText = 'Novo input '

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'

    // Adicionando os elementos criados a outros elementos
    newli.appendChild(newInput)
    ul.appendChild(newli)

}