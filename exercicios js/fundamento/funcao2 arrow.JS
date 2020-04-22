//aula 2 sobre função
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) // => 5



// Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3)) // => 5


// return implicito com arrow function
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3)) // => -1

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')