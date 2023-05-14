// ARRAY EM JAVASCRIPT

let meuArray = [
    "Azul",
    "Vermelho",
    "Amarelo",
    "Preto",
];

/*
0 => Azul
1 => Vermelho
2 => Amarelo
3 => Preto
*/

function executaArray(arr){
    console.log('------------------------ EXECUTANDO ARRAY ------------------')
    arr.forEach(function(item, indice, array){
        console.log(`${indice} => ${item}`);
    
    })
}


executaArray(meuArray);

// Adicinar no final do Array

meuArray.push('Laranja');
executaArray(meuArray);

// Adicinar ao inicio do Array
meuArray.unshift('Branco');
executaArray(meuArray);

// Remover do Inicio do Array
meuArray.shift();
executaArray(meuArray);

// Remover item no final do Array
meuArray.pop();
executaArray(meuArray);

// Remover item especificos
let pos = meuArray.indexOf('Amarelo');
meuArray.splice(pos, 1);

executaArray(meuArray);

// Verificar o tamanho
console.log(`O meu array tem ${meuArray.length} itesn `);

// Imprimindo um valor especifico de um Array
let pos2 = meuArray.indexOf('Vermelho');
console.log(meuArray[pos2]);

