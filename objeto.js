// aula sobre JS

//declarando objeto
const prod1 = {} // objeto vazio

prod1.nome = 'Celular Ultra Mega' // setando id nome com o valor
prod1.preco = 4998.0
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)


// outra forma de declarar objetos
const prod2 = {
    nome: 'Camiseta confortável',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }

}

console.log(prod2)