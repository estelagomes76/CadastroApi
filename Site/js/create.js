function createPessoa(){
    const primeiroNome =document.getElementById('firstName').value;
    const segundoNome =document.getElementById('niddleName').value;
    const ultimoNome =document.getElementById('lastName').value;
    const cpf =document.getElementById('cpf').value;

    const data ={
        primeiroNome : primeiroNome,
        nomeMeio: segundoNome,
        ultimoNome: ultimoNome,
        cpf: cpf,
    }
    

fetch('https://localhost:7166/api/Pessoa/Create', {

method: 'POST',
headers: {
    'Content-Type': 'application/json'
},
body:JSON.stringify(data)
}).then(response => {
    if(!response.ok){
        alert("Erro ao criar pessoa");
    }
    alert("pessoa criada com sucesso!");
    window.location.href = 'index.html';
})

}
