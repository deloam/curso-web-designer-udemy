const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto){
    if (!produto.id) { // se produto nao tem o atributo id, é criado para ele o atributo id e recebe o valor de sequence.id
        produto.id = sequence.id 
    }
    produtos[produto.id] = produto // cadastro o produto id como chave do array vazio e adiciona o produto nessa chave
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

function excluirProdutos(id) {
    const produto =  produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProdutos}