// let e const
{
    var a =2
    let b = 3
    console.log(b);
}
console.log(a);
//console.log(b); // gera erro

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`);


//Desstructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras);

const [x, , y] = [1, 2, 3]
console.log(x, y);

// pode renomear a variavel colocando ':'e o nome novo que vai ter a variavel
const { idade: i, nome} = {nome: 'Ana', idade: 9}
console.log(i, nome);