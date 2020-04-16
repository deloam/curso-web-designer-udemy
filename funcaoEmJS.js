//aula sobre função em JS

//função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3) // passando valores para somar

imprimirSoma(2) // => NaN not a number

imprimirSoma(2, 3, 4, 5, 6) // retorna somente a soma dos dois paramentros aceitos, o resto é descondiderado

imprimirSoma() // => NaN not a number

function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3)) // => 5
console.log(soma(2)) // => 2
console.log(soma()) // NaN not a number

