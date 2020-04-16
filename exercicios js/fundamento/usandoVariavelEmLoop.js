// sobre var em loop
for (var i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i = ', i)// imprime 10, pois a variavel com var ainda é global dentro dos loops

for (let j = 0; j < 10; j++) {
    console.log(j)  
}

// console.log('j = ', j) // gera erro pois nao é identificado fora do loop com declaração let

/////////////////////////////////////
// problema historico do var com funções
// retorna 10 nesse caso pois fora do escopo ela nao respeira o 'i', todos ficam como 10
const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]() // => 10
funcs[8]() // => 10

////////////////////////////////////////
// mesmo exemplo com let
const funcs2 = []

for (let i = 0; i < 10; i++) {
    funcs2.push(function() {
        console.log(i)
    })
}

funcs2[2]() // => 2
funcs2[8]() // => 8

