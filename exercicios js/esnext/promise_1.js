let p = new Promise(function (cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

p
//o metodo then passar o valor dele sempre para o proximo .then
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(console.log)