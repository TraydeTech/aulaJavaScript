
let form = document.querySelector('form');

form.addEventListener('submit', function(){
    let valor = `<li>${this.nome.value}</li>`;
    let div = document.querySelector('ul');
    div.innerHTML = div.innerHTML + valor
})