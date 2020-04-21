// aula sobre nome/valor

const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'falaaa' // contexto léxico 2
    return saudacao
}


//Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao) // => Opa
console.log(exec()) // => falaaa
console.log(cliente) // retorna atributos do objeto