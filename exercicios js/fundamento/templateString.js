// como usar template string
const nome = 'Rebeca'

const concatenacao = 'Olá ' + nome + '!'

// uso de template é esse acento `
const template = ` 
    Olá
    ${nome}!`

console.log(concatenacao, template) // template considera quebra de linha

//expressoes
console.log(`1 + 1 = ${1 + 1}`) // dentro do ${} pode fazer operações

const up = texto => texto.toUpperCase() // passando uma função para uma variavel string

console.log(`Ei.... ${up('cuidado')}!`) // faz cuidado ficar em maiúsculo
