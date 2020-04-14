// aula sobre string

const escola = "Cod3r"

console.log(escola.charAt(4)) // tem q retornar o 4

console.log(escola.charAt(5)) // não gera erro, mas deveria pois não existe essa posição na String

console.log(escola.charCodeAt(3)) // retorna o código UNICODE da caractere escolhido

console.log(escola.indexOf('3')) // retorna o indice escolhido

console.log(escola.substring(1)) // retorna a string a partir do indice escolhido

console.log(escola.substring(0, 3)) // retorna de um indice ate o outro do 0 ao 2 nesse exemplo

console.log('Escola '.concat(escola).concat("!")) // como concatenar strings

console.log(escola.replace(/\d/, 'e')) // mudar objetos da string por outra

console.log('Ana,Maria,Pedro'.split(',')) // transformar string em um array formal usando a virgula como separação de um indice do outro

