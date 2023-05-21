

let texto = "Meu nome e Jefferson e sou aluno de JavaCristip e aluno de Python"

/*
MODIFICADOIRES 
i - NAO CONSIDERA CASE SENSITIVE
*/ 

let resultado = texto.match(/aluno/ig);
//console.log(resultado);

let trocaTexto = texto.replace(/aluno/ig, "popilo");
//console.log(trocaTexto);

// FORMATANDO CPF

/*let cpf = '97650749991';
let formata = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,function(regex, part1, part2, part3, part4){
    return`${part1}.${part2}.${part3}-${part4}`
});*/

//console.log(formata);

let celular = '47996631717'
let formata = celular.replace(/(\d{2})(\d{5})(\d{4})/,function(regex, part1, part2, part3){
    return `(${part1})${part2}-${part3}`
})

console.log(formata)