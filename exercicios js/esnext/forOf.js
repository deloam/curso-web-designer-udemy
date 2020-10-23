// percorre os valores do array ou string
for (const letra of 'Cod3r') {
    console.log(letra);
}

const assuntosEcma = ['Map', 'Set', 'Promise']
//percorre as posições do array
for (const assunto in assuntosEcma) {
    console.log(assunto);
}

const assuntosMap = new Map([
    ['map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

// percorrendo chaves e valores do map
for (const assunto of assuntosMap) {
    console.log(assunto);
}
// percorrendo só as chaves do map
for (const chave of assuntosMap.keys()) {
    console.log(chave);
}

//percorrendo só os valores do map
for (const valor of assuntosMap.values()) {
    console.log(valor);
}
// percorrendo com destruct as chaves e valores
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl);
}
// percorrendo um set também
const s = new Set(['a', 'b', 'c'])
for (const letra of s) {
    console.log(letra);
}