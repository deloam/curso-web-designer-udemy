// aula sobre var e let

{
    {
        {
            {
                 var sera = 'Sera???'
                 console.log(sera) // dentro do bloco o var funciona
            }
        }
    }
}

console.log(sera) // fora do escopo dos blocos ela continua funcionando

function teste() {
    var local = 123
    console.log(local)
}

teste() // => 123

//console.log(local) //gera erro pois dentro de uma função a variavel declarada com var e local naquele escopo



