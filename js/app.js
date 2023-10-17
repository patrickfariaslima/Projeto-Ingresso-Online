function comprar(){
    let tipo = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    
    comprarTipo(tipo, quantidade);
}

function comprarTipo(tipo, quantidade){
    let quantidadeTipo = parseInt(document.getElementById('qtd-'+ tipo).textContent);
    if (quantidade > quantidadeTipo){
        alert ('Quantidade indisponível para o tipo'+ tipo);
    } else {
        quantidadeTipo = quantidadeTipo - quantidade;
        document.getElementById('qtd-'+ tipo).textContent = quantidadeTipo;
        alert ('Compra realizada com sucesso');
    }
}