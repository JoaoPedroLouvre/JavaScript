// function media() {
//     return numbers / qtd
// }


let num = [10, 9, 6, 8, 9, 1, 5, 7]
let som = numbers.reduce((total, num) => total + num, 0);
let qtd = numbers.length
let med = sum / qtd


console.log(media(10, 9, 6, 8, 9, 1, 5, 7)) // 6.875
console.log(media(2, 5, 7, 1, -2)) // 2.6
console.log(media(10, 10, 10, 10, 9)) // 9.8
console.log(media(25, 75)) // 50

console.log(som)
console.log(qtd)
console.log(med)