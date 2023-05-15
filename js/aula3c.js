// Falando de FUNCOES e CLASSES uteis do JS

// Classe data
let data = new Date();

// tarz o dia
console.log(data.getDate());

// traz o mes
console.log(data.getMonth());

// imprimir dia por extenso
let dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
let meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]
console.log(`${dias[data.getDay()]}, ${data.getDate()} de ${data.getMonth()} de ${data.getFullYear()}`);