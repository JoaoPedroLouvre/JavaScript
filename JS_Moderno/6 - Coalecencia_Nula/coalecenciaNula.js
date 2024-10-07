const a = 0 // false
const b = null // false
const c = 'Test' // true

console.log(a || b || c) // || = OU =>  Se o valor for falso, o javascript pula ele
// Neste caso, o operador nos devolve C. Porque 0 é considerado como falso, assim como null

console.log(a ?? b ?? c) // ?? Entende que 0 não é nulo, e sim um número válido


// Um dos usos comuns do ??

let j = 0
let l = j || 42 // Testa o J, se J for falso ele atribui o valor 42 ao L, se não, atribui o valor de J

console.log({j, l})

let m = j ?? 42 

console.log({j, m}) // Entende 0 como verdadeiro pois o ?? Só desconsidera nulos e undefined