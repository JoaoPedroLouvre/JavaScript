export const main = document.querySelector('main')
export const root = document.querySelector(':root')
export const input = document.getElementById('input')
export const resultInput = document.getElementById('result')

// Impedir que o usuário digite outros botões a não ser o da calculadora
export const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]