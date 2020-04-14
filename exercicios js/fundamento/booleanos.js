// aula sobre boleanos
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo) // retorna 1
console.log(!isAtivo) // retorna false o valor de 1
console.log(!!isAtivo) // retorna true o valor de 1
console.log('--------')
// tipos que no contexto dos boleanos são validos como boleanos


// retornos para TRUE usando !!
console.log(!!3)                //true
console.log(!!-1)               //true
console.log(!!' ')              //true
console.log(!!'teste')          //true
console.log(!![])               //true
console.log(!!{})               //true
console.log(!!Infinity)         //true
console.log(!!(isAtivo = true)) //true

// retornos para FALSE usando !!
console.log(!!0)                 // false
console.log(!!'')                // false
console.log(!!null)              // false
console.log(!!NaN)               // false
console.log(!!undefined)         // false
console.log(!!(isAtivo = false)) // false

/******
 * USO DO OPERADOR LOGICO "OU" => ||
 ******/

 let nome = ''
 console.log(nome || 'Desconhecido') // se a variavel nome estiver vazia, retorna a segunda condição, no caso 'desconhecido'

 nome = 'Deloam'
 console.log(nome || 'Desconhecido') // quando a varivel nome esta preenchida, aparece ela ao inves de 'desconhecido'
 



