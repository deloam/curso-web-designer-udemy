const colors = {
    p:       '#388e3c',
    div:     '#1565c0',
    span:    '#e53935',
    section: '#f67809',
    ul:      '#5e35b1',
    ol:      '#fbc02d',
    header:  '#d81b60',
    nav:     '#64dd17',
    main:    '#00acc1',
    footer:  '#304ffe',
    form:    '#9f6581',
    body:    '#25b6da',
    padrao:  '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento =>{
    const tagName = elemento.tagName.toLowerCase() // pega o nome da tag do elemento // ex.: div, nav, body

    elemento.style.borderColor = colors.get(tagName) // colori a borda da cor do elemento usando o nome da tag

    if(!elemento.classList.contains('nolabel')) { // se no nome da class nao ta escrito nolabel, ele faz os comandos abaixo
        const label = document.createElement('label') // cria o elemento label
        label.style.backgroundColor = colors.get(tagName) // colori o backgrond do label
        label.innerHTML = tagName // escreve dentro da tag label o nome da tag do elemento
        elemento.insertBefore(label, elemento.childNodes[0]) // insere dentro do elemento a tag label como primeiro elemento filho
    }
})