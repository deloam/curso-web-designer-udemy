const schedule = require('node-schedule')


//  */5 = de 5 em 5 seg, * = qualquer minuto, na hora 22, * = qualquer dia do mes, * = qualquer mês, 1 = na segunda feira
const tarefa1 = schedule.scheduleJob('*/5 * 22 * * 1', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1');
}, 20000)

const regra = new schedule.RecurrenceRule()
// 0 = domingo, 1 = segunda ...
regra.dayOfWeek = [new schedule.Range(1, 5)] // segunda a sexta
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('execuntando tarefa 2!', new Date().getSeconds());
})