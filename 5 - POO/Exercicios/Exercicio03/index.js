const Author = require('./Author')

const joao = new Author('João Pedro')

const postJoao = joao.addPost('Olá mundo', 'olá mundo! este é meu primmeiro post usando POO')

postJoao.addNewComment('joaozinReiDelas', 'Boooaaa joão, um começo bom em uma longa jornada!')

console.log(joao)
console.log(postJoao)