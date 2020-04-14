//formas de passar valores numericos
const peso1 = 1.0
const peso2 = Number("2.0")

console.log(peso1,peso2)
console.log(Number.isInteger(peso1)) //saber se é inteiro

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2

const media = total / (peso1 + peso2)

console.log(media.toFixed(2))// limitar tamanho dos decimais
console.log(media.toString()) // transforma a variavel em string

console.log(media.toString(2)) // com esse 2 a variavel é mostrada em numeor binário

console.log(typeof media) //mostra que tipo de dados é a variavel media