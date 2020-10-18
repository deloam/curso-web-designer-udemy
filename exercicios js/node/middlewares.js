// middleware pattern (chain of responsibility)

const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1'
    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid2'
    next()
}

const passo3 = contexto => contexto.valor3 = 'mid3'

const exec = (contexto, ...middleware) => {
    const execPasso = indice => {
        middleware && indice < middleware.length &&
        middleware[indice](contexto, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)

/*Nós temos 3 termos, o primeiro:  middlewares retornará false se o array com os parâmetros rest for undefined, ou seja não existir, 
então nenhum dos outros dois termos será observado.
O segundo termo: indice < middlewares.length retornará true se o índice passado como parâmetro para a função execPasso 
for menor que o tamanho do array, ou seja, se ainda houverem funções a serem executadas.
O terceiro passo: middlewares[indice](ctx, () => execPasso(indice + 1 é a chamada da função propriamente dita, 
que só será executada caso ambos os termos anteriores sejam true.
O operador rest cria um array chamado middleWares dentro do escopo da função que conterá todos os argumentos 
passados na chamada da mesma, exceto o argumento "ctx", esse argumento não faz parte dos parâmetros rest.
*/