comprar();
function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if(tipo.value == 'pista') {
        comprarPista(qtd);
    }
    if(tipo.value == 'inferior') {
        comprarInferior(qtd);
    }
    if(tipo.value == 'superior') {
        comprarSuperior(qtd);
    };
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if(qtd > qtdPista) {
        alert('Não há mais ingressos disponíveis para Pista.');
    }
    else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista
        alert('Compra realizada com sucesso.')
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if(qtd > qtdSuperior) {
        alert('Não há mais ingressos disponíveis para Superior.');
    }
    else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso.');
    }
}

