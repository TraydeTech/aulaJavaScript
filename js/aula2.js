// let diaAtual = parseInt(prompt('Informe o número correspondente ao dia'));


/* switch(diaAtual) {
    case 1:
        document.write('Hoje é Domingo');
        break;
    case 2: 
        document.write('Hoje é Segunda');
        break;
    case 3: 
        document.write('Hoje é Terça');
        break;
    case 4: 
        document.write('Hoje é Quarta');
        break;
    case 5: 
        document.write('Hoje é Quinta');
        break;
    case 6: 
        document.write('Hoje é Sexta');
        break;
    case 7: 
        document.write('Hoje é Sábado');
        break;
    default:
        document.write('Valor digitado não corresponde a um dia')
        break;
} */


/* switch(diaAtual){
    case 1:
    case 7:
        document.write('Final de semana');
    break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        document.write('Dia útil');
    break;
    default:
        document.write('valor não é um dia');
    break;
} */

//operadores
/**     atribuição
 * 
 *      = atritui valor sinonimo (x = y)
 *      += incrementa atribuindo sinonimo (x = x + y)
 *      -= decrementa atribuindo sinonimo (x = x - y)
 *      /= divide atribuindo sinonimo (x = x / y)
 *      %= resto divisao atribuindo sinonimo (x = x % y)
 * 
 *      matemáticos
 *      + adição
 *      - subtração
 *      * multiplicação
 *      / divisão
 *      % resto divisão
 *      ++ incremento (x = x + 1)
 *      -- decremento (x = x - 1)
 * 
 *      relacionais
 *      == igualdade
 *      != diferente de 
 *      === igualdade no tipo e valor
 *      !== diferente de no tipo e valor
 *      > maior que
 *      < menor que
 *      >= maior ou igual
 *      <= menor ou igual
 * 
 *      operadores lógicos
 *      ! negação !true
 *      && e (and) exemplo (true == true && true == true) = true
 *      || ou (or) exemplo (true == true || true == false) true
 * 
 */


// laços de repetição

// laço for
/* let comparador = 10;
for(let valorInicial = 10; valorInicial > 0; valorInicial--){
    console.log(`Valor Inicial ${valorInicial}`)
} */

// laço while
// let valorInicial = 0;
/* while(valorInicial <= 100){
    console.log(`Valor Inicial ${valorInicial}`);
    valorInicial++;
} */

/* do{
    console.log(`Valor Inicial ${valorInicial}`);
    valorInicial++;
}while(100 <= 100) */

//laço for in 

/* let diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

for(let posicao in diasSemana){
    console.log(`O ${pos}º dia da semana é ${diasSemana[posicao]}`)
} */

/* let carros = [
    {modelo : 'Megane', ano: 2009, cor: 'Bege'},
    {modelo : 'Argo', ano: 2022, cor: 'Chumbo'},
    {modelo : 'Mustang', ano: 1969, cor: 'Prata'},
    {modelo : 'Uno Mille', ano: 2008, cor: 'Verde Musgo'},
    {modelo : 'Volvo XC 40', ano: 2023, cor: 'Azul Marinho'},
]

for(let pos in carros){
    console.log(`Modelo: ${carros[pos].modelo} | Cor: ${carros[pos].cor} | Ano: ${carros[pos].ano}`)
} */

//funções

// declaration - declaração
//declarando função

//executando uma ação
/* function meuNome(){
    console.log(`Diego Bracellos`)
} */

function meuNome(nome, sexo = 'M'){
    if(sexo == 'M'){
        return `Professor ${nome}`
    }else{
        return `Professora ${nome}`
    }
}

//chamando função
// meuNome();
// console.log(meuNome("Diego Bracellos", 'F'))



//exercicio 1

/* for(let i = 0; i < 1000; i++){
    console.log(`${i} é ${(i % 2 == 0) ? 'par' : 'impar'}`);
} */


//exercicio 2

function ate10(){
    for(let i = 1; i < 10; i++){
        console.log(i)
    }
}

function ate100(){
    for(let i = 1; i <= 10; i++){
        console.log(i * 10)
    }
}

function ate1000(){
    for(let i  = 1; i <= 10; i++){
        console.log(i * 100)
    }
}

/* ate10();
ate100();
ate1000(); */


//exercicio 3

/* ESCREVA UM CÓDIGO ONDE VOCÊ INFOMRMA A IDADE DE UM INDIVÍDULO, E O SCRIPT VAI IMPRIMIR NA TELA CONFORME A TABELA

0 A 9 - CRIANÇA
10 A 14 - JUVENIL
15 A 17 - ADOLESCENTE
18 A 29 - JOVEM
30 A 49 - MEIA IDADE
50 A 65 - IDOSO

AO FINAL ESCREVA O ANO DE NASCIMENTO BASEADO NA IDADE */
const prompt = require('prompt-sync')();

function calcIdade(idade){
    return 2023 - idade;
}

let idade = prompt("Informe uma idade: ");

if(idade < 10){
    console.log(`Criança nascida em ${calcIdade(idade)}`);
} else if(idade >= 10 && idade < 15){
    console.log(`Juvenil nascido em ${calcIdade(idade)}`);
} else if(idade >= 15 && idade < 18){
    console.log(`Adolescente nascido em ${calcIdade(idade)}`);
} else if(idade >= 18 && idade < 30){
    console.log(`Jovem nascido em ${calcIdade(idade)}`);
} else if(idade >= 30 && idade < 50){
    console.log(`Meia idade nascido em ${calcIdade(idade)}`);
} else{
    console.log(`Idoso nascido em ${calcIdade(idade)}`);
}

//exercicio 5


/* function converte(valor){
    return (valor - 32) * ( 5 / 9)
}

console.log(`Converter ${converte(35)}`);
 */