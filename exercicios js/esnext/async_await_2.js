function gerarNumeroEntre(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max]

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Numero repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtdNumeros).fill()) {
            //esperar ate conseguir os numeros
            numeros.push(await gerarNumeroEntre(1, 60, numeros))
        }
        return numeros
    } catch (error) {
        if (tentativas > 100) {
            throw "Não Deu certo"
        } else {
            return gerarMegaSena(qtdNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(25)
    .then(console.log)
    .catch(console.log)
