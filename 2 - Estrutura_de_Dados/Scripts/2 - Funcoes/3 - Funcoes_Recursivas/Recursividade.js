function dividir(num){
    console.log(num)
    if(num % 2 === 0){
        dividir(num / 2)
    }else{
        return num
    }
}

dividir(40)

/*
    Aqui nós declaramos a função dividir, que recebe um número, e depois recebe ela mesma, porém com
    o número dividido por 2, caso a condição seja verdadeira, entrando numa espécie de loop

*/


// Vamos analizar isso melhor observando a função recursiva a seguir:
function fatorial (num){
    console.log(num)
    if(num === 0){
        return 1
    } else if(num === 1){
        return 1
    }else{
        console.log("Número: " + num + " * " + (num-1) + "!")
        return num * fatorial(num-1)
    }
}

console.log(fatorial(5))