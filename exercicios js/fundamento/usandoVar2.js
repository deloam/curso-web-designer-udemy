var numero =  1
{
    var numero = 2
    console.log('dentro = ', numero) // => 2
}
// ele fica 2 pois dentro do escopo foi sobreescrevido
console.log('fora = ', numero) // => 2