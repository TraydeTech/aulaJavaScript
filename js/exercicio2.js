let nome = 'Diego';
let telefone = '47 9999999';
let email = 'bracellos@gmail.com';
let logradouro = 'Rua Sete de Setembro';
let numero = 1999;
let bairro = 'Centro';
let cidade = '';
let estado = 'SC';

/* if(nome != null && nome != ''){
    nome = nome;
}else{
    nome = '---';
}

if(telefone != null && telefone != ''){
    telefone = telefone;
}else{
    telefone = '---';
}

if(email != null && email != ''){
    email = email;
}else{
    email = '---';
}

if(numero != null && numero != ''){
    numero = numero;
}else{
    numero = '---';
}

if(bairro != null && bairro != ''){
    bairro = bairro;
}else{
    bairro = '---';
}

if(cidade != null && cidade != ''){
    cidade = cidade;
}else{
    cidade = '---';
}

if(estado != null && estado != ''){
    estado = estado;
}else{
    estado = '---';
} */



console.log(`
Nome: ${ (nome != null && nome != '') ? nome : '---' }
Telefone: ${telefone}
E-mail: ${email}
Endereço: ${logradouro}, ${numero}
Bairro: ${bairro}
Cidade: ${cidade}/${estado}
`);