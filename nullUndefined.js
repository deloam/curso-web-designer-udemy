// aula sobre null e undefined

let valor
console.log(valor) // => undefined
//console.log(valor2) // => is not defined (nao foi declarada)

valor = null // => ausência de valor, mas foi definida, porém vazia
console.log(valor) // => null

//console.log(valor.toString()) // não pode usar toString em variavel nula

const produto = {} // um objeto
console.log(produto.preco) // => undefined
console.log(produto) // => {} (objeto)

produto.preco = 3.50
console.log(produto) // => preco: 3.5

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco) // => false
console.log(produto) // => preco: undefined

// forma correta de excluir atributo do objeto
delete produto.preco
console.log(produto) // => {} (somente o objeto)

const produto2 = {}
produto2.preco = null // sem preço
console.log(!!produto2.preco) // => false
console.log(produto2) // => preço = null



