const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo);

if (anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
}else{
    process.stdout.write('Infome o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\r\n', '') // no windows o \r serve para levar o curso para o final da linha e remove o \n de lá
        
        process.stdout.write(`Fala ${nome}!!`)
        process.exit()
    })
}