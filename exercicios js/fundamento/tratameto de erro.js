// aula sobre tratamento de erros

function tratarErroELancar(erro) {
   //modos para retornar os erros
   
    //throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try{
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Deloam'} // erro pois o nome do atributo é name.
imprimirNomeGritado(obj)