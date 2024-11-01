const arr = ["Luke", "Leia", "Han", "Anakin", "Yoda", "Palpatine", "Ray", "Kylo Rain"]
console.log(arr)
// ADICIONAR ELEMENTOS NO ARRAY

// push = adiciona um novo elemento no final do array (Devolve o tamanho do array)
arr.push("Obiwan")
console.log(arr)

// unshift = adiciona um novo elemento no começo do array (Devolve o tamanho do array)
arr.unshift("Obiwan")
console.log(arr)

// REMOVER ELEMENTOS NO ARRAY

// pop = remove um elemento no final do array (Devolve o ultimo elemento do array)
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// shift = remove um elemento no começo do array (Devolve o tamanho do array)
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// PESQUISAR ELEMENTOS NO ARRAY

// includes = pesquisa um elemento em qualquer posição do array (Retorna valor booleano)
const inclui = arr.includes("Yoda")
console.log(inclui)

// indexOf = pesquisa a posição exata do elemento no array
const indice = arr.indexOf("Yoda")
console.log(indice)

// CORTAR e CONCATENAR ARRAYS

// slice = recorta elementos do array que são definidos, podendo partir do começo, ou do final do array
const jedi = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(jedi)
console.log(outros)

// concat = junta dois ou mais arrays, podemos ainda adicionar novos itens como strings, números e etc.
const grupo = jedi.concat(outros, "Obiwan")
console.log(grupo)

// SUBSTITUIÇÃO DE ELEMENTOS

// splice = remove um grupo de elementos do array e o subistitui por outro elemento.
const a = grupo.splice(indice, 1, "João Pedro") // Primeiro definimos o grupo, depois o número de elementos, depois o novo que vai subistituir
console.log(grupo)

// Mostra onde está cada elemento do array (ITERAÇÃO)
for (let indice=0; indice<grupo.length; indice++){
    const elemento = grupo[indice]
    console.log(elemento + " se encontra na posição " + indice)
}