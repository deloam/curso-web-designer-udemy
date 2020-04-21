const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[,8, 8], [9, 6, 8]]
console.log(nota)

// outro jeito de usar destructuring em array

let empresas = ['Empresa1','Empresa2','Empresa3','Empresa4','Empresa5']
 
let [h,k,b,l,m] = empresas
 
console.log(h)
console.log(k)
console.log(m)