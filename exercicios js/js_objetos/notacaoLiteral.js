const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } // nao é mais necessario esse tipo de notação
const obj2 = { a, b, c } // agora automaticamente o nome do atributo vira o nome da constante
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {} // objeto literal
obj3[nomeAttr] = valorAttr // recebe nome e valor das constantes
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr} // mesma coisa do objeto 3
console.log(obj4)

const obj5 = {
    funcao1: function() { // forma tradicional
        // ...
    },
    funcao2() { // forma reduzida de criar função
        // ...
    }
}
console.log(obj5)