// aula sobre variavel usando let

var numero = 1
{
    let numero = 2 // com let fica so dentro do escopo menor
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)