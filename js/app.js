function comprar() {
    let tipo = parseInt(document.getElementById('tipo-ingresso').value);
    let qtd = parseInt(document.getElementById('qtd').value);

    if(tipo == 'pista') {
        comprarPista(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = document.getElementById('qtd-pista');

    if(qtd > qtdPista) {
        alert('Não há mais ingressos disponíveis para Pista.');
    }
    else {
        alert('Compra realizada com sucesso.')
    }

    alert(qtdPista)
}

function comprarInferior() {

}

function comprarSuperior() {
    
}