const pessoa = {
    nome: 'Deloam',
    idade: 25,
    peso: 70
}

console.log(Object.keys(pessoa)); // exibe apenas as chaves do objeto
console.log(Object.values(pessoa)); // exibi apenas os valores

console.log(Object.entries(pessoa)); // exibi todo o objeto

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento);

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 2, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)

obj.c = 1234

console.log(obj);