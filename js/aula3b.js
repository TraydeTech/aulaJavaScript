// Objetos Javascript
// Criando Objeto usando construtor
let carro = new Object(); // CONSTRUTOR
carro.modelo = 'Megane Grand Tour';
carro.ano = 2009;
carro.placa = 'MCC-2A22';
carro.cor = 'Beje';
carro.hash = Math.random();
carro.soma = function(){
    return 2 + 2
}

//console.log(carro.soma());

// Criando oibjeto com os inicilizadores
// sintaxe de objeto literal

let veiculo = {
    modelo : 'Megane Grand Tour',
    ano : {
        anoFab : 2008,
        anoMod : 2009,
    },
    placa : 'MCC-2A22',
    cor : 'Beje',
    hash : Math.random(),
    soma : function(){
        return 2 + 2;
    }
}

//console.log(veiculo.ano.anoFab);

// Criando um objeto de array

let carros = [
    {
        modelo: 'Megane',
        ano : {
            anoFab: 2008,
            anoMod : 2009,
            },
        placa : 'MMC-2A22',
        cor : 'Beje'
    },
    {
        modelo: 'Gol',
        ano : {
            anoFab : 2001,
            anoMod : 2001
            },
        placa: 'FDS-2A00',
        cor : 'Preto'

    }

]

console.log('|---MODELO---|-----ANO-----|----PLACA-----|------COR-------|');
for( let pos in carros) {

    console.log(`|---${carros[pos].modelo}---|-----${carros[pos].ano.anoMod}-----|----${carros[pos].placa}-----|------${carros[pos].cor}-------|`)
}
