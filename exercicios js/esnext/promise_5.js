function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        }else{
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .then(
        v => consol.log(v), // não existe essa funcao consol (o certo é console)
        erro => console.log(`Erro Especifico: ${erro}`)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(erro => console.log(`Erro: ${erro}`))
    .then(() => console.log('Fim!'))
