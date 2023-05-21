



let url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

const select = document.querySelector(`select`)

fetch(url).then(resposta => {
    return resposta.json();
}).then(data => {
    
    let options = `<option value="">Selecione um estado</optin>`;
    for(posicao in data){
        options += `<option value="${data[posicao].sigla}">"${data[posicao].nome}"</option>`
    }

    select.innerHTML = options;
})