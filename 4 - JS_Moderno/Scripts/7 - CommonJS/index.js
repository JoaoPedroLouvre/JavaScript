// Importando os módulos JS
const {store, soma} = require('./store')
const variavelRender = require('./render')
//const variavelStore = store

console.log('Aplicação iniciada')
variavelRender()
store()
console.log('Aplicação finalizada.')

// Infelizmente não funciona no navegador