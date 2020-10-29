function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

/*esperarPor(2000)
    .then(() => console.log('Executando promise...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise...'))
*/

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}


    // usando async await
async function executar() {
    let valor = await retornarValor()

    await esperarPor(1500) // sem o await aqui, ele é um codigo assincrono, nao espera essa parte executar para executar o resto
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)
    
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)
    
}

executar()