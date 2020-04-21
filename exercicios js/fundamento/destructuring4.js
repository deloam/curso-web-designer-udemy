// aula 4 sobre destructuring

/* se o valor de maximo for passado primeiro, o if
inverte o max para o min e o min para max atraves do
destructuring
*/

function rand([min = 0, max = 1000]) {
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992])) // assume 992 como minimo
console.log(rand([,10])) // assume 10 como maximo
console.log(rand([])) // assume valores padrao
