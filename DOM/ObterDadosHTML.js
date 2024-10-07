// Seleciona um elemento da página a partir de um id, no caso selecionamos o elemento da lista e o exibimos no console
function show(){
    const contactList = document.getElementById('contact-list')
    console.log(contactList)

    // Selecionando pelo nome da tag
    const listElements = document.getElementsByTagName('li')
    console.log(listElements)

    // Seleciona elementos pelo nome da classe
    const contactInputs = document.getElementsByClassName('contact-input')
    console.log(contactInputs)

    // Selecionar elementos por nome
    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)

    // Selecionar elementos por id como no CSS permitindo um filtro maior
    const contacts = document.querySelectorAll('#contact-list > li > label')
    console.log(contacts)

    // Igual ao querySelectorAll mas neste só seleciona o primeiro elemento que bate com a query definida
    const firstContact = document.querySelector('#contact-list > li > label')
    console.log(firstContact)
}