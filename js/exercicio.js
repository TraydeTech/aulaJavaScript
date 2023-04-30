/* 
EXERCICIO 1

criar uma rotina para imprimir dia da semana

segunda a domingo

if(dia == 01){
console.log('domingo')
}else if()..

*/

let dia = 4; // Substitua este valor pelo dia da semana que você deseja imprimir (1 = domingo, 2 = segunda-feira, etc.)

if (dia == 1) {
  console.log("Domingo");
} else if (dia == 2) {
  console.log("Segunda-feira");
} else if (dia == 3) {
  console.log("Terça-feira");
} else if (dia == 4) {
  console.log("Quarta-feira");
} else if (dia == 5) {
  console.log("Quinta-feira");
} else if (dia == 6) {
  console.log("Sexta-feira");
} else if (dia == 7) {
  console.log("Sábado");
} else {
  console.log("Valor inválido. Insira um número de 1 a 7.");
}


let nome = 'Jefferson';
let telefone = 996631717
let email = 'trayde@icloud.com'
let logradouro = 'Rua Maria dos Santos Pacheco'
let numero = 387
let completento = ''
let bairro = 'Escola Agricula'
let cidade = ''
let estado = 'Santa Catarina'

// ESCREVENDO IF TERNÁRIO



/* if (nome != null && nome != '') {
    nome = nome;
} else {
    none = '----'
}
if ( telefone != null && telefone != '') {
    telefone = telefone
} else {
    telefone = '----'
}
if (email != null && email != email) {
    emial = email;
} else {
    email = '----'
}
if (logradouro || logradouro) {
    console.log(logradouro);
} else {
    logradouro = '----'
}
if (numero || numero) {
    console.log(numero);
} else {
    numero = '----'
}
if (completento || completento) {
    console.log(completento);
} else {
    completento = '----'
}
if (bairro || bairro) {
    console.log(bairro);
} else {
    bairro = '----'
}
if (cidade || cidade) {
    console.log(cidade);
} else {
    cidade = '----'
}
if (estado || estado) {
    console.log(nome);
} else {
    estado = '----'
} */

console.log(` 

Nome: ${(nome != null && nome != '') ? nome : '---'}
Telefone: ${(telefone != null && telefone != '') ? telefone : '---'}
E-mail: ${(email != null && email != '') ? email : '---'}
Logradura: ${(logradouro != null && logradouro != '') ? logradouro: '---'}
Número: ${(numero != null && numero != '') ? numero : '---'}
Complemento: ${(completento != null && completento != '') ? completento : '---'}
Bairro: ${(bairro != null && bairro != '') ? bairro : '---'}
Cidade: ${(cidade != null && cidade != '') ? cidade : '---'}
Estado: ${(estado != null && estado != '') ? estado : '---'}

`); 