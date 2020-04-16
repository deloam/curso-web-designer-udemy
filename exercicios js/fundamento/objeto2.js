// aula sobre objetos e funções

console.log(typeof Object) // => function
console.log(typeof new Object) // => object

const Cliente = function() {}
console.log(typeof Cliente) // => function
console.log(typeof new Cliente) // => object

class Produto {} // ES 2015 (ES6) novo jeito de declarar classe
console.log(typeof Produto) // => function
console.log(typeof new Produto) // => object



