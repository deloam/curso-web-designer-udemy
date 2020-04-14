console.log(7 / 0) // retorna função infinito, pois nao pode dividir por zero

console.log("10" / 2) // retorna 5 pois JS entendo que 10 em string pode ser convertido em inteiro

console.log("Show!" * 2) // não imprimi no console 2x a palavra show igual em outras linguagem, retorna um erro Not Num

console.log(0.1 + 0.7) // não retorn 0.8 e sim 0.7999999999 (é um tipo de espeficicação do W3C)

// console.log(10.toString()) // não funciona

console.log((10.345).toFixed(2)) // consegue chamar literal dentro de parenteses

console.log('3' + 2) // não soma 3 + 2, pois 3 é string e tem prioridade na operação, então junta 3 e 2, acontece apenas com o operador +