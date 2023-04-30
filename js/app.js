let nome = 'Jefferson'; /* let esta no lugar var */
let sobreNome = 'Trayde';
let idade = 46;
let anoDeNascimneto = 1976;
let ano2 = '2023'; // string



// console.log('Nome: '+nome+'  '+sobreNome+' Idade: '+idade+' Nascimento:  '+anoDeNascimneto+'');

/* interpolacao */

// para comentar  varias linhas marca dos as linha shit + optin + A

/* console.log(` 
Nome: ${nome} ${sobreNome}
Idade: ${idade}
Nascimento: ${anoDeNascimneto}
`); */

/* 
&& --> and --> e
|| --> or __> ou
*/

/* if(true == true || true == false){
    console.log('verdadeiro');
}else{
    console.log('falso');
} */


let anoAtual = 2009; // inteiro

if(anoAtual > 2010 && anoAtual < 2023){
    console.log('Ano estar no intervalo');


}else if(anoAtual < 2010){
    console.log('Ano é menor que 2010');

}else{
    console.log('Ano é maior que 2023');

}
