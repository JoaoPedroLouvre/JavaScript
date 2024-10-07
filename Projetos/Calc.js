alert("Bem vindo a nossa calculadora!");

const num1 = parseFloat(prompt("Digite o primeiro número: "));
const num2 = parseFloat(prompt("Digite o segundo número: "));

let soma = num1 + num2;
let subt = num1 - num2;
let mult = num1 * num2;
let divi = num1 / num2;

const resposta = prompt("Digite a operação desejada: (Soma = '+') (Subtração = '-') (Multiplicação = '*') (Divisão = '/') ");

    if (resposta === "+"){
        alert("O resultado é: " + soma);
    }else if (resposta === "-"){
        alert("O resultado é: " + subt)
    }else if (resposta === "*"){
        alert("O resultado é: " + mult)
    }else if (resposta === "/"){
        alert("O resultado é: " + divi)
    }else
        alert("Caractere inválido!");