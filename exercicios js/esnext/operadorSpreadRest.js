// operador ... rest(juntar) / spread(espalhar)
// usar rest com parâmetro de função

// usar spreaad com objeto
const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario}

console.log(clone);

const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']

console.log(grupoFinal);
