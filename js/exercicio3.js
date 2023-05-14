
let alunos = [
    {
    nome : 'Jose     ',
    idade : 16,
    serie : '9 ano',
    notas : [4, 5.5, 6, 7.8]
    },{
        nome : 'Maria    ',
        idade : 15,
        serie : '9 ano',
        notas : [8.9, 5.5, 10, 7.8]
    },{
        nome : 'Zezinho  ',
        idade : 10,
        serie : '4 ano',
        notas : [4, 5.5, 3.5, 7.8]
    },{
        nome : 'Cebolinha',
        idade : 10,
        serie : '4 ano',
        notas : [8.9, 9, 8, 10]
    },{
        nome : 'Monica   ',
        idade : 10,
        serie : '4 ano',
        notas : [10, 10, 10, 9.5],
    }
    
];

function listaDados(){
    let media = 0;
    for(let pos in alunos){
        media = alunos[pos].notas.reduce(function(inc, notas){
            return inc + parseFloat(notas);
        },0) / alunos[pos].notas.length;
    
        console.log(`Aluno: ${alunos[pos].nome}       Idade: ${alunos[pos].idade}  Série: ${alunos[pos].serie}   Média ${media.toFixed(1)}     ` )
    }
}

//listaDados(alunos);


const prompt = require('prompt-sync')();
let nome = prompt('Informe o nome do aluno');
let idade = prompt('Informe a idade do aluno');
let serie = prompt('Informe a serie do aluno');
let ano = prompt('Informe a serie do aluino');
let notas = prompt('Infome as notas separadas por');

let aluno = {
    nome : nome,
    idade : idade,
    serie : serie,
    ano : ano,
    notas : notas.split(';')
}

alunos.push(aluno)
listaDados(alunos);

